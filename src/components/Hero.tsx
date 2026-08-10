import type { ReactNode } from "react";

import { site } from "@/lib/site";
import type { UiStrings } from "@/i18n/ui";

/**
 * En-tete plein ecran : nom en degrade, role, accroche, actions et liens
 * sociaux, puis l'indicateur de defilement.
 */
export function Hero({ ui, intro }: { ui: UiStrings; intro: ReactNode }) {
  return (
    <header className="hero">
      <h1 id="h1-moi" className="hero-title">
        {site.name}
      </h1>

      <div className="hero-card">
        <p id="moi-role">{ui.hero.role}</p>
        <p id="moi">{intro}</p>

        <div className="hero-cta">
          <a
            href={`mailto:${site.email}`}
            className="btn-glass btn-glass--primary"
          >
            {ui.hero.contact}
          </a>
          <a href="#h-projets" className="btn-glass">
            {ui.hero.seeProjects}
          </a>
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            {ui.hero.cv}
          </a>
        </div>

        <div className="photos-container">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.hero.github}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Image/Accueil/github.png" alt={ui.hero.github} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.hero.linkedin}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Image/Accueil/linkedin.png" alt={ui.hero.linkedin} />
          </a>
        </div>
      </div>

      {/* Le <span> vide porte le trait anime de l'indicateur de defilement. */}
      <a href="#presentation" className="hero-scroll">
        {ui.hero.scroll}
        <span />
      </a>
    </header>
  );
}
