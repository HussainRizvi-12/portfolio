/**
 * 👇 ============================================================
 *  PERSONAL INFO — Replace everything here with your own details.
 * ============================================================
 */
import { GraduationCap, Rocket, Sparkles, BookOpen, type LucideIcon } from "lucide-react";

export const personal = {
  name: "Muhammad Hussain Raza", // 👈 Your full name
  firstName: "Muhammad", // 👈 Used in the navbar logo & hero
  role: "Full Stack Developer", // 👈 Your professional title

  // 👈 Words that cycle in the animated typing text
  roles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Cloud & DevOps Learner",
  ],

  intro:
    "I build responsive, scalable, and user-friendly web applications using modern technologies. I enjoy solving real-world problems and turning ideas into reliable digital products.",

  // 👈 About-section paragraphs
  about: [
    "I'm a full stack developer based in San Francisco with a passion for crafting clean, performant interfaces and robust APIs. Over the last few years I've shipped products across e-commerce, SaaS dashboards and real-time apps using the MERN stack.",
    "I care deeply about developer experience, accessibility and writing code that's easy to maintain. When I'm not building, I'm learning about cloud infrastructure, contributing to open source and mentoring aspiring developers.",
  ],

  // 👈 Contact details
  email: "alex.morgan@example.com",
  phone: "+1 (555) 012-3456",
  location: "San Francisco, CA",
  availability: "Available for freelance & full-time roles",
  timezone: "PST (UTC −8)",
  resumeName: "Muhammad-Hussain-Raza-Resume", // 👈 Used for the downloaded resume file name
};

export interface AboutFact {
  icon: LucideIcon;
  title: string;
  detail: string;
}

export const aboutFacts: AboutFact[] = [
  { icon: GraduationCap, title: "Education", detail: "B.Sc. in Computer Science — Tech University (2021)" },
  { icon: Rocket, title: "Career Goal", detail: "Become a product-focused engineer leading high-impact web platforms." },
  { icon: Sparkles, title: "Interests", detail: "UI engineering, performance tuning, DX tooling & design systems." },
  { icon: BookOpen, title: "Currently Learning", detail: "Docker, Kubernetes, AWS and distributed system design." },
];

export const aboutHighlights: string[] = [
  "Clean, maintainable & well-documented code",
  "Pixel-perfect, fully responsive interfaces",
  "REST API design & database modeling",
  "Performance & accessibility first",
  "CI/CD, automated testing & code reviews",
  "Clear communication & on-time delivery",
];
