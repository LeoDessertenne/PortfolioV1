import type { TimelineEntry } from "@/content/types";
import { site } from "@/lib/site";

export const timeline: TimelineEntry[] = [
  {
    period: "2023 - Present",
    title: "Apprenticeship at IDM Group",
    body: (
      <>
        As an apprentice at{" "}
        <a href={site.employer.url} target="_blank" rel="noopener noreferrer">
          IDM Group
        </a>
        , I joined the team behind the websites of the major dictionary
        publishers: Oxford, Cambridge, Collins and bab.la. I work on both the
        interface and the server side, between new features, modernising existing
        sites and day-to-day reliability.
      </>
    ),
  },
  {
    period: "2024 - 2027",
    title: "ESIEE Paris — Engineering degree",
    body: (
      <>
        Alongside my BUT in Computer Science, I am pursuing an engineering degree
        at ESIEE Paris. Now in my final year (E5), I am consolidating my
        fullstack development skills while preparing to enter the profession as
        an engineer.
      </>
    ),
  },
  {
    period: "2022 - 2024",
    title: "BUT in Computer Science",
    body: (
      <>
        During my BUT in Computer Science at Université Gustave Eiffel, I built
        solid programming skills with a strong emphasis on project work. I earned
        the degree jointly with ESIEE Paris. You are welcome to explore a few of
        those projects <a href="#h-projets">here</a>.
      </>
    ),
  },
  {
    period: "2020 - 2022",
    title: "STI2D Technological Baccalaureate",
    body: (
      <>
        I hold a baccalaureate in Science and Technology of Industry and
        Sustainable Development (STI2D), specialising in Technological Innovation
        and Eco-design (ITEC). Although that specialism leaned towards mechanical
        engineering, I devoted a good share of my spare time to deepening my
        knowledge of computing, notably by learning several programming languages
        such as Python, CSS and HTML.
      </>
    ),
  },
];
