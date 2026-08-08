import type { Project, ProjectGroup } from "@/content/types";

const idm: Project = {
  id: "idm",
  title: "IDM Group",
  mediaClassName: "idm-card",
  excerpt:
    "Building the websites of the major dictionary publishers: new features, technical modernisation and day-to-day reliability, on the interface as well as the server side.",
  tags: ["Java / Spring", "Artificial intelligence", "Next.js", "Accessibility"],
  summary: (
    <>
      Since 2023 I have been building the websites of the major dictionary
      publishers:{" "}
      <a href="https://www.oed.com/" target="_blank" rel="noopener noreferrer">
        Oxford
      </a>
      ,{" "}
      <a
        href="https://dictionary.cambridge.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cambridge
      </a>
      ,{" "}
      <a
        href="https://www.collinsdictionary.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Collins
      </a>{" "}
      and{" "}
      <a href="https://fr.bab.la/" target="_blank" rel="noopener noreferrer">
        bab.la
      </a>
      . These are long-standing, heavily visited platforms where the smallest
      change has to fit in without breaking anything. I work on both the
      interface and the server side.
    </>
  ),
  extra: (
    <>
      <h3>What I work on</h3>
      <ul>
        <li>
          <strong>An AI-powered search for Oxford</strong>: connecting the site
          to an AI service that finds, for each sense of a word, historical
          quotations showing how it was used at the time. The hard part was less
          plugging in the AI than making its answers dependable: filtering
          results before displaying them, and handling the cases where the
          service answers poorly. Live since June 2026.
        </li>
        <li>
          <strong>Modernising the Cambridge site</strong>: migrating a legacy
          site onto a current technical foundation. I built the embedded
          translator and the side navigation, designed to be reused across the
          team&apos;s other projects.
        </li>
        <li>
          <strong>Search reliability on Oxford</strong>: fixing problems that
          bothered subscribers daily, such as filters lost between pages or
          unreadable file exports. Short fixes on the surface, but ones that
          touch every layer of the site.
        </li>
        <li>
          <strong>Redesigning the Collins site</strong>: a new interface, search
          engine optimisation work and faster rendering, particularly on mobile.
        </li>
      </ul>
      <p>
        What I take away from these years: on long-standing, heavily visited
        sites, the value lies not in the technology you add, but in the care with
        which you integrate it without degrading what is already there.
      </p>
    </>
  ),
  skills: [
    "Designing a feature end to end, from the interface to the server",
    "Diagnosing a problem in a large, long-standing codebase",
    "Modernising an existing site without degrading the user experience",
    "Integrating an AI service and making its answers dependable",
    "Making an interface accessible to people with disabilities",
    "Working in an agile team, with systematic code review",
  ],
  languages: [
    "Java (Spring)",
    "Thymeleaf",
    "XSL / XSLT",
    "Solr",
    "JavaScript & jQuery",
    "React / Next.js",
    "Tailwind CSS",
    "HTML & SCSS",
    "PHP",
    "Godot",
    "Git & GitLab",
    "Jira & Confluence",
  ],
  links: [
    { href: "https://www.oed.com/", label: "View the OED online" },
    {
      href: "https://www.idmgroup.com/",
      label: "Visit the IDM Group website",
    },
  ],
};

const linksAwordkening: Project = {
  id: "la",
  title: "Links Awordkening",
  mediaClassName: "la-card",
  featured: true,
  excerpt:
    "\"Links Awordkening: Where Words Unite!\" is an online game where you challenge your mind with chains of words and explore a world of similar words to take on the ultimate challenge. Built over a year with a team of four.",
  tags: ["Java", "React", "TypeScript", "PHP"],
  summary: (
    <>
      &quot;Links Awordkening: Where Words Unite!&quot; is an online game where
      you challenge your mind with chains of words and explore a world of similar
      words to take on the ultimate challenge... The project was carried out over
      a year with a team of four.
    </>
  ),
  skills: [
    "Building a complete online game, from the Java backend to the React/TypeScript frontend",
    "Choosing and implementing data structures suited to the game logic",
    "Setting up virtualised servers and network services",
    "Managing a year-long project in a team of four",
  ],
  languages: [
    "C",
    "Java",
    "SQL",
    "HTML & CSS",
    "PHP",
    "Python",
    "Node JS",
    "React",
    "TypeScript",
  ],
  links: [
    {
      href: "https://linksawordkening.fabiengilles.tf/Pages/",
      label: "Play the game",
    },
  ],
};

