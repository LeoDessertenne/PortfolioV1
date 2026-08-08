import { site } from "@/lib/site";

/** En-tete plein ecran : nom, role, accroche et liens de contact rapides. */
export function Hero() {
  return (
    <header>
      <div className="header-title">
        <h1 id="h1-moi">{site.name}</h1>
      </div>

      <div className="moi-container">
        <p id="moi-role">{site.role}</p>
        <p id="moi">
          Actuellement en dernière année (E5) à l&apos;ESIEE Paris filière
          informatique, et en alternance chez{" "}
          <a
            href={site.employer.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.employer.name}
          </a>
          , où je développe en Java, Spring Boot et React les plateformes des
          dictionnaires en ligne d&apos;Oxford, Cambridge et autres.
        </p>

        <div className="hero-cta">
          <a href={`mailto:${site.email}`} className="hero-btn hero-btn-primary">
            Me contacter
          </a>
          <a href="#h-projets" className="hero-btn">
            Voir mes projets
          </a>
          <a
            href={site.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            CV PDF
          </a>
        </div>
      </div>

      <div className="photos-container">
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Image/Accueil/github.png"
            alt={`Profil GitHub de ${site.name}`}
          />
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Image/Accueil/linkedin.png"
            alt={`Profil LinkedIn de ${site.name}`}
          />
        </a>
      </div>
    </header>
  );
}
