import type { Project, ProjectGroup } from "@/content/types";

const idm: Project = {
  id: "idm",
  title: "IDM Group",
  mediaClassName: "idm-card",
  excerpt:
    "Développement des sites des grands éditeurs de dictionnaires : nouvelles fonctionnalités, modernisation technique et fiabilité au quotidien, sur l'interface comme sur la partie serveur.",
  tags: ["Java / Spring", "Intelligence artificielle", "Next.js", "Accessibilité"],
  summary: (
    <>
      Depuis 2023, je développe les sites des grands éditeurs de dictionnaires :{" "}
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
      et{" "}
      <a href="https://fr.bab.la/" target="_blank" rel="noopener noreferrer">
        bab.la
      </a>
      . Des plateformes anciennes et très consultées, où la moindre évolution
      doit s&apos;intégrer sans rien casser. J&apos;y interviens aussi bien sur
      l&apos;interface que sur la partie serveur.
    </>
  ),
  extra: (
    <>
      <h3>Mes missions</h3>
      <ul>
        <li>
          <strong>Une recherche par intelligence artificielle pour Oxford</strong>{" "}
          : relier au site un service d&apos;IA qui retrouve, pour chaque sens
          d&apos;un mot, des citations anciennes montrant comment il était employé
          à l&apos;époque. La difficulté était moins de brancher l&apos;IA que de
          fiabiliser ses réponses : trier les résultats avant de les afficher, et
          prévoir les cas où le service répond mal. En ligne depuis juin 2026.
        </li>
        <li>
          <strong>La modernisation du site de Cambridge</strong> : migration
          d&apos;un site ancien vers une base technique récente. J&apos;y ai
          développé le traducteur intégré et la navigation latérale, conçue pour
          être réutilisée sur les autres projets de l&apos;équipe.
        </li>
        <li>
          <strong>La fiabilité des recherches d&apos;Oxford</strong> : correction
          de problèmes qui gênaient les abonnés au quotidien, comme des filtres
          perdus d&apos;une page à l&apos;autre ou des exports de fichiers
          illisibles. Des corrections courtes en apparence, mais qui touchent
          toutes les couches du site.
        </li>
        <li>
          <strong>La refonte du site de Collins</strong> : nouvelle interface
          graphique, travail de référencement et amélioration de la vitesse
          d&apos;affichage, en particulier sur mobile.
        </li>
      </ul>
      <p>
        Ce que je retiens de ces années : sur des sites anciens et très
        consultés, la valeur ne tient pas à la technologie qu&apos;on ajoute,
        mais à la rigueur avec laquelle on l&apos;intègre sans dégrader ce qui
        existe déjà.
      </p>
    </>
  ),
  skills: [
    "Concevoir une fonctionnalité de bout en bout, de l'interface au serveur",
    "Diagnostiquer un problème dans un code volumineux et ancien",
    "Moderniser un site existant sans dégrader l'expérience des utilisateurs",
    "Intégrer un service d'intelligence artificielle et fiabiliser ses réponses",
    "Rendre une interface accessible aux personnes en situation de handicap",
    "Travailler en équipe agile, avec revue de code systématique",
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
    { href: "https://www.oed.com/", label: "Voir l'OED en ligne" },
    {
      href: "https://www.idmgroup.com/",
      label: "Lien vers le site de IDM Group",
    },
  ],
};

const linksAwordkening: Project = {
  id: "la",
  title: "Links Awordkening",
  mediaClassName: "la-card",
  featured: true,
  excerpt:
    "\"Links Awordkening : Where Words Unite !\" est un jeu en ligne dans lequel vous devez défier votre esprit avec des chaînes de mots et explorez un monde de mots similaires pour relever le défi ultime, réalisé en un an avec une équipe de 4 personnes.",
  tags: ["Java", "React", "TypeScript", "PHP"],
  summary: (
    <>
      &quot;Links Awordkening : Where Words Unite !&quot; est un jeu en ligne dans
      lequel vous devez défier votre esprit avec des chaînes de mots et explorez
      un monde de mots similaires pour relever le défi ultime... Le projet est
      réalisé sur une période d&apos;un an avec une équipe de 4 personnes.
    </>
  ),
  skills: [
    "Développement d'un jeu en ligne complet, du backend Java au frontend React/TypeScript",
    "Choix et implémentation de structures de données adaptées à la logique du jeu",
    "Mise en place de serveurs et services réseau virtualisés",
    "Gestion de projet en équipe de 4 personnes sur une durée d'un an",
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
      label: "Lien vers le jeu",
    },
  ],
};

