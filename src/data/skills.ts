import type { ComponentType } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPython,
  SiOpenjdk,
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiPostman,
  SiAndroidstudio,
  SiDocker,
} from "react-icons/si";
import {
  MonitorSmartphone,
  Server,
  Database,
  Code2,
  Wrench,
  Cloud,
  type LucideIcon,
} from "lucide-react";

type Icon = ComponentType<{ className?: string }>;

export type SkillLevel = "Core" | "Comfortable" | "Learning";

export interface Skill {
  name: string;
  icon: Icon;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

/**
 * Skills grouped by category.
 * Levels are qualitative (Core / Comfortable / Learning) — intentionally
 * NOT fake percentages.
 */
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    skills: [
      { name: "HTML5", icon: SiHtml5, level: "Core" },
      { name: "CSS3", icon: SiCss, level: "Core" },
      { name: "JavaScript", icon: SiJavascript, level: "Core" },
      { name: "React", icon: SiReact, level: "Core" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Core" },
      { name: "Bootstrap", icon: SiBootstrap, level: "Comfortable" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: "Core" },
      { name: "Express.js", icon: SiExpress, level: "Core" },
      { name: "REST APIs", icon: Server, level: "Core" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, level: "Core" },
      { name: "MySQL", icon: SiMysql, level: "Comfortable" },
      { name: "SQL", icon: Database, level: "Comfortable" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", icon: SiPython, level: "Comfortable" },
      { name: "Java", icon: SiOpenjdk, level: "Comfortable" },
      { name: "C", icon: SiC, level: "Comfortable" },
      { name: "C++", icon: SiCplusplus, level: "Comfortable" },
      { name: "JavaScript", icon: SiJavascript, level: "Core" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, level: "Core" },
      { name: "GitHub", icon: SiGithub, level: "Core" },
      { name: "VS Code", icon: Code2, level: "Core" },
      { name: "Postman", icon: SiPostman, level: "Core" },
      { name: "Android Studio", icon: SiAndroidstudio, level: "Learning" },
      { name: "Docker", icon: SiDocker, level: "Learning" },
      { name: "Cloud Platforms", icon: Cloud, level: "Learning" },
    ],
  },
];
