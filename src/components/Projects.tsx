"use client";

import { Fragment, useCallback, useState } from "react";

import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { SectionHeading } from "@/components/SectionHeading";
import { projectGroups } from "@/data/projects";

/**
 * Section « Projets ».
 *
 * Une seule modale est ouverte a la fois : l'etat est donc porte ici plutot que
 * dans chaque carte. Toutes les modales restent montees, comme dans l'ancienne
 * page ; les videos ne sont pas chargees pour autant (preload="none").
 *
 * Les regroupements utilisent des Fragment et non des <div> : la grille
 * `.projets-container` doit avoir les cartes pour enfants directs, et les marges
 * des titres d'annee ne doivent pas changer de contexte de fusion.
 */
export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const close = useCallback(() => setOpenId(null), []);

  return (
    <div className="mes-projets gauche" id="h-projets">
      <SectionHeading variant="gauche">Projets</SectionHeading>

      <p className="fs-3 text-justify">
        Voici les principaux projets et TP/TD de programmation que j&apos;ai
        réalisés au cours de mes études.
        <br />
        Cliquez sur un projet pour obtenir plus d&apos;informations
      </p>

      {projectGroups.map((group) => (
        <Fragment key={group.heading}>
          <h3 className="reveal-apparition BUT-year fs-4">{group.heading}</h3>
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
