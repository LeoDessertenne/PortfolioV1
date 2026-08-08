import { creditSections } from "@/content/fr/credits";
import { projectGroups } from "@/content/fr/projects";
import {
  professionalQualities,
  programmingLanguages,
  tools,
} from "@/content/fr/skills";
import { timeline } from "@/content/fr/timeline";
import type { SiteContent } from "@/content/types";
import { site } from "@/lib/site";

export const fr: SiteContent = {
  meta: {
    title: "Léo Dessertenne — Développeur Fullstack",
    description:
      "Léo Dessertenne, développeur fullstack en alternance chez IDM Group et " +
      "élève ingénieur à l'ESIEE Paris. Découvrez mes projets et contactez-moi " +
      "par email pour toute opportunité de collaboration.",
    keywords: [
      site.name,
      "développeur fullstack",
      "développeur Java",
      "Spring Boot",
      "React",
      "Next.js",
      "ESIEE Paris",
      "IDM Group",
      "alternance informatique",
      "portfolio développeur",
    ],
  },

  heroIntro: (
    <>
      Actuellement en dernière année (E5) à l&apos;ESIEE Paris filière
      informatique, et en alternance chez{" "}
      <a href={site.employer.url} target="_blank" rel="noopener noreferrer">
        {site.employer.name}
      </a>
      , où je développe en Java, Spring Boot et React les plateformes des
      dictionnaires en ligne d&apos;Oxford, Cambridge et autres.
    </>
  ),

  presentation: (
    <>
      Je m&apos;appelle Léo Dessertenne. Passionné d&apos;informatique, j&apos;ai
      rejoint le BUT Informatique de l&apos;Université Gustave Eiffel en 2022,
      avant de poursuivre en codiplomation au sein du cycle ingénieur de
      l&apos;ESIEE Paris, où je suis aujourd&apos;hui en dernière année (E5).{" "}
      <br />
      En parallèle, je suis en alternance chez IDM Group, une entreprise
      spécialisée dans la création de sites web, depuis 2023. Membre de
      l&apos;équipe de développement, j&apos;y contribue au développement
      fullstack des plateformes des dictionnaires en ligne d&apos;Oxford,
      Cambridge et Collins, avec des missions de plus en plus techniques au fil
      du temps.
      <br />
      Mon portfolio illustre mon parcours, mes réalisations et mon enthousiasme
      pour le domaine de l&apos;informatique.
    </>
  ),

  timeline,

  projectsLead: (
    <>
      Une sélection de projets menés en entreprise et au cours de mes études :
      jeu en ligne, site multilingue, applications web et travaux
      d&rsquo;algorithmique.
      <br />
      Chaque carte ouvre le détail du projet
    </>
  ),

  projectGroups,
  professionalQualities,
  tools,
  programmingLanguages,

  objectives: (
    <>
      Je termine actuellement mon cursus ingénieur à l&apos;ESIEE Paris (dernière
      année, E5), en parallèle de mon alternance chez IDM Group où mes missions
      gagnent en responsabilité. Un stage à l&apos;international est prévu dans
      le cadre de ma formation. Une fois diplômé, je vise un poste de développeur
      fullstack sur des projets à plus grande échelle, en France ou à
      l&apos;international.
    </>
  ),

  contactLead: (
    <>
      En dernière année d&apos;école d&apos;ingénieur, je suis à l&apos;écoute
      d&apos;opportunités de stage ou de premier poste en développement
      fullstack. N&apos;hésitez pas à me contacter.
    </>
  ),

  creditsDescription:
    "Crédits des icônes, polices et images utilisées sur le portfolio de Léo Dessertenne.",

  creditSections,
};
