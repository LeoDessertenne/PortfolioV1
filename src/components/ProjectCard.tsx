import type { Project } from "@/data/projects";

/** Carte cliquable d'un projet, qui ouvre la modale correspondante. */
export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <div
      className={
        project.featured ? "projets-card projets-card--featured" : "projets-card"
      }
    >
      <button
        type="button"
        className="card-container"
        aria-haspopup="dialog"
        onClick={onOpen}
      >
        <div
          className={
            project.mediaClassName
              ? `card-media ${project.mediaClassName}`
              : "card-media"
          }
        />
        <div className="card-body">
          <h2 className="title-show-modal">{project.title}</h2>
          <p>{project.excerpt}</p>
          <ul className="tech-tags card-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {/* La fleche est ajoutee en ::after pour pouvoir l'animer au survol. */}
          <p className="projets-plus-infos">Voir le projet</p>
        </div>
      </button>
    </div>
  );
}
