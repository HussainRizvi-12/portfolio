import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  experience,
  experienceFilters,
  experienceMeta,
  filterToType,
  type ExperienceFilter,
} from "@/data/experience";
import { cn } from "@/utils/cn";

export function Experience() {
  const [filter, setFilter] = useState<ExperienceFilter>("All");

  const visible = experience.filter((item) => {
    const type = filterToType[filter];
    return type === null || item.type === type;
  });

  return (
    <section id="experience" className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Experience & Education"
          title={
            <>
              My <span className="text-gradient">journey</span> so far
            </>
          }
          description="Education, roles, freelance work and certifications — the path that shaped how I build."
        />

        {/* Type filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {experienceFilters.map((option) => {
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
                    layoutId="exp-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-1 to-brand-2 shadow-md shadow-brand-2/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {option}
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* the line */}
          <div className="absolute left-4 top-0 h-full w-px bg-line lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-8">
            {visible.map((item, i) => {
              const meta = experienceMeta[item.type];
              const Icon = meta.icon;
              const onLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-12 lg:grid lg:grid-cols-2 lg:gap-12 lg:pl-0"
                >
                  {/* node */}
                  <span
                    className={cn(
                      "absolute left-4 top-1 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br text-white shadow-lg ring-4 ring-base lg:left-1/2",
                      meta.gradient,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <div
                    className={cn(
                      "glass-strong rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                      onLeft ? "lg:col-start-1" : "lg:col-start-2",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r px-2.5 py-1 text-[11px] font-semibold text-white",
                        meta.gradient,
                      )}
                    >
                      <Icon className="h-3 w-3" />
                      {meta.label}
                    </span>

                    <h3 className="mt-3 font-display text-base font-semibold leading-snug">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm">
                      <span className="font-medium text-brand-2">{item.org}</span>
                      <span className="text-muted"> · {item.date}</span>
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span key={skill} className="chip py-0.5 text-[11px]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
