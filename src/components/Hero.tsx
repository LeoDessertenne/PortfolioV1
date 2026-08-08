import { site } from "@/lib/site";

/**
 * En-tete plein ecran : nom en degrade, role, accroche, actions et liens
 * sociaux, puis l'indicateur de defilement.
 */
export function Hero() {
  return (
    <header className="hero">
      <h1 id="h1-moi" className="hero-title">
        {site.name}
      </h1>

      <div className="hero-card">
        <p id="moi-role">{site.role}</p>
        <p id="moi">
          Actuellement en dernière année (E5) à l&apos;ESIEE Paris filière
          informatique, et en alternance chez{" "}
          <a href={site.employer.url} target="_blank" rel="noopener noreferrer">
            {site.employer.name}
          </a>
          , où je développe en Java, Spring Boot et React les plateformes des
          dictionnaires en ligne d&apos;Oxford, Cambridge et autres.
        </p>

        <div className="hero-cta">
          <a
            href={`mailto:${site.email}`}
            className="btn-glass btn-glass--primary"
          >
            Me contacter
          </a>
          <a href="#h-projets" className="btn-glass">
            Voir mes projets
          </a>
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass"
          >
            CV PDF
          </a>
        </div>

        <div className="photos-container">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Image/Accueil/github.png"
              alt={`Profil GitHub de ${site.name}`}
            />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Image/Accueil/linkedin.png"
              alt={`Profil LinkedIn de ${site.name}`}
            />
          </a>
        </div>
      </div>

      {/* Le <span> vide porte le trait anime de l'indicateur de defilement. */}
      <a href="#presentation" className="hero-scroll">
        Découvrir
        <span />
      </a>
    </header>
  );
}
