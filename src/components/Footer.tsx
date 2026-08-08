import Link from "next/link";

import { CurrentYear } from "@/components/CurrentYear";
import { site } from "@/lib/site";

type SocialLink = {
  href: string;
  src: string;
  alt: string;
  /** Intitule accessible du lien : l'image seule ne decrit pas la destination. */
  label: string;
};

function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="photos-container-footer">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          aria-label={link.label}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={link.src} alt={link.alt} />
        </a>
      ))}
    </div>
  );
}

/** Pied de page de la page d'accueil. */
export function SiteFooter() {
  return (
    <footer>
      <Link href="/credits" id="credits">
        Crédits
      </Link>

      <SocialLinks
        links={[
          {
            href: site.github,
            src: "/Image/Accueil/github.png",
            alt: `Profil GitHub de ${site.name}`,
            label: "Profil GitHub",
          },
          {
            href: site.linkedin,
            src: "/Image/Accueil/linkedin.png",
            alt: `Profil LinkedIn de ${site.name}`,
            label: "Profil LinkedIn",
          },
        ]}
      />

      <hr />
      <p>
        {site.name} © <CurrentYear fallback={new Date().getFullYear()} /> Tous
        droits réservés
      </p>
    </footer>
  );
}

/** Pied de page de la page de credits, qui expose davantage de liens. */
export function CreditsFooter() {
  return (
    <footer>
      <SocialLinks
        links={[
          {
            href: site.github,
            src: "/Image/Accueil/github.png",
            alt: "github",
            label: "Profil GitHub",
          },
          {
            href: site.leetcode,
            src: "/Image/Accueil/leetcode.png",
            alt: "leetcode",
            label: "Profil LeetCode",
          },
          {
            href: site.linkedin,
            src: "/Image/Accueil/linkedin.png",
            alt: "linkedin",
            label: "Profil LinkedIn",
          },
          {
            href: `mailto:${site.email}`,
            src: "/Image/Accueil/mail.png",
            alt: "mail",
            label: "M'envoyer un email",
          },
        ]}
      />

      <hr />
      <p>{site.name} © 2024 All rights reserved.</p>
    </footer>
  );
}
