import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import { site } from "@/lib/site";

// Pas d'import CSS ici : chaque section du site charge son propre bundle
// (src/app/(accueil)/layout.tsx et src/app/credits/layout.tsx), car la page de
// credits ne doit pas recevoir le reboot de Bootstrap.

/**
 * Manrope est desormais auto-hebergee : plus aucun appel a fonts.googleapis.com
 * au chargement de la page.
 *
 * Une seule graisse (400) est chargee, comme le faisait l'ancienne feuille de
 * style. Le CSS demande par endroits des graisses 100 a 700 : le navigateur les
 * synthetise a partir de la 400. Charger les vraies graisses changerait le rendu
 * du texte, c'est donc volontairement laisse en l'etat.
 */
const manrope = Manrope({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: `Portfolio de ${site.name}`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    site.name,
    "développeur fullstack",
    "développeur Java",
    "Spring Boot",
    "React",
    "Next.js",
    "ESIEE Paris",
    "IDM Group",
    "alternance informatique",
    "portfolio développeur",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/Image/signature.png",
    shortcut: "/Image/signature.png",
  },
  openGraph: {
    type: "profile",
    firstName: "Léo",
    lastName: "Dessertenne",
    locale: site.locale,
    url: site.url,
    siteName: site.title,
    title: site.title,
    description: site.description,
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Donnees structurees schema.org.
 *
 * C'est ce qui permet a Google de relier le site a une personne nommee plutot
 * qu'a une page quelconque, et donc de le remonter sur une recherche par nom.
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  givenName: "Léo",
  familyName: "Dessertenne",
  jobTitle: site.role,
  description: site.description,
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
    "Développement web fullstack",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.title,
  url: site.url,
  inLanguage: "fr-FR",
  author: { "@type": "Person", name: site.name },
};

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <head>
        <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script
          type="application/ld+json"
          // Objet statique defini ci-dessus : aucune donnee externe n'y entre.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
