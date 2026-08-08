import type { TagGroup, ToolGroup } from "@/content/types";

export const professionalQualities: TagGroup[] = [
  {
    title: "Ways of working",
    items: [
      "Collaborative",
      "Methodical",
      "Adaptable",
      "Autonomous",
      "Critical thinking",
      "Empathy",
      "Composure under pressure",
    ],
  },
  {
    title: "Capabilities",
    items: [
      "Software, web and mobile development",
      "Object-oriented programming",
      "Database design and management",
      "Deployment and version control",
      "Algorithms",
    ],
  },
];

export const tools: ToolGroup[] = [
  {
    title: "Code editor",
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
    title: "Database management systems",
    tools: [
      { name: "PostgreSQL", icon: "/Image/outils/postgresql.png" },
      { name: "Solr", icon: "/Image/outils/solr.png" },
    ],
  },
  {
    title: "Database tools",
    tools: [
      { name: "PHPMyAdmin", icon: "/Image/outils/phpmyadmin.png" },
      { name: "MongoDB", icon: "/Image/outils/MongoDB.png" },
    ],
  },
  {
    title: "Version control",
    tools: [{ name: "Git", icon: "/Image/outils/git.png" }],
  },
  {
    title: "Issue tracking and project management",
    tools: [{ name: "Jira Software", icon: "/Image/outils/jira.png" }],
  },
  {
    title: "Operating systems",
    tools: [
      { name: "Linux", icon: "/Image/outils/linux.png" },
      { name: "Windows", icon: "/Image/outils/windows.png" },
    ],
  },
  {
    title: "Web frameworks and technologies",
    tools: [
      { name: "Thymeleaf", icon: "/Image/outils/thymeleaf.png" },
      { name: "SpringBoot", icon: "/Image/outils/spring.png" },
    ],
  },
];

export const programmingLanguages: TagGroup[] = [
  {
    title: "Daily",
    items: ["Java", "Spring Boot", "SQL", "HTML & CSS", "JavaScript", "Git"],
  },
  {
    title: "Used on projects",
    items: ["Python", "PHP", "PostgreSQL", "React", "TypeScript"],
  },
  {
    title: "Familiar with",
    items: ["C", "Bash", "Godot"],
  },
];