const pimpMyPaids: Project = {
  id: "pmp",
  title: "PimpMyPaids",
  mediaClassName: "pmp-card",
  excerpt:
    "Site web pour la gestion de paiement par cartes bancaires, réalisé en équipe de 4 personnes en méthodologie agile.",
  tags: ["PHP", "SQL", "JS"],
  summary: (
    <>
      PimpMyPaids se présente comme un site web dynamique dédié à la gestion des
      paiements par cartes bancaires, développées dans le cadre de la matière
      &quot;Qualité de développement&quot; de notre deuxième année de BUT
      Informatique. Réalisé en collaboration avec une équipe de quatre personnes,
      notre approche s&apos;est inscrite dans les principes de la méthodologie
      agile, favorisant une organisation d&apos;équipe flexible et réactive.
      Suivant la méthodologie agile, un backlog a été préétabli, assurant une
      gestion cohérente du projet. Cette approche a contribué à maintenir un flux
      de travail harmonieux tout au long du développement, garantissant ainsi la
      qualité du projet du début à la fin.
    </>
  ),
  skills: [
    "Développement en méthodologie Agile avec gestion de backlog",
    "Mise en place de tests pour valider la qualité de l'application",
    "Travail en équipe de 4 personnes sur un cycle de développement complet",
  ],
  languages: ["PHP", "SQL", "Python", "HTML & CSS", "JS"],
  video: {
    heading: "Vidéo de présentation du site",
    src: "/Videos/Guide_de_presentation_-_PimpMyPaids.mp4",
  },
  note: (
    <em>
      Le site était hébergé sur les serveurs étudiants de l&apos;université,
      aujourd&apos;hui fermés. Le code source reste disponible ci-dessous.
    </em>
  ),
  links: [
    {
      href: "https://github.com/FC-Rats/PimpMyPaids",
      label: "Lien vers le répertoire Github",
    },
  ],
};

const optimisationAlgorithmique: Project = {
  id: "optimisation-algo",
  title: "Optimisation algorithmique",
  mediaClassName: "optimisation-algo-card",
  excerpt: "Implémentation de plusieurs algorithmes de parcours de graphe.",
  tags: ["Python"],
  summary: (
    <>
      {" "}
      Implémentation de plusieurs algorithmes de parcours de graphe, notamment le
      parcours par voisinage, le parcours en largeur, le parcours en profondeur,
      ainsi que l&apos;algorithme de Dijkstra avec et sans poids.
    </>
  ),
  skills: [
    "Implémentation d'algorithmes de parcours de graphe (largeur, profondeur, Dijkstra)",
    "Analyse de complexité et choix des structures de données adaptées",
  ],
  languages: ["Python", "WebStorm"],
  links: [
    {
      href: "https://github.com/LeoDessertenne/Automates",
      label: "Lien vers le code source",
    },
  ],
};

const reseau: Project = {
  id: "reseau",
  title: "TP réseau/Cybersécurité",
  modalTitle: "Tps réseau et cybersécurité",
  excerpt:
    "Conception et sécurisation de réseaux : protection des données et gestion des risques en sécurité informatique.",
  tags: ["Netkit", "Bind9"],
  summary: (
    <>
      Dans mes TPs de réseau et cybersécurité, j&apos;ai acquis des compétences en
      conception et sécurisation des réseaux, notamment dans la gestion des
      risques en sécurité informatique et la mise en place de solutions de
      protection des données. Ce projet m&apos;a permis de développer une
      expertise essentielle pour concevoir et sécuriser efficacement les
      infrastructures réseau. Par exemple :
    </>
  ),
  extra: (
    <ul>
      <li>Fonctionnement du protocole DNS</li>
      <li>Configuration d&apos;un serveur DNS et Apache</li>
      <li>Etudes des protocoles SMTP, IMAP et POP3</li>
    </ul>
  ),
  skills: [
    "Configuration de serveurs DNS et Apache",
    "Sécurisation d'une infrastructure réseau et gestion des risques",
    "Étude des protocoles SMTP, IMAP et POP3",
  ],
  languages: ["Netkit", "Bind9"],
};

