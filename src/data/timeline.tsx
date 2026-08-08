import type { ReactNode } from "react";

import { site } from "@/lib/site";

export type TimelineEntry = {
  /** Periode affichee au-dessus du titre. */
  period: string;
  title: string;
  body: ReactNode;
};

export const timeline: TimelineEntry[] = [
  {
    period: "2023 - Aujourd'hui",
    title: "Alternance IDM Group",
    body: (
      <>
        En tant qu&apos;apprenti au sein de l&apos;entreprise{" "}
        <a href={site.employer.url} target="_blank" rel="noopener noreferrer">
          IDM Group
        </a>
        , j&apos;ai rejoint l&apos;équipe qui développe les sites des grands
        éditeurs de dictionnaires : Oxford, Cambridge, Collins et bab.la. J&apos;y
        travaille aussi bien sur l&apos;interface que sur la partie serveur, entre
        nouvelles fonctionnalités, modernisation de sites existants et fiabilité
        au quotidien.
      </>
    ),
  },
  {
    period: "2024 - 2027",
    title: "ESIEE Paris — Cycle Ingénieur",
    body: (
      <>
        En codiplomation avec le BUT Informatique, je poursuis mon cursus au sein
        du cycle ingénieur de l&apos;ESIEE Paris. Actuellement en dernière année
        (E5), je consolide mes compétences en développement fullstack tout en
        préparant mon entrée dans le monde professionnel en tant
        qu&apos;ingénieur.
      </>
    ),
  },
  {
    period: "2022 - 2024",
    title: "BUT Informatique",
    body: (
      <>
        Dans le cadre de mon parcours en BUT Informatique à l&apos;Université
        Gustave Eiffel, j&apos;ai développé des compétences solides en
        programmation, avec un fort accent mis sur les projets. J&apos;ai obtenu
        mon BUT en codiplomation avec l&apos;ESIEE Paris. Je vous invite
        d&apos;ailleurs à découvrir quelques-uns de ces projets{" "}
        <a href="#h-projets">ici</a>
        .
      </>
    ),
  },
  {
    period: "2020 - 2022",
    title: "BAC Technologique STI2D",
    body: (
      <>
        Titulaire d&apos;un baccalauréat en Sciences et Technologies de
        l&apos;Industrie et du Développement Durable (STI2D), avec une
        spécialisation en Innovation Technologique et Écoconception (ITEC). Bien
        que ma spécialité ait été orientée vers la mécanique, j&apos;ai également
        consacré une part importante de mon temps libre à approfondir mes
        connaissances en informatique, notamment en apprenant divers langages de
        programmation tels que Python, CSS et HTML.
      </>
    ),
  },
];
