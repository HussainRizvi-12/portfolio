import { motion } from "framer-motion";
import { Check, ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl glass-strong transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
            {project.category}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-1 text-[11px] font-semibold text-white shadow">
              <Star className="h-3 w-3 fill-current" />
              Featured
            </span>
          )}
        </div>

        {/* hover quick actions */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/20 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-brand-2"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/20 bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-brand-1"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-semibold leading-snug">
            {project.title}
          </h3>
          <span className="shrink-0 text-xs text-muted">{project.year}</span>
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-3 space-y-1.5">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-xs text-muted"
            >
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-2" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span key={tech} className="chip py-0.5 text-[11px]">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 border-t border-line pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-1.5 text-sm"
          >
            <FaGithub className="h-4 w-4" />
            Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-2 transition-colors hover:text-brand-1"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}
