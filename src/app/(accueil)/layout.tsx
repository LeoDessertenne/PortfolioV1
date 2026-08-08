/**
 * Le bundle CSS de l'accueil est importe ici, et non dans le layout racine,
 * pour qu'il ne soit pas servi a la page de credits : celle-ci ne chargeait pas
 * Bootstrap dans l'ancien site et son rendu en depend. Voir
 * src/styles/credits-page.css.
 */
import "@/styles/globals.css";

export default function AccueilLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
