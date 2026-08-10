"use client";

import { useEffect } from "react";

const RATIO = 0.1;

/**
 * Revele les elements portant la classe `reveal-apparition` lorsqu'ils entrent
 * dans le viewport, en leur ajoutant `reveal-visible`.
 *
 * Le composant ne rend rien : il observe le DOM deja produit par le serveur,
 * exactement comme l'ancien scripts/script_onscroll.js. Cela evite d'envelopper
 * chaque element revele dans un composant client, et conserve un balisage
 * identique a l'ancienne page.
 */
export function RevealOnScroll() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal-apparition");

    // Repli si l'API n'est pas disponible : tout afficher plutot que rien.
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((target) => target.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > RATIO) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: RATIO },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}
