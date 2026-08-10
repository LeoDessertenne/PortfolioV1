import type { ReactNode } from "react";

/* ------------------------------------------------------------------ Parcours */

export type TimelineEntry = {
  /** Periode affichee au-dessus du titre. */
  period: string;
  title: string;
  body: ReactNode;
};

/* ------------------------------------------------------------------- Projets */

export type ProjectVideo = {
  /** Titre de section affiche au-dessus du lecteur. */
  heading: string;
  src: string;
  poster?: string;
};

export type ProjectLink = {
  href: string;
  label: string;
};

export type Project = {
  /** Identifiant de la modale, repris comme ancre et pour aria-labelledby. */
  id: string;
  /** Titre affiche sur la carte. */
  title: string;
  /** Titre affiche dans la modale, quand il differe de celui de la carte. */
  modalTitle?: string;
  /** Classe portant le visuel de la carte (voir styles/projects.css). */
  mediaClassName?: string;
  /** Carte sur deux colonnes. */
  featured?: boolean;
  /** Texte de la carte. */
  excerpt: string;
  /** Etiquettes technologiques de la carte. */
  tags: string[];
  /** Corps de la section « Résumé » de la modale. */
  summary: ReactNode;
  /** Blocs libres inseres entre le resume et les colonnes competences/langages. */
  extra?: ReactNode;
  skills: ReactNode[];
  languages: string[];
  video?: ProjectVideo;
  /** Mention en italique affichee sous le contenu (hebergement, disponibilite). */
  note?: ReactNode;
  links?: ProjectLink[];
};

export type ProjectGroup = {
  heading: string;
  projects: Project[];
};

/* --------------------------------------------------------------- Competences */

/** Groupe de competences rendu sous forme d'etiquettes. */
export type TagGroup = {
  title: string;
  items: string[];
};

/** Groupe d'outils rendu sous forme de logos legendes. */
export type ToolGroup = {
  title: string;
  tools: { name: string; icon: string }[];
};

/* ------------------------------------------------------------------- Credits */

export type CreditLink = {
  /** Intitule affiche au-dessus du lien, absent pour les listes de liens nus. */
  label?: string;
  href: string;
  text: string;
  title?: string;
};

export type CreditSection = {
  heading: string;
  links: CreditLink[];
};

/* ----------------------------------------------------------- Contenu complet */

/**
 * Tout le contenu redactionnel du site pour une langue.
 *
 * Chaque langue exporte un objet de ce type : une cle manquante ou une
 * structure divergente devient une erreur de compilation, ce qui evite que les
 * deux versions se desynchronisent silencieusement.
 */
export type SiteContent = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  heroIntro: ReactNode;
  presentation: ReactNode;
  timeline: TimelineEntry[];
  projectsLead: ReactNode;
  projectGroups: ProjectGroup[];
  professionalQualities: TagGroup[];
  tools: ToolGroup[];
  programmingLanguages: TagGroup[];
  objectives: ReactNode;
  contactLead: ReactNode;
  creditsDescription: string;
  creditSections: CreditSection[];
};
