import type { ReactNode } from "react";

/**
 * Titre de section : un <h2> et un filet horizontal.
 *
 * La variante decide du sens de lecture. « droite » (sections claires) inverse
 * l'ordre visuel via flex-direction: row-reverse, le filet passant a gauche du
 * titre ; « gauche » (sections sombres) garde l'ordre naturel. L'ordre du DOM
 * reste le meme dans les deux cas.
 */
export function SectionHeading({
  variant,
  children,
}: {
  variant: "gauche" | "droite";
  children: ReactNode;
}) {
  return (
    <div className={variant === "gauche" ? "gauche-box" : "droite-box"}>
      <h2>{children}</h2>
      <hr />
    </div>
  );
}
