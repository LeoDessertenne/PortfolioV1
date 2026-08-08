"use client";

import { useEffect, useState } from "react";

import { navigation } from "@/lib/site";

const MENU_ID = "custom-nav-links";

/**
 * Navigation principale : pilule flottante en verre au-dela de 1100px, panneau
 * plein ecran ouvert par le bouton hamburger en dessous.
 *
 * Le lien de la section a l'ecran recoit la classe `is-active`. Le calcul se
 * fait a partir des positions reelles plutot que du seul declenchement de
 * l'observateur : on retient la derniere section dont le haut est deja passe
 * sous la navbar, ce qui est plus stable qu'un simple seuil de visibilite.
 */
export function Navbar() {
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

    const update = () => {
      const offset = window.innerHeight * 0.35;
      let current: string | null = null;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= offset) {
          current = `#${section.id}`;
        }
      });
      setActiveId(current);
    };

    update();
    const observer = new IntersectionObserver(update, {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0,
    });
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Image/menu-btn.png"
        alt="Ouvrir le menu"
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
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
