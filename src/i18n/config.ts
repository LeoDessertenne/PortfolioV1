/**
 * Configuration des langues.
 *
 * L'anglais est la langue par defaut et occupe la racine du site, le francais
 * vit sous /fr. Ce choix conserve l'URL historiquement indexee
 * (leodessertenne.com) et donne deux adresses reelles, chacune indexable,
 * plutot qu'une bascule cote client invisible pour les moteurs.
 */

export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Les deux pages du site, independamment de la langue. */
export type PageKey = "home" | "credits";

/** Code de langue complet, pour les metadonnees et Open Graph. */
export const localeTag: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
};

/** Intitule de chaque langue, ecrit dans cette langue. */
export const localeName: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

/** Libelle court affiche dans le selecteur. */
export const localeShortName: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
};

const segments: Record<PageKey, string> = {
  home: "",
  credits: "credits",
};

/**
 * Chemin d'une page dans une langue donnee.
 * La langue par defaut n'est pas prefixee : `/`, `/credits`.
 * Les autres le sont : `/fr`, `/fr/credits`.
 */
export function localePath(locale: Locale, page: PageKey = "home"): string {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  const segment = segments[page];
  if (!segment) return prefix || "/";
  return `${prefix}/${segment}`;
}

/**
 * URL absolue d'une page, avec slash final.
 *
 * Le site est exporte avec `trailingSlash`, donc servi sur `/fr/` et non `/fr`.
 * Le sitemap doit annoncer exactement la meme forme que la balise canonical,
 * sans quoi Google voit deux adresses la ou il n'y en a qu'une.
 */
export function localeUrl(
  origin: string,
  locale: Locale,
  page: PageKey = "home",
): string {
  const path = localePath(locale, page);
  return `${origin}${path.endsWith("/") ? path : `${path}/`}`;
}
