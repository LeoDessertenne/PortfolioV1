"use client";

import { Fragment, useCallback, useState } from "react";

import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { SectionHeading } from "@/components/SectionHeading";
import { projectGroups } from "@/data/projects";

/**
 * Section « Projets » : panneau navy en verre depoli.
 *
 * Une seule modale est ouverte a la fois : l'etat est donc porte ici plutot que
 * dans chaque carte. Les modales sont montees en permanence mais rendues via un
 * portail vers <body> (voir Modal.tsx), car le backdrop-filter du panneau
 * casserait leur positionnement fixed.
 */
export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const close = useCallback(() => setOpenId(null), []);

  return (
    <div className="mes-projets gauche glass--dark on-dark" id="h-projets">
      <SectionHeading variant="gauche">Projets</SectionHeading>

      <p className="section-lead reveal-apparition">
        Une sélection de projets menés en entreprise et au cours de mes études :
        jeu en ligne, site multilingue, applications web et travaux
        d&rsquo;algorithmique.
        <br />
        Chaque carte ouvre le détail du projet
      </p>

      {projectGroups.map((group) => (
        <Fragment key={group.heading}>
          <h3 className="reveal-apparition BUT-year">{group.heading}</h3>
          <div className="projets-container">
            {group.projects.map((project) => (
              <Fragment key={project.id}>
                <ProjectCard
                  project={project}
                  onOpen={() => setOpenId(project.id)}
                />
                <ProjectModal
                  project={project}
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
