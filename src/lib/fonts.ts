import { Manrope } from "next/font/google";

/**
 * Manrope est auto-hebergee : plus aucun appel a fonts.googleapis.com.
 *
 * Aucune graisse n'est precisee, ce qui charge la police variable et couvre
 * tout l'axe 200..800. Le CSS demande des graisses de 300 a 700 : elles sont
 * donc rendues avec les vrais dessins, et non synthetisees.
 *
 * Instanciee une seule fois ici : next/font exige un appel au niveau du module,
 * et les deux layouts racines (un par langue) doivent partager la meme police.
 */
export const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
});
