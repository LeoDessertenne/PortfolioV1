/**
 * La page de credits a son propre bundle CSS, sans le reboot de Bootstrap :
 * l'ancienne credits.html ne liait pas Bootstrap, et l'y ajouter modifierait
 * les marges de la page. Voir src/styles/credits-page.css.
 */
import "@/styles/credits-page.css";

export default function CreditsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
