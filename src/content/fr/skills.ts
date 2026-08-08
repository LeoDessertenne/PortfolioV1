import type { TagGroup, ToolGroup } from "@/content/types";

export const professionalQualities: TagGroup[] = [
  {
    title: "Savoir-être",
    items: [
      "Collaboratif",
      "Méthodique",
      "Adaptabilité",
      "Autonomie",
      "Pensée critique",
      "Empathie",
      "Gestion du stress",
    ],
  },
  {
    title: "Savoir-faire",
    items: [
      "Développement logiciel, Web et Mobile",
      "Programmation orientée objet",
      "Conception et gestion de bases de données",
      "Déploiement et gestion de code",
      "Algorithmie",
    ],
  },
];

export const tools: ToolGroup[] = [
  {
    title: "Editeur de code",
    tools: [{ name: "Visual Studio Code", icon: "/Image/outils/vscode.png" }],
  },
  {
    title: "IDE",
    tools: [
      { name: "Spring Tool Suite", icon: "/Image/outils/sts.png" },
      { name: "Eclipse", icon: "/Image/outils/eclipse.png" },
      { name: "IntelliJ", icon: "/Image/outils/IntelliJ_IDEA.png" },
    ],
  },
  {
    title: "Système de gestion de base de données",
    tools: [
      { name: "PostgreSQL", icon: "/Image/outils/postgresql.png" },
      { name: "Solr", icon: "/Image/outils/solr.png" },
    ],
  },
  {
    title: "Outil de gestion de base de données",
    tools: [
      { name: "PHPMyAdmin", icon: "/Image/outils/phpmyadmin.png" },
      { name: "MongoDB", icon: "/Image/outils/MongoDB.png" },
    ],
  },
  {
    title: "Système de contrôle de version",
    tools: [{ name: "Git", icon: "/Image/outils/git.png" }],
  },
  {
    title: "Outil de suivi des problèmes et de gestion de projet",
    tools: [{ name: "Jira Software", icon: "/Image/outils/jira.png" }],
  },
  {
    title: "Système d'exploitation",
    tools: [
      { name: "Linux", icon: "/Image/outils/linux.png" },
      { name: "Windows", icon: "/Image/outils/windows.png" },
    ],
  },
  {
    title: "Frameworks et Technologies Web",
    tools: [
      { name: "Thymeleaf", icon: "/Image/outils/thymeleaf.png" },
      { name: "SpringBoot", icon: "/Image/outils/spring.png" },
    ],
  },
];

export const programmingLanguages: TagGroup[] = [
  {
    title: "Quotidien",
    items: ["Java", "Spring Boot", "SQL", "HTML & CSS", "JavaScript", "Git"],
  },
  {
    title: "Utilisé en projet",
    items: ["Python", "PHP", "PostgreSQL", "React", "TypeScript"],
  },
  {
    title: "Notions",
    items: ["C", "Bash", "Godot"],
  },
];
