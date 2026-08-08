import Link from "next/link";

import { CurrentYear } from "@/components/CurrentYear";
import { site } from "@/lib/site";

type SocialLink = {
  href: string;
  src: string;
  alt: string;
};

function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="photos-container-footer">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
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
          },
          {
            href: site.linkedin,
            src: "/Image/Accueil/linkedin.png",
            alt: `Profil LinkedIn de ${site.name}`,
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
          { href: site.github, src: "/Image/Accueil/github.png", alt: "github" },
          {
            href: site.leetcode,
            src: "/Image/Accueil/leetcode.png",
            alt: "leetcode",
          },
          {
            href: site.linkedin,
            src: "/Image/Accueil/linkedin.png",
            alt: "linkedin",
          },
          {
            href: `mailto:${site.email}`,
            src: "/Image/Accueil/mail.png",
            alt: "mail",
          },
        ]}
      />

      <hr />
      <p>{site.name} © 2024 All rights reserved.</p>
    </footer>
  );
}