const seville: Project = {
  id: "sev",
  title: "Projet Séville",
  mediaClassName: "seville-card",
  featured: true,
  excerpt:
    "Site internet en partenariat avec l'UNESCO pour promouvoir la culture de Séville, dans une démarche de médiation culturelle. Réalisé en groupe de 4 personnes sur 1 an, disponible en 3 langues avec interface administrateur.",
  tags: ["PHP", "SQL", "JavaScript", "i18n"],
  summary: (
    <>
      Le Projet Séville, réalisé en groupe de 4 personnes avait pour but de créer
      un site internet ayant pour but de promouvoir la culture de la ville de
      Séville. Ce site comporte une interface administrateur et est disponible
      dans trois langues différentes. Ce projet a été réalisé sur une période de 1
      an.
    </>
  ),
  skills: [
    "Développement d'un site multilingue (3 langues) avec interface d'administration",
    "Conception d'une base de données PHP/MySQL/PostgreSQL",
    "Travail en équipe de 4 personnes sur un an, avec un partenaire externe (UNESCO)",
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
    heading: "Vidéo explicative du projet",
    src: "/Videos/Teaser-Projet-Seville.mp4",
    poster: "/Image/projets/seville_poster.png",
  },
  note: (
    <em>
      Le site était hébergé sur les serveurs étudiants de l&apos;université,
      aujourd&apos;hui fermés. La vidéo ci-dessus présente le projet.
    </em>
  ),
};

const batailleDesBoules: Project = {
  id: "bdb",
  title: "Projet Bataille des boules",
  modalTitle: "Bataille des boules",
  mediaClassName: "bataille-de-boule-card",
  excerpt:
    "Jeu vidéo en tour par tour développé en binôme, avec des règles et une expérience de jeu à respecter.",
  tags: ["Python"],
  summary: (
    <>
      Le projet &quot;Bataille des boules&quot;, réalisé en binôme lors de la
      première année du BUT Informatique, avait pour objectif la conception
      d&apos;un jeu vidéo. Les principaux critères de réussite étaient la
      conformité aux règles et options du jeu, ainsi que la création d&apos;une
      expérience de jeu fluide, impliquant des aspects d&apos;optimisation
      algorithmiques. Le jeu se déroule en tour par tour, où l&apos;objectif est
      d&apos;occuper le plus grand territoire avec sa couleur respective. Ce
      projet a été réalisé sur une période de 6 mois.
    </>
  ),
  skills: [
    "Développement d'un jeu en tour par tour respectant un cahier des charges précis",
    "Implémentation d'aspects d'optimisation algorithmique pour une expérience de jeu fluide",
    "Travail en binôme sur 6 mois avec tests et regard critique sur l'application",
  ],
  languages: ["Python", "Visual Studio Code"],
  video: {
    heading: "Vidéo du déroulé d'une partie",
    src: "/Videos/bataille_des_boules.mp4",
  },
  links: [
    {
      href: "https://github.com/LeoDessertenne/bataille-des-boules",
      label: "Lien vers le répertoire Github",
    },
  ],
};