const pimpMyPaids: Project = {
  id: "pmp",
  title: "PimpMyPaids",
  mediaClassName: "pmp-card",
  excerpt:
    "A web application for managing bank card payments, built by a team of four using agile methodology.",
  tags: ["PHP", "SQL", "JS"],
  summary: (
    <>
      PimpMyPaids is a dynamic website dedicated to managing bank card payments,
      developed for the &quot;Development quality&quot; module of our second year
      of the BUT in Computer Science. Built with a team of four, our approach
      followed agile principles, favouring a flexible and responsive team
      organisation. In line with that methodology, a backlog was established
      upfront, keeping the project consistently managed. This approach helped
      maintain a smooth workflow throughout development, and so guaranteed the
      quality of the project from start to finish.
    </>
  ),
  skills: [
    "Agile development with backlog management",
    "Writing tests to validate application quality",
    "Working in a team of four across a full development cycle",
  ],
  languages: ["PHP", "SQL", "Python", "HTML & CSS", "JS"],
  video: {
    heading: "Walkthrough video",
    src: "/Videos/Guide_de_presentation_-_PimpMyPaids.mp4",
  },
  note: (
    <em>
      The site was hosted on the university&apos;s student servers, which have
      since been shut down. The source code remains available below.
    </em>
  ),
  links: [
    {
      href: "https://github.com/FC-Rats/PimpMyPaids",
      label: "View the GitHub repository",
    },
  ],
};

const optimisationAlgorithmique: Project = {
  id: "optimisation-algo",
  title: "Algorithmic optimisation",
  mediaClassName: "optimisation-algo-card",
  excerpt: "Implementation of several graph traversal algorithms.",
  tags: ["Python"],
  summary: (
    <>
      {" "}
      Implementation of several graph traversal algorithms, including
      neighbourhood traversal, breadth-first search, depth-first search, and
      Dijkstra&apos;s algorithm with and without weights.
    </>
  ),
  skills: [
    "Implementing graph traversal algorithms (breadth-first, depth-first, Dijkstra)",
    "Complexity analysis and choosing appropriate data structures",
  ],
  languages: ["Python", "WebStorm"],
  links: [
    {
      href: "https://github.com/LeoDessertenne/Automates",
      label: "View the source code",
    },
  ],
};

const reseau: Project = {
  id: "reseau",
  title: "Networking & cybersecurity labs",
  modalTitle: "Networking and cybersecurity labs",
  excerpt:
    "Designing and securing networks: data protection and risk management in information security.",
  tags: ["Netkit", "Bind9"],
  summary: (
    <>
      Through my networking and cybersecurity labs, I gained skills in designing
      and securing networks, particularly in information security risk management
      and in setting up data protection measures. This work gave me expertise
      that is essential to designing and securing network infrastructure
      effectively. For example:
    </>
  ),
  extra: (
    <ul>
      <li>How the DNS protocol works</li>
      <li>Configuring a DNS server and Apache</li>
      <li>Studying the SMTP, IMAP and POP3 protocols</li>
    </ul>
  ),
  skills: [
    "Configuring DNS and Apache servers",
    "Securing a network infrastructure and managing risk",
    "Studying the SMTP, IMAP and POP3 protocols",
  ],
  languages: ["Netkit", "Bind9"],
};

const seville: Project = {
  id: "sev",
  title: "Seville Project",
  mediaClassName: "seville-card",
  featured: true,
  excerpt:
    "A website built in partnership with UNESCO to promote the culture of Seville, as an exercise in cultural mediation. Built by a team of four over one year, available in three languages with an admin interface.",
  tags: ["PHP", "SQL", "JavaScript", "i18n"],
  summary: (
    <>
      The Seville Project, built by a team of four, set out to create a website
      promoting the culture of the city of Seville. The site includes an
      administration interface and is available in three languages. The project
      ran over one year.
    </>
  ),
  skills: [
    "Building a multilingual site (three languages) with an administration interface",
    "Designing a PHP/MySQL/PostgreSQL database",
    "Working in a team of four over a year, with an external partner (UNESCO)",
  ],
  languages: [
    "HTML5",
    "CSS3",
    "PHP",
    "SQL",
    "MySQL",
    "PostGreSQL",
    "JavaScript",
    "Github",
    "Visual Studio Code",
  ],
  video: {
    heading: "Project overview video",
    src: "/Videos/Teaser-Projet-Seville.mp4",
    poster: "/Image/projets/seville_poster.png",
  },
  note: (
    <em>
      The site was hosted on the university&apos;s student servers, which have
      since been shut down. The video above presents the project.
    </em>
  ),
};

