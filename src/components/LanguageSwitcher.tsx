"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  localeName,
  localePath,
  localeShortName,
  locales,
  type Locale,
  type PageKey,
} from "@/i18n/config";
import { getUi } from "@/i18n/ui";

/**
 * Selecteur de langue : petite bulle en verre, en haut a droite.
 *
 * Les options sont de vrais liens vers l'autre version de la page courante,
 * et non une bascule d'etat : chaque langue a son URL, indexable et
 * partageable, et le choix survit au rechargement sans stockage local.
 */
export function LanguageSwitcher({
  locale,
  page,
}: {
  locale: Locale;
  page: PageKey;
}) {
  const ui = getUi(locale);
  const [open, setOpen] = useState(false);
  const conteneur = useRef<HTMLDivElement>(null);

  // Fermeture au clic exterieur et a la touche Echap.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!conteneur.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="lang-switch" ref={conteneur}>
      <button
        type="button"
        className="lang-switch-button"
        aria-label={ui.language.switchTo}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="lang-switch-globe" aria-hidden="true">
          {/* Globe minimal, dessine en SVG pour rester net a toute taille. */}
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
            <path
              d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </svg>
        </span>
        {localeShortName[locale]}
        <span className="lang-switch-chevron" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none">
            <path
              d="m6 9 6 6 6-6"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <ul className="lang-switch-menu" role="menu" hidden={!open}>
        {locales.map((option) => (
          <li key={option} role="none">
            <Link
              href={localePath(option, page)}
              role="menuitem"
              hrefLang={option}
              lang={option}
              className={
                option === locale
                  ? "lang-switch-option is-current"
                  : "lang-switch-option"
              }
              aria-current={option === locale ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              <span className="lang-switch-code">
                {localeShortName[option]}
              </span>
              {localeName[option]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
