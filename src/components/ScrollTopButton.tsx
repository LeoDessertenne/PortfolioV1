"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 600;

/**
 * Bouton flottant de retour en haut, revele apres 600px de defilement.
 */
export function ScrollTopButton({ label }: { label: string }) {
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
      aria-label={label}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
    >
      &uarr;
    </a>
  );
}
