import {
  MonitorSmartphone,
  Layers,
  Smartphone,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: MonitorSmartphone,
    description:
      "Fast, accessible and pixel-perfect interfaces built with React and modern tooling.",
    features: ["React & TypeScript", "Component libraries", "State management"],
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    icon: Layers,
    description:
      "End-to-end products — from database schema to polished UI — with the MERN stack.",
    features: ["MERN stack apps", "Authentication", "End-to-end features"],
  },
  {
    id: "responsive",
    title: "Responsive Web Design",
    icon: Smartphone,
    description:
      "Mobile-first layouts that look great and perform well on every screen size.",
    features: ["Mobile-first", "Cross-browser", "Tailwind CSS"],
  },
  {
    id: "api",
    title: "API Development",
    icon: Server,
    description:
      "Clean, documented and secure REST APIs that scale with your product.",
    features: ["REST & Node.js", "Swagger docs", "Rate limiting & auth"],
  },
  {
    id: "database",
    title: "Database Integration",
    icon: Database,
    description:
      "Reliable data modeling and integration with SQL and NoSQL databases.",
    features: ["MongoDB & MySQL", "Schema design", "Optimized queries"],
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    icon: Wrench,
    description:
      "Ongoing support, performance tuning, bug fixes and feature enhancements.",
    features: ["Performance audits", "Bug fixing", "CI/CD pipelines"],
  },
];
