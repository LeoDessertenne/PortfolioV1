import type { MetadataRoute } from "next";

import { defaultLocale, localeUrl, locales } from "@/i18n/config";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/**
 * Les deux versions linguistiques de l'accueil, chacune declarant ses
 * alternates : c'est ainsi que Google les traite comme des traductions l'une
 * de l'autre plutot que comme du contenu duplique.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, localeUrl(site.url, locale)]),
  );

  return locales.map((locale) => ({
    url: localeUrl(site.url, locale),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === defaultLocale ? 1 : 0.9,
    alternates: { languages },
  }));
}
