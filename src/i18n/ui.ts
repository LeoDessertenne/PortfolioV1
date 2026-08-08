import type { Locale } from "@/i18n/config";

/**
 * Chaines d'interface : libelles, titres de section, intitules accessibles.
 * Les contenus longs (parcours, projets, credits) vivent dans src/content.
 *
 * Le type est derive de la version anglaise : oublier une cle dans la
 * traduction francaise devient une erreur de compilation.
 */
const en = {
  skipLink: "Skip to content",

  nav: {
    presentation: "About",
    timeline: "Career",
    projects: "Projects",
    skills: "Skills",
    objectives: "Goals",
    contact: "Contact me",
    openMenu: "Open the menu",
  },

  language: {
    label: "Language",
    switchTo: "Switch language",
  },

  hero: {
    role: "Fullstack developer",
    contact: "Contact me",
    seeProjects: "See my projects",
    cv: "CV (PDF)",
    scroll: "Discover",
    github: "GitHub profile",
    linkedin: "LinkedIn profile",
    leetcode: "LeetCode profile",
    email: "Email me",
  },

  sections: {
    presentation: "About",
    timeline: "My Career",
    projects: "Projects",
    skills: "Skills",
    objectives: "My goals",
    contact: "Contact",
  },

  skills: {
    professional: "Professional qualities",
    tools: "Tools",
    languages: "Programming languages",
  },

  project: {
    open: "View project",
    summary: "Summary",
    developedSkills: "Skills developed",
    languagesUsed: "Languages and software used",
    close: "Close",
  },

  scrollTop: "Back to top",

  footer: {
    credits: "Credits",
    rights: "All rights reserved",
  },

  credits: {
    title: "Credits",
    back: "Back",
  },
} as const;

/** La traduction doit couvrir exactement les memes cles que l'anglais. */
type Dictionary = {
  [K in keyof typeof en]: (typeof en)[K] extends string
    ? string
    : { [P in keyof (typeof en)[K]]: string };
};

const fr: Dictionary = {
  skipLink: "Aller au contenu",

  nav: {
    presentation: "Présentation",
    timeline: "Mon parcours",
    projects: "Projets",
    skills: "Compétences",
    objectives: "Objectifs",
    contact: "Me contacter",
    openMenu: "Ouvrir le menu",
  },

  language: {
    label: "Langue",
    switchTo: "Changer de langue",
  },

  hero: {
    role: "Développeur fullstack",
    contact: "Me contacter",
    seeProjects: "Voir mes projets",
    cv: "CV PDF",
    scroll: "Découvrir",
    github: "Profil GitHub",
    linkedin: "Profil LinkedIn",
    leetcode: "Profil LeetCode",
    email: "M'envoyer un email",
  },

  sections: {
    presentation: "Présentation",
    timeline: "Mon Parcours",
    projects: "Projets",
    skills: "Compétences",
    objectives: "Mes objectifs",
    contact: "Contact",
  },

  skills: {
    professional: "Qualités Professionnelles",
    tools: "Outils",
    languages: "Langages de programmation",
  },

  project: {
    open: "Voir le projet",
    summary: "Résumé",
    developedSkills: "Compétences Développées",
    languagesUsed: "Langages et logiciels utilisés",
    close: "Fermer",
  },

  scrollTop: "Revenir en haut de la page",

  footer: {
    credits: "Crédits",
    rights: "Tous droits réservés",
  },

  credits: {
    title: "Crédits",
    back: "Retour",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export type UiStrings = Dictionary;

export function getUi(locale: Locale): Dictionary {
  return dictionaries[locale];
}
