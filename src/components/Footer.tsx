import Link from "next/link";

import { CurrentYear } from "@/components/CurrentYear";
import { localePath, type Locale } from "@/i18n/config";
import type { UiStrings } from "@/i18n/ui";
import { site } from "@/lib/site";

type SocialLink = {
  href: string;
  src: string;
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
          <img src={link.src} alt={link.label} />
        </a>
      ))}
    </div>
  );
}

/** Pied de page de la page d'accueil. */
export function SiteFooter({ locale, ui }: { locale: Locale; ui: UiStrings }) {
  return (
    <footer>
      <Link href={localePath(locale, "credits")} id="credits">
        {ui.footer.credits}
      </Link>

      <SocialLinks
        links={[
          {
            href: site.github,
            src: "/Image/Accueil/github.png",
            label: ui.hero.github,
          },
          {
            href: site.linkedin,
            src: "/Image/Accueil/linkedin.png",
            label: ui.hero.linkedin,
          },
        ]}
      />

      <hr />
      <p>
        {site.name} © <CurrentYear fallback={new Date().getFullYear()} />{" "}
        {ui.footer.rights}
      </p>
    </footer>
  );
}

/** Pied de page de la page de credits, qui expose davantage de liens. */
export function CreditsFooter({ ui }: { ui: UiStrings }) {
  return (
    <footer>
      <SocialLinks
        links={[
          {
            href: site.github,
            src: "/Image/Accueil/github.png",
            label: ui.hero.github,
          },
          {
            href: site.leetcode,
            src: "/Image/Accueil/leetcode.png",
            label: ui.hero.leetcode,
          },
          {
            href: site.linkedin,
            src: "/Image/Accueil/linkedin.png",
            label: ui.hero.linkedin,
          },
          {
            href: `mailto:${site.email}`,
            src: "/Image/Accueil/mail.png",
            label: ui.hero.email,
          },
        ]}
      />

      <hr />
      <p>
        {site.name} © <CurrentYear fallback={new Date().getFullYear()} />{" "}
        {ui.footer.rights}
      </p>
    </footer>
  );
}
