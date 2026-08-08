"use client";

import { Fragment, useCallback, useState, type ReactNode } from "react";

import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { SectionHeading } from "@/components/SectionHeading";
import type { ProjectGroup } from "@/content/types";
import type { UiStrings } from "@/i18n/ui";

/**
 * Section « Projets » : panneau navy en verre depoli.
 *
 * Une seule modale est ouverte a la fois : l'etat est donc porte ici plutot que
 * dans chaque carte. Les modales sont montees en permanence mais rendues via un
 * portail vers <body> (voir Modal.tsx), car le backdrop-filter du panneau
 * casserait leur positionnement fixed.
 *
 * Le contenu arrive en props depuis le serveur : le composant reste client pour
 * l'etat d'ouverture, sans embarquer les deux langues dans le bundle.
 */
export function Projects({
  ui,
  lead,
  groups,
}: {
  ui: UiStrings;
  lead: ReactNode;
  groups: ProjectGroup[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const close = useCallback(() => setOpenId(null), []);

  return (
    <div className="mes-projets gauche glass--dark on-dark" id="h-projets">
      <SectionHeading variant="gauche">{ui.sections.projects}</SectionHeading>

      <p className="section-lead reveal-apparition">{lead}</p>

      {groups.map((group) => (
        <Fragment key={group.heading}>
          <h3 className="reveal-apparition BUT-year">{group.heading}</h3>
          <div className="projets-container">
            {group.projects.map((project) => (
              <Fragment key={project.id}>
                <ProjectCard
                  project={project}
                  openLabel={ui.project.open}
                  onOpen={() => setOpenId(project.id)}
                />
                <ProjectModal
                  project={project}
                  ui={ui}
                  open={openId === project.id}
                  onClose={close}
                />
              </Fragment>
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
