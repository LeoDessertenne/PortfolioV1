/**
 * Faits invariants du site : identite, URLs, contacts.
 *
 * Tout ce qui se traduit vit ailleurs : les chaines d'interface dans
 * src/i18n/ui.ts, le contenu redactionnel dans src/content.
 */
export const site = {
  name: "Léo Dessertenne",
  url: "https://leodessertenne.com",
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

/**
 * Sections de la navigation, dans l'ordre d'affichage.
 * Les ancres sont communes aux deux langues ; seuls les libelles changent,
 * via la cle correspondante dans src/i18n/ui.ts.
 */
export const navigation = [
  { href: "#presentation", key: "presentation" },
  { href: "#idtimeline", key: "timeline" },
  { href: "#h-projets", key: "projects" },
  { href: "#competences", key: "skills" },
  { href: "#h-objectifs", key: "objectives" },
  { href: "#contact", key: "contact" },
] as const;
