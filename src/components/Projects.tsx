import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { projects, projectFilters } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/utils/cn";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");

  const visible = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );

  return (
    <section id="projects" className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Projects"
          title={
            <>
              Featured <span className="text-gradient">work</span>
            </>
          }
          description="A selection of products I've designed and built. Filter by category to explore."
        />

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {projectFilters.map((option) => {
            const isActive = option === filter;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-white" : "text-muted hover:text-ink",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-1 to-brand-2 shadow-md shadow-brand-2/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {option}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
