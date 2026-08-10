import { Modal } from "@/components/Modal";
import type { Project } from "@/content/types";
import type { UiStrings } from "@/i18n/ui";

/**
 * Contenu de la modale d'un projet. L'ordre des blocs est fixe : resume,
 * complements eventuels, colonnes competences / langages, video, mention en
 * italique, puis liens externes.
 */
export function ProjectModal({
  project,
  ui,
  open,
  onClose,
}: {
  project: Project;
  ui: UiStrings;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal
      id={project.id}
      title={project.modalTitle ?? project.title}
      closeLabel={ui.project.close}
      open={open}
      onClose={onClose}
    >
      <h3>{ui.project.summary}</h3>
      <p>{project.summary}</p>

      {project.extra}

      <div className="modal-content-container">
        <div className="skills">
          <h3>{ui.project.developedSkills}</h3>
          <ul>
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="languages">
          <h3>{ui.project.languagesUsed}</h3>
          <ul>
            {project.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
      </div>

      {project.video ? (
        <>
          <h3>{project.video.heading}</h3>
          <div className="video">
            <video
              className="modal-video"
              src={project.video.src}
              poster={project.video.poster}
              controls
              preload="none"
            />
          </div>
        </>
      ) : null}

      {project.note ? <p>{project.note}</p> : null}

      {project.links ? (
        <div className="project-btn-link-container">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="btn-glass"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </Modal>
  );
}
