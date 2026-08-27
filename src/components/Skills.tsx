import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/utils/motion";
import {
  skillCategories,
  type SkillLevel,
} from "@/data/skills";

const levelStyles: Record<
  SkillLevel,
  { dot: string; label: string }
> = {
  Core: { dot: "bg-emerald-400", label: "Core" },
  Comfortable: { dot: "bg-amber-400", label: "Comfortable" },
  Learning: { dot: "bg-slate-400", label: "Exploring" },
};

const allSkills = skillCategories.flatMap((c) => c.skills);

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Skills & Tools"
          title={
            <>
              Technologies I <span className="text-gradient">work with</span>
            </>
          }
          description="A snapshot of my toolkit across the stack. Dot color shows my familiarity — no fake percentages."
        />

        {/* Category cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal
              key={category.title}
              delay={(i % 3) * 0.08}
              className="h-full"
            >
              <div className="glass-strong group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-2/40 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-md shadow-brand-2/30">
                    <category.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      title={`${skill.name} — ${levelStyles[skill.level].label}`}
                      className="chip gap-1.5 py-1.5 transition-colors hover:border-brand-2/40 hover:text-ink"
                    >
                      <skill.icon className="h-4 w-4" />
                      {skill.name}
                      <span
                        className={`ml-0.5 h-1.5 w-1.5 rounded-full ${levelStyles[skill.level].dot}`}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted">
          {(Object.keys(levelStyles) as SkillLevel[]).map((level) => (
            <span key={level} className="inline-flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${levelStyles[level].dot}`} />
              {levelStyles[level].label}
            </span>
          ))}
        </div>

        {/* Tech marquee */}
        <div className="pause-on-hover relative mt-10 overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee gap-3">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span key={`${skill.name}-${i}`} className="chip shrink-0 py-2">
                <skill.icon className="h-4 w-4" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
