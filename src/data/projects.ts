import tinyteams from "@/assets/tinyteams.png";
import portfolio from "@/assets/portfolio.png";

export interface ProjectAction {
  type: "repo" | "demo";
  labelKey: string;
  link: string;
}

export interface ProjectConfig {
  key: string;
  image: string;
  color: string;
  technos: string[]
  actions: ProjectAction[];
}

export const projectsConfig: ProjectConfig[] = [
  {
    key: "tinyteams",
    image: tinyteams,
    color: "#001F37",
    technos: ["Vue 3", "Express.js", "Sequelize", "Socket.io", "SQLite", "VueUse"],
    actions: [
      { type: "repo", labelKey: "misc.viewButton", link: "https://github.com/soonbtf/TinyTeams" },
      { type: "demo", labelKey: "misc.watchDemo", link: "https://www.youtube.com/watch?v=yxCXfmS1xC4" },
    ]
  },
  {
    key: "portfolio",
    image: portfolio,
    color: "#222222",
    technos: ["Vue 3", "TypeScript", "i18n", "VueUse"],
    actions: [
      { type: "repo", labelKey: "misc.viewButton", link: "https://github.com/soonbtf/Portfolio" },
    ]
  }
];
