"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 600;

/**
 * Bouton flottant de retour en haut, revele apres 600px de defilement.
 * Portage de l'ancien scripts/script_arrow_home.js.
 */
export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= SHOW_AFTER_PX);

    // Etat initial : la page peut deja etre defilee au chargement (ancre, retour).
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#"
      id="arrow-up"
      className={visible ? "show" : undefined}
      aria-label="Revenir en haut de la page"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
    >
      &uarr;
    </a>
  );
}
