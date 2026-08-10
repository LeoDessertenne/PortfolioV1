import type { Metadata } from "next";

import { getContent } from "@/content";
import {
  defaultLocale,
  localePath,
  localeTag,
  locales,
  type Locale,
  type PageKey,
} from "@/i18n/config";
import { getUi } from "@/i18n/ui";
import { site } from "@/lib/site";

/**
 * Liens alternes entre les deux langues.
 *
 * `x-default` designe la version servie quand aucune langue ne correspond :
 * c'est l'anglais, a la racine. Sans ces alternates, Google traite les deux
 * versions comme des pages concurrentes plutot que comme des traductions.
 */
function alternates(page: PageKey) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = localePath(locale, page);
  }
  languages["x-default"] = localePath(defaultLocale, page);

  return { languages };
}

/** Metadonnees de la page d'accueil dans une langue. */
export function buildHomeMetadata(locale: Locale): Metadata {
  const { meta } = getContent(locale);

  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    applicationName: `${site.name} — portfolio`,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    keywords: meta.keywords,
    alternates: {
      canonical: localePath(locale, "home"),
      ...alternates("home"),
    },
    icons: {
      icon: "/Image/signature.png",
      shortcut: "/Image/signature.png",
    },
    openGraph: {
      type: "profile",
      firstName: "Léo",
      lastName: "Dessertenne",
      locale: localeTag[locale],
      url: localePath(locale, "home"),
      siteName: meta.title,
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
      },
    },
  };
}

/** Metadonnees de la page de credits dans une langue. */
export function buildCreditsMetadata(locale: Locale): Metadata {
  const content = getContent(locale);
  const ui = getUi(locale);

  return {
    metadataBase: new URL(site.url),
    title: ui.credits.title,
    description: content.creditsDescription,
    alternates: {
      canonical: localePath(locale, "credits"),
      ...alternates("credits"),
    },
    // Page utilitaire : indexee mais volontairement laissee hors sitemap.
    robots: { index: false, follow: true },
  };
}

/**
 * Donnees structurees schema.org.
 *
 * C'est ce qui permet a Google de relier le site a une personne nommee plutot
 * qu'a une page quelconque, et donc de le remonter sur une recherche par nom.
 */
export function buildJsonLd(locale: Locale) {
  const { meta } = getContent(locale);
  const ui = getUi(locale);
  const pageUrl = `${site.url}${localePath(locale, "home")}`;

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    givenName: "Léo",
    familyName: "Dessertenne",
    jobTitle: ui.hero.role,
    description: meta.description,
    url: site.url,
    email: `mailto:${site.email}`,
    image: `${site.url}/Image/signature.png`,
    sameAs: [site.github, site.linkedin, site.leetcode],
    worksFor: {
      "@type": "Organization",
      name: site.employer.name,
      url: site.employer.url,
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: site.school.name,
        url: site.school.url,
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Université Gustave Eiffel",
        url: "https://www.univ-gustave-eiffel.fr/",
      },
    ],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "TypeScript",
      "SQL",
      "Fullstack web development",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: meta.title,
    url: pageUrl,
    inLanguage: locale === "fr" ? "fr-FR" : "en-US",
    author: { "@type": "Person", name: site.name },
  };

  return [person, website];
}
