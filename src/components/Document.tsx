import type { ReactNode } from "react";

import type { Locale } from "@/i18n/config";
import { manrope } from "@/lib/fonts";
import { buildJsonLd } from "@/lib/metadata";

/**
 * Politique de securite du contenu.
 *
 * GitHub Pages ne permet pas de definir d'en-tetes HTTP : elle passe donc par
 * une balise <meta>, ce qui exclut `frame-ancestors` (ignore dans ce mode).
 * `'unsafe-inline'` reste necessaire pour les scripts d'amorcage de Next et les
 * styles injectes ; l'interet principal ici est de n'autoriser aucun script,
 * style, police ou media d'une autre origine.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'none'",
  "img-src 'self' data:",
  "font-src 'self'",
  "media-src 'self'",
  "connect-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "upgrade-insecure-requests",
].join("; ");

/**
 * La politique n'est appliquee qu'aux builds de production.
 *
 * En developpement, Next compile les modules avec eval() et recharge le code
 * via un WebSocket. `script-src` sans 'unsafe-eval' et `connect-src 'self'`
 * bloquent les deux : le bundle ne s'execute pas du tout, la page s'affiche
 * correctement mais plus rien n'est interactif. Plutot que d'assouplir la
 * politique livree en production, on ne la pose pas en developpement.
 */
const isProduction = process.env.NODE_ENV === "production";

/**
 * Squelette du document, partage par les deux layouts racines.
 *
 * Chaque langue a son propre layout racine afin que <html lang> soit correct :
 * le design utilise `hyphens: auto` un peu partout, et la langue du document
 * decide des regles de cesure appliquees.
 */
export function Document({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <html lang={locale} className={manrope.variable}>
      {/*
        La regle vise `next/head`, qui n'existe que dans le Pages Router : dans
        l'App Router, un layout racine declare bien son <head>. La CSP doit s'y
        trouver pour etre appliquee, une balise http-equiv placee dans le corps
        etant ignoree.
      */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {isProduction ? (
          <meta
            httpEquiv="Content-Security-Policy"
            content={contentSecurityPolicy}
          />
        ) : null}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {buildJsonLd(locale).map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            // Objet statique construit dans lib/metadata : aucune donnee externe.
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
