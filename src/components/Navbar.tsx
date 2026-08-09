"use client";

import { useEffect, useState } from "react";

import type { UiStrings } from "@/i18n/ui";
import { navigation } from "@/lib/site";

const MENU_ID = "custom-nav-links";

/**
 * Navigation principale : pilule flottante en verre au-dela de 1100px, panneau
 * plein ecran ouvert par le bouton hamburger en dessous.
 *
 * Le lien de la section a l'ecran recoit la classe `is-active` : on retient la
 * derniere section dont le haut est deja passe sous la navbar. Le calcul est
 * relance au scroll et au redimensionnement, pas par un IntersectionObserver :
 * la bande d'observation pouvait etre franchie entiere entre deux frames (saut
 * d'ancre, scroll rapide) sans qu'aucun callback ne parte, laissant
 * l'indicateur bloque sur la section precedente.
 */
export function Navbar({ ui }: { ui: UiStrings }) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Le panneau mobile couvre la page : l'arriere-plan ne doit pas defiler.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const offset = window.innerHeight * 0.35;

      let current: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          current = `#${section.id}`;
        }
      }

      // En bas de page la derniere section n'atteint pas forcement le seuil :
      // sans ce rattrapage son lien ne s'allumerait jamais.
      const doc = document.documentElement;
      const atBottom = window.scrollY + window.innerHeight >= doc.scrollHeight - 2;
      const last = sections.at(-1);
      if (atBottom && last && last.getBoundingClientRect().top < window.innerHeight) {
        current = `#${last.id}`;
      }

      setActiveId(current);
    };

    // Un rAF par salve d'evenements : le calcul reste lie a la position reelle
    // sans recalculer a chaque tick de scroll.
    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Image/menu-btn.png"
        alt={ui.nav.openMenu}
        className="hamburger"
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={MENU_ID}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpen((value) => !value);
          }
        }}
      />

      <nav className={open ? "custom-nav nav-menu" : "custom-nav"}>
        <ul
          id={MENU_ID}
          className={open ? "custom-nav-links mobile-menu" : "custom-nav-links"}
        >
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeId === item.href ? "is-active" : undefined}
                aria-current={activeId === item.href ? "true" : undefined}
                // Sans cela le panneau resterait ouvert par-dessus la section visee.
                onClick={() => setOpen(false)}
              >
                {ui.nav[item.key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
