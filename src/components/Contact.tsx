import type { ReactNode } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import type { UiStrings } from "@/i18n/ui";
import { site } from "@/lib/site";

/** Section « Contact ». */
export function Contact({ ui, body }: { ui: UiStrings; body: ReactNode }) {
  return (
    <div className="contact gauche glass--dark on-dark" id="contact">
      <SectionHeading variant="gauche">{ui.sections.contact}</SectionHeading>

      <p className="p-gauche reveal-apparition">{body}</p>

      <div className="hero-cta">
        <a href={`mailto:${site.email}`} className="btn-glass btn-glass--primary">
          {site.email}
        </a>
        <a
          href={site.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass"
        >
          {ui.hero.cv}
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glass"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
