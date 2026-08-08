"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

/** Duree de la transition d'entree/sortie, alignee sur le CSS de la modale. */
const TRANSITION_MS = 300;

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "video[controls]",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");

/**
 * Bloque le defilement de l'arriere-plan et compense la disparition de la barre
 * de defilement par un padding, pour que la page ne sursaute pas a l'ouverture.
 * Retourne la fonction de restauration.
 */
function lockBodyScroll(): () => void {
  const { body, documentElement } = document;
  const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
  const previousOverflow = body.style.overflow;
  const previousPaddingRight = body.style.paddingRight;
  const currentPaddingRight =
    Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;

  body.style.overflow = "hidden";
  if (scrollbarWidth > 0) {
    body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
  }
  body.classList.add("modal-open");

  return () => {
    body.style.overflow = previousOverflow;
    body.style.paddingRight = previousPaddingRight;
    body.classList.remove("modal-open");
  };
}

export type ModalProps = {
  id: string;
  title: string;
  /** Intitule accessible du bouton de fermeture, traduit. */
  closeLabel: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

/**
 * Boite de dialogue modale.
 *
 * Remplace le composant JavaScript de Bootstrap, dont c'etait le seul usage sur
 * le site : le bundle (80 ko) et Popper ont donc pu etre supprimes. Le balisage,
 * les classes et l'enchainement des transitions sont ceux de Bootstrap 5.3 afin
 * que le rendu et l'animation restent identiques :
 *
 *   ouverture -> display: block, puis .show a la frame suivante (declenche la
 *                transition CSS sur .modal-dialog)
 *   fermeture -> retrait de .show, puis display: none apres la transition
 *
 * S'y ajoutent trois comportements que Bootstrap fournissait aussi : fermeture
 * par Echap, fermeture au clic sur le fond, et confinement du focus.
 */
export function Modal({
  id,
  title,
  closeLabel,
  open,
  onClose,
  children,
}: ModalProps) {
  const labelId = `${id}-title`;
  const dialogRef = useRef<HTMLDivElement>(null);

  // `displayed` pilote display:block, `shown` la classe .show. Les deux sont
  // dissocies pour laisser au navigateur une frame de rendu entre les deux,
  // sans quoi la transition CSS ne se declenche pas.
  const [displayed, setDisplayed] = useState(false);
  const [shown, setShown] = useState(false);
  const [portalReady, setPortalReady] = useState(false);

  useEffect(() => setPortalReady(true), []);

  // Etape 1 : afficher le conteneur (display: block), encore sans .show.
  useEffect(() => {
    if (open) {
      setDisplayed(true);
      return;
    }

    setShown(false);
    const timer = window.setTimeout(() => setDisplayed(false), TRANSITION_MS);
    return () => window.clearTimeout(timer);
  }, [open]);

  // Etape 2 : poser .show au rendu suivant, ce qui declenche les transitions.
  //
  // La lecture de offsetHeight force le navigateur a calculer les styles de
  // l'etat initial avant l'ajout de la classe : sans elle, les deux etats
  // peuvent etre fusionnes en un seul calcul et la transition ne part pas.
  // C'est le meme procede que Bootstrap. Surtout, on n'utilise pas
  // requestAnimationFrame, que Chrome suspend dans un onglet en arriere-plan :
  // la modale s'ouvrirait alors invisible tout en bloquant la page.
  useEffect(() => {
    if (!displayed || !open) return;
    void dialogRef.current?.offsetHeight;
    setShown(true);
  }, [displayed, open]);

  // Verrouillage du defilement et restitution du focus, sur toute la duree
  // d'affichage (transition de sortie comprise).
  useEffect(() => {
    if (!displayed) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const releaseScroll = lockBodyScroll();
    dialogRef.current?.focus();

    return () => {
      releaseScroll();
      previouslyFocused?.focus?.();
    };
  }, [displayed]);

  // Les videos continuaient de jouer en arriere-plan quand la modale se
  // refermait : on les met en pause, quelle que soit la facon de fermer.
  useEffect(() => {
    if (open) return;
    dialogRef.current
      ?.querySelectorAll("video")
      .forEach((video) => video.pause());
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        FOCUSABLE_SELECTOR,
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // La modale est rendue directement sous <body>, jamais dans la section qui
  // l'ouvre : les panneaux `.glass--dark` portent un backdrop-filter, et un
  // ancetre filtre devient le bloc conteneur de ses descendants en
  // position: fixed. La modale se retrouverait alors positionnee et rognee
  // dans la section au lieu de couvrir la fenetre.
  //
  // Avant l'hydratation il n'y a pas de portail possible : ce n'est pas un
  // probleme, une modale fermee ne rend rien de visible (display: none).
  if (!portalReady) return null;

  return createPortal(
    <>
      <div
        ref={dialogRef}
        className={shown ? "modal fade show" : "modal fade"}
        id={id}
        tabIndex={-1}
        role="dialog"
        aria-modal={open || undefined}
        aria-labelledby={labelId}
        aria-hidden={open ? undefined : true}
        style={displayed ? { display: "block" } : undefined}
        onClick={(event) => {
          // Seul un clic sur le fond ferme : les clics dans le panneau remontent
          // jusqu'ici mais ont une autre cible.
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title" id={labelId}>
                {title}
              </h2>
              <button
                type="button"
                className="btn-close"
                aria-label={closeLabel}
                onClick={onClose}
              />
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>

      {displayed ? (
        <div
          className={shown ? "modal-backdrop fade show" : "modal-backdrop fade"}
        />
      ) : null}
    </>,
    document.body,
  );
}
