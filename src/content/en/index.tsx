import { creditSections } from "@/content/en/credits";
import { projectGroups } from "@/content/en/projects";
import {
  professionalQualities,
  programmingLanguages,
  tools,
} from "@/content/en/skills";
import { timeline } from "@/content/en/timeline";
import type { SiteContent } from "@/content/types";
import { site } from "@/lib/site";

export const en: SiteContent = {
  meta: {
    title: "Léo Dessertenne — Fullstack Developer",
    description:
      "Léo Dessertenne, fullstack developer on an apprenticeship at IDM Group " +
      "and engineering student at ESIEE Paris. Explore my projects and get in " +
      "touch by email about any opportunity.",
    keywords: [
      site.name,
      "fullstack developer",
      "Java developer",
      "Spring Boot",
      "React",
      "Next.js",
      "ESIEE Paris",
      "IDM Group",
      "software engineering apprenticeship",
      "developer portfolio",
    ],
  },

  heroIntro: (
    <>
      Currently in my final year (E5) at ESIEE Paris, studying computer science,
      and on an apprenticeship at{" "}
      <a href={site.employer.url} target="_blank" rel="noopener noreferrer">
        {site.employer.name}
      </a>
      , where I build the online dictionary platforms of Oxford, Cambridge and
      others in Java, Spring Boot and React.
    </>
  ),

  presentation: (
    <>
      My name is Léo Dessertenne. Passionate about computing, I joined the BUT in
      Computer Science at Université Gustave Eiffel in 2022, then continued into
      the engineering programme at ESIEE Paris as a joint degree, where I am now
      in my final year (E5). <br />
      Alongside my studies, I have been on an apprenticeship at IDM Group, a
      company specialising in website creation, since 2023. As a member of the
      development team, I contribute to the fullstack development of the online
      dictionary platforms of Oxford, Cambridge and Collins, taking on
      increasingly technical work over time.
      <br />
      This portfolio sets out my background, what I have built, and my enthusiasm
      for the field.
    </>
  ),

  timeline,

  projectsLead: (
    <>
      A selection of projects built professionally and during my studies: an
      online game, a multilingual site, web applications and algorithmic work.
      <br />
      Each card opens the full project
    </>
  ),

  projectGroups,
  professionalQualities,
  tools,
  programmingLanguages,

  objectives: (
    <>
      I am finishing my engineering degree at ESIEE Paris (final year, E5),
      alongside my apprenticeship at IDM Group where my work is taking on more
      responsibility. An international placement is planned as part of my course.
      Once I graduate, I am aiming for a fullstack developer role on
      larger-scale projects, in France or abroad.
    </>
  ),

  contactLead: (
    <>
      In my final year of engineering school, I am open to internship
      opportunities or a first fullstack development role. Do get in touch.
    </>
  ),

  creditsDescription:
    "Credits for the icons, typefaces and images used on Léo Dessertenne's portfolio.",

  creditSections,
};
