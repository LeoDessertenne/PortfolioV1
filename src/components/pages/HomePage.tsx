import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Navbar } from "@/components/Navbar";
import { Objectives } from "@/components/Objectives";
import { Presentation } from "@/components/Presentation";
import { Projects } from "@/components/Projects";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ScrollTopButton } from "@/components/ScrollTopButton";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getUi } from "@/i18n/ui";

/** Page d'accueil, rendue dans la langue demandee. */
export function HomePage({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const content = getContent(locale);

  return (
    <>
      <a href="#presentation" className="skip-link">
        {ui.skipLink}
      </a>

      <Navbar ui={ui} />
      <LanguageSwitcher locale={locale} page="home" />
      <ScrollTopButton label={ui.scrollTop} />

      <div className="page-shell">
        <Hero ui={ui} intro={content.heroIntro} />
        <Presentation
          heading={ui.sections.presentation}
          body={content.presentation}
        />
        <Timeline heading={ui.sections.timeline} entries={content.timeline} />
        <Projects ui={ui} lead={content.projectsLead} groups={content.projectGroups} />
        <Skills
          ui={ui}
          professionalQualities={content.professionalQualities}
          tools={content.tools}
          programmingLanguages={content.programmingLanguages}
        />
        <Objectives
          heading={ui.sections.objectives}
          body={content.objectives}
        />
        <Contact ui={ui} body={content.contactLead} />
      </div>

      {/* Hors de .page-shell : le pied de page occupe toute la largeur. */}
      <SiteFooter locale={locale} ui={ui} />

      <RevealOnScroll />
    </>
  );
}
