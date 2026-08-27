import { Briefcase, GraduationCap, Award, Code2, Users, type LucideIcon } from "lucide-react";

export type ExperienceType =
  | "work"
  | "education"
  | "internship"
  | "freelance"
  | "certification";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  role: string;
  org: string;
  date: string;
  description: string;
  skills: string[];
}

export const experienceFilters = [
  "All",
  "Work",
  "Education",
  "Internship",
  "Freelance",
  "Certifications",
] as const;

export type ExperienceFilter = (typeof experienceFilters)[number];

export const experienceMeta: Record<
  ExperienceType,
  { label: string; icon: LucideIcon; gradient: string }
> = {
  work: { label: "Work", icon: Briefcase, gradient: "from-indigo-500 to-violet-500" },
  education: { label: "Education", icon: GraduationCap, gradient: "from-cyan-500 to-sky-500" },
  internship: { label: "Internship", icon: Code2, gradient: "from-fuchsia-500 to-pink-500" },
  freelance: { label: "Freelance", icon: Users, gradient: "from-emerald-500 to-teal-500" },
  certification: { label: "Certification", icon: Award, gradient: "from-amber-500 to-orange-500" },
};

/** Maps a filter label to the experience type(s) it matches. */
export const filterToType: Record<ExperienceFilter, ExperienceType | null> = {
  All: null,
  Work: "work",
  Education: "education",
  Internship: "internship",
  Freelance: "freelance",
  Certifications: "certification",
};

/**
 * 👇 Timeline items (newest first). Replace with your own journey.
 */
export const experience: ExperienceItem[] = [
  {
    id: "freelance-fullstack",
    type: "freelance",
    role: "Full Stack Developer (Freelance)",
    org: "Self-employed",
    date: "2022 — Present",
    description:
      "Designing and shipping end-to-end web products for startups and small businesses, from discovery to deployment.",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    id: "aws-cert",
    type: "certification",
    role: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    date: "2023",
    description:
      "Foundational certification covering cloud concepts, security, architecture and AWS core services.",
    skills: ["AWS", "Cloud", "DevOps"],
  },
  {
    id: "frontend-intern",
    type: "internship",
    role: "Frontend Developer Intern",
    org: "Brightwave Studio",
    date: "2021",
    description:
      "Built reusable React components and translated Figma designs into responsive, accessible interfaces.",
    skills: ["React", "TypeScript", "SCSS"],
  },
  {
    id: "upwork-freelance",
    type: "freelance",
    role: "Freelance Web Developer",
    org: "Upwork",
    date: "2021 — 2022",
    description:
      "Delivered 10+ client projects with a 5-star average rating, focusing on performance and clean UX.",
    skills: ["JavaScript", "REST APIs", "UI/UX"],
  },
  {
    id: "meta-cert",
    type: "certification",
    role: "Meta Front-End Developer",
    org: "Coursera",
    date: "2022",
    description:
      "Professional certificate covering React, modern JavaScript, UI design and web development best practices.",
    skills: ["React", "JavaScript", "UX"],
  },
  {
    id: "bsc-cs",
    type: "education",
    role: "B.Sc. in Computer Science",
    org: "Tech University",
    date: "2017 — 2021",
    description:
      "Graduated with honors. Coursework in data structures, algorithms, databases, OOP and software engineering.",
    skills: ["Data Structures", "Algorithms", "DBMS", "OOP"],
  },
];
