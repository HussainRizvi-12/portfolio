import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/utils/motion";
import { personal, aboutFacts, aboutHighlights } from "@/data/personal";
import { stats } from "@/data/stats";
import { StatCard } from "./StatCard";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Me"
          title={
            <>
              Turning ideas into <span className="text-gradient">reliable products</span>
            </>
          }
          description="A quick intro to who I am, what I value, and what I'm working toward."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left — bio + facts */}
          <Reveal className="space-y-5">
            {personal.about.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}

            <ul className="grid gap-3 sm:grid-cols-2">
              {aboutFacts.map((fact) => (
                <li
                  key={fact.title}
                  className="glass flex gap-3 rounded-2xl p-4 transition-colors hover:border-brand-2/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-1/20 to-brand-2/20 text-brand-2">
                    <fact.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{fact.title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">
                      {fact.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right — highlights + availability */}
          <Reveal delay={0.1} className="space-y-5">
            <div className="glass-strong rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold">
                What I bring to the table
              </h3>
              <ul className="mt-4 space-y-3">
                {aboutHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-2" />
                    <span className="text-sm leading-relaxed text-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>
              <p className="text-sm text-muted">
                <span className="font-semibold text-ink">Currently </span>
                {personal.availability}.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
