/**
 * Constantes du site, referencees par les metadonnees, le JSON-LD et les
 * composants. Un seul endroit a modifier en cas de changement de domaine,
 * d'adresse mail ou de reseau social.
 */

export const site = {
  name: "Léo Dessertenne",
  role: "Développeur fullstack",
  url: "https://leodessertenne.com",
  locale: "fr_FR",
  title: "Léo Dessertenne — Développeur Fullstack",
  description:
    "Léo Dessertenne, développeur fullstack en alternance chez IDM Group et " +
    "élève ingénieur à l'ESIEE Paris. Découvrez mes projets et contactez-moi " +
    "par email pour toute opportunité de collaboration.",
  email: "pro.leo.dessertenne@gmail.com",
  cv: "/Image/Leo_DESSERTENNE_CV.pdf",
  github: "https://github.com/LeoDessertenne",
  linkedin: "https://www.linkedin.com/in/l%C3%A9o-dessertenne/",
  leetcode: "https://leetcode.com/LeoDessertenne/",
  employer: {
    name: "IDM Group",
    url: "https://www.idmgroup.com/",
  },
  school: {
    name: "ESIEE Paris",
    url: "https://www.esiee.fr/",
  },
} as const;

/** Sections de la navigation principale, dans l'ordre d'affichage. */
export const navigation = [
  { href: "#presentation", label: "Présentation" },
  { href: "#idtimeline", label: "Mon parcours" },
  { href: "#h-projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#h-objectifs", label: "Objectifs" },
  { href: "#contact", label: "Me contacter" },
] as const;