const baseDeDonnees: Project = {
  id: "bdd",
  title: "Projet de base de données",
  mediaClassName: "bdd-card",
  excerpt:
    "Modélisation, implémentation et exploitation d'une base de données relationnelle, avec un site web dynamique connecté.",
  tags: ["SQL", "PHP", "PostgreSQL"],
  summary: (
    <>
      Ce projet de première année de BUT Informatique, réalisé en binôme avait
      pour but de créer et d&apos;implémenter une base de données sur un sujet
      concret. Dans un premier temps un modèle conceptuel des données (MCD). Par
      la suite nous avons eu à faire le modèle logique des données (MLD) et
      l&apos;implémenter dans PHPMyAdmin. Pour ensuite créer un jeu de données et
      des requêtes utiles. Enfin nous avons créé un site web dynamique avec notre
      base de données sur PostgreSQL en PHP, HTML, CSS.
    </>
  ),
  skills: [
    "Modélisation d'une base de données relationnelle (MCD, MLD)",
    "Écriture de requêtes SQL et création d'un jeu de données",
    "Développement d'un site dynamique connecté à la base (PHP/PostgreSQL)",
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
      Le site était hébergé sur les serveurs étudiants de l&apos;université,
      aujourd&apos;hui fermés.
    </em>
  ),
};

const interfaceHommeMachine: Project = {
  id: "ihm",
  title: "Interface Homme Machine",
  mediaClassName: "ihm-card",
  excerpt:
    "Maquette fonctionnelle et ergonomique d'une application de gestion des activités sportives et culturelles d'une municipalité.",
  tags: ["Figma"],
  summary: (
    <>
      Ce projet réalisé en première année de BUT Informatique, a pour but de créer
      une maquette fonctionnelle et ergonomique d&apos;une application sur la base
      d&apos;un scénario. Notre scénario était sur le sujet de la gestion des
      activités sportives et culturelles dans une municipalité. Nous avons donc
      créé les maquettes pour enregistrer toutes les activités sportives et
      culturelles, collecter l&apos;ensemble des données sur les inscriptions
      etc...
    </>
  ),
  skills: [
    "Conception de maquettes fonctionnelles et ergonomiques sur Figma",
    "Application de principes d'accessibilité et d'ergonomie",
    "Structuration d'un scénario utilisateur complet (gestion d'activités municipales)",
  ],
  languages: ["Figma"],
  links: [
    {
      href: "https://www.figma.com/proto/TdTh50vMlDgAL4ffLxgyIE/Ecrans?type=design&node-id=22-7&t=7NzNuthVQfslaRo4-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=22%3A7&show-proto-sidebar=1&mode=design",
      label: "Lien maquette",
    },
  ],
};

const graphes: Project = {
  id: "algo",
  title: "Exploration algorithmique d'un problème (Graphes)",
  mediaClassName: "algo-card",
  excerpt:
    "Mise en œuvre d'une variété d'algorithmes et de transformations sur les automates (minimisation, produit, déterminisation).",
  tags: ["Python"],
  summary: (
    <>
      {" "}
      L&apos;objectif de ce projet inscrit au sein de mon portfolio est de mettre
      en œuvre les divers algorithmes abordés lors du cours sur les graphes. Ce
      projet offre la possibilité d&apos;effectuer différentes transformations sur
      les automates. Parmi les transformations plus avancées, on trouve la
      minimisation, produit, ainsi que la déterminisation d&apos;automates.
    </>
  ),
  skills: [
    "Implémentation d'algorithmes sur automates (minimisation, produit, déterminisation)",
    "Analyse et comparaison de la complexité de plusieurs approches algorithmiques",
  ],
  languages: ["Python 3"],
  links: [
    {
      href: "https://github.com/LeoDessertenne/graphes",
      label: "Lien vers le répertoire Github",
    },
  ],
};

export const projectGroups: ProjectGroup[] = [
  {
    heading: "Missions en entreprise",
    projects: [idm],
  },
  {
    heading: "Deuxième année de BUT Informatique",
    projects: [
      linksAwordkening,
      pimpMyPaids,
      optimisationAlgorithmique,
      reseau,
    ],
  },
  {
    heading: "Première année de BUT Informatique:",
    projects: [
      seville,
      batailleDesBoules,
      baseDeDonnees,
      interfaceHommeMachine,
      graphes,
    ],
  },
];