const batailleDesBoules: Project = {
  id: "bdb",
  title: "Battle of the Balls",
  modalTitle: "Battle of the Balls",
  mediaClassName: "bataille-de-boule-card",
  excerpt:
    "A turn-based video game built in a pair, with a set of rules and a gameplay experience to honour.",
  tags: ["Python"],
  summary: (
    <>
      &quot;Battle of the Balls&quot;, built in a pair during the first year of
      the BUT in Computer Science, set out to design a video game. The main
      success criteria were compliance with the game&apos;s rules and options,
      and the creation of smooth gameplay, which involved algorithmic
      optimisation. The game is turn-based, and the goal is to occupy the largest
      territory in your own colour. The project ran over six months.
    </>
  ),
  skills: [
    "Building a turn-based game against a precise specification",
    "Implementing algorithmic optimisations for smooth gameplay",
    "Working in a pair over six months, with tests and a critical eye on the application",
  ],
  languages: ["Python", "Visual Studio Code"],
  video: {
    heading: "Video of a game in progress",
    src: "/Videos/bataille_des_boules.mp4",
  },
  links: [
    {
      href: "https://github.com/LeoDessertenne/bataille-des-boules",
      label: "View the GitHub repository",
    },
  ],
};

const baseDeDonnees: Project = {
  id: "bdd",
  title: "Database project",
  mediaClassName: "bdd-card",
  excerpt:
    "Modelling, implementing and querying a relational database, with a dynamic website connected to it.",
  tags: ["SQL", "PHP", "PostgreSQL"],
  summary: (
    <>
      This first-year BUT project, built in a pair, set out to design and
      implement a database on a concrete subject. We started with a conceptual
      data model. We then produced the logical data model and implemented it in
      PHPMyAdmin, before creating a dataset and a set of useful queries. Finally
      we built a dynamic website on top of our PostgreSQL database using PHP,
      HTML and CSS.
    </>
  ),
  skills: [
    "Modelling a relational database (conceptual and logical models)",
    "Writing SQL queries and creating a dataset",
    "Building a dynamic site connected to the database (PHP/PostgreSQL)",
  ],
  languages: [
    "SQL",
    "PHP",
    "Visual Studio Code",
    "PostgreSQL",
    "PHPMyAdmin",
    "HTML5 & CSS3",
  ],
  note: (
    <em>
      The site was hosted on the university&apos;s student servers, which have
      since been shut down.
    </em>
  ),
};

const interfaceHommeMachine: Project = {
  id: "ihm",
  title: "Human-Computer Interaction",
  mediaClassName: "ihm-card",
  excerpt:
    "A functional, ergonomic prototype of an application for managing a town's sports and cultural activities.",
  tags: ["Figma"],
  summary: (
    <>
      This first-year BUT project set out to create a functional and ergonomic
      prototype of an application based on a scenario. Our scenario covered the
      management of sports and cultural activities within a municipality. We
      therefore designed the screens needed to record every sports and cultural
      activity, collect all the registration data, and so on.
    </>
  ),
  skills: [
    "Designing functional, ergonomic prototypes in Figma",
    "Applying accessibility and ergonomics principles",
    "Structuring a complete user scenario (managing municipal activities)",
  ],
  languages: ["Figma"],
  links: [
    {
      href: "https://www.figma.com/proto/TdTh50vMlDgAL4ffLxgyIE/Ecrans?type=design&node-id=22-7&t=7NzNuthVQfslaRo4-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=22%3A7&show-proto-sidebar=1&mode=design",
      label: "View the prototype",
    },
  ],
};

const graphes: Project = {
  id: "algo",
  title: "Algorithmic exploration of a problem (Graphs)",
  mediaClassName: "algo-card",
  excerpt:
    "Implementing a range of algorithms and transformations on automata (minimisation, product, determinisation).",
  tags: ["Python"],
  summary: (
    <>
      {" "}
      The aim of this project was to implement the various algorithms covered in
      the graph theory course. It makes it possible to apply different
      transformations to automata. The more advanced ones include minimisation,
      product, and determinisation of automata.
    </>
  ),
  skills: [
    "Implementing algorithms on automata (minimisation, product, determinisation)",
    "Analysing and comparing the complexity of several algorithmic approaches",
  ],
  languages: ["Python 3"],
  links: [
    {
      href: "https://github.com/LeoDessertenne/graphes",
      label: "View the GitHub repository",
    },
  ],
};

export const projectGroups: ProjectGroup[] = [
  {
    heading: "Professional work",
    projects: [idm],
  },
  {
    heading: "Second year of the BUT in Computer Science",
    projects: [
      linksAwordkening,
      pimpMyPaids,
      optimisationAlgorithmique,
      reseau,
    ],
  },
  {
    heading: "First year of the BUT in Computer Science",
    projects: [
      seville,
      batailleDesBoules,
      baseDeDonnees,
      interfaceHommeMachine,
      graphes,
    ],
  },
];
