import Link from "next/link";
import { Fragment } from "react";

import { CreditsFooter } from "@/components/Footer";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getContent } from "@/content";
import { localePath, type Locale } from "@/i18n/config";
import { getUi } from "@/i18n/ui";

/** Page de credits, rendue dans la langue demandee. */
export function CreditsPage({ locale }: { locale: Locale }) {
  const ui = getUi(locale);
  const { creditSections } = getContent(locale);

  return (
    <>
      <LanguageSwitcher locale={locale} page="credits" />

      <div className="credits-page">
        <Link href={localePath(locale, "home")} className="go-back">
          {ui.credits.back}
        </Link>

        <div className="credits-all">
          <h1>{ui.credits.title}</h1>
          <div className="credits-corps">
            {creditSections.map((section) => (
              <Fragment key={section.heading}>
                <h2>{section.heading}</h2>
                <div className="credits-group">
                  {section.links.map((link) => (
                    <Fragment key={link.href}>
                      {link.label ? <p>{link.label}</p> : null}
                      <a href={link.href} title={link.title}>
                        {link.text}
                      </a>
                    </Fragment>
                  ))}
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <CreditsFooter ui={ui} />
    </>
  );
}
