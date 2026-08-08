import { en } from "@/content/en";
import { fr } from "@/content/fr";
import type { SiteContent } from "@/content/types";
import type { Locale } from "@/i18n/config";

const content: Record<Locale, SiteContent> = { en, fr };

/** Contenu redactionnel du site dans la langue demandee. */
export function getContent(locale: Locale): SiteContent {
  return content[locale];
}
