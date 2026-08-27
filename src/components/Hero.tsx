import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";
import { personal } from "@/data/personal";
import { socials, emailLink } from "@/data/socials";
import { downloadResume } from "@/utils/downloadResume";
import { EASE } from "@/utils/motion";
import { TypingText } from "./TypingText";
import avatar from "@/assets/avatar.png";

const [first, ...rest] = personal.name.split(" ");

const floatChips = [
  { Icon: SiReact, className: "-left-5 top-12 animate-float", color: "text-brand-3" },
  { Icon: SiNodedotjs, className: "-right-4 top-24 animate-float-slow", color: "text-emerald-400" },
  { Icon: SiMongodb, className: "-left-6 bottom-20 animate-float-slow", color: "text-green-400" },
  { Icon: SiTailwindcss, className: "-right-5 bottom-12 animate-float", color: "text-sky-400" },
];

const socialRow = [...socials, emailLink];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-28 pb-16"
    >
      <div className="container-px grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left — copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new opportunities
          </motion.span>

          <motion.p variants={item} className="mt-6 text-base font-medium text-muted">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-1 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl"
          >
            {first} <span className="text-gradient">{rest.join(" ")}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-xl font-semibold text-ink sm:text-2xl"
          >
            I&apos;m a{" "}
            <TypingText
              words={personal.roles}
              className="text-gradient font-display"
            />
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {personal.intro}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={downloadResume} className="btn-ghost">
              <Download className="h-4 w-4" />
              Download Resume
            </button>
          </motion.div>

          {/* Meta + socials */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <span className="inline-flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-brand-2" />
              {personal.location}
            </span>
            <div className="flex items-center gap-2">
              {socialRow.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="glass grid h-10 w-10 place-items-center rounded-full text-muted transition-all hover:-translate-y-1 hover:text-brand-2"
                >
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — avatar visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="relative mx-auto w-[17rem] sm:w-[21rem]"
        >
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-brand-1/40 via-brand-2/30 to-brand-3/40 blur-3xl" />

          {/* decorative dashed ring */}
          <div className="absolute -inset-3 -z-10 animate-spin-slow rounded-[3rem] border border-dashed border-line" />

          <div className="glass-strong rounded-[2.5rem] p-3 shadow-2xl">
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-1/25 to-brand-3/25">
              <img
                src={avatar}
                alt="Illustrated developer avatar placeholder"
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          {/* floating tech chips */}
          {floatChips.map(({ Icon, className, color }) => (
            <span
              key={className}
              className={cnChip(className)}
              aria-hidden="true"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl glass-strong shadow-lg">
                <Icon className={cnChipColor(color)} />
              </span>
            </span>
          ))}

          {/* experience badge */}
          <div className="glass-strong absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-4 py-2.5 text-center shadow-xl">
            <p className="font-display text-lg font-bold leading-none text-gradient">
              2+ Years
            </p>
            <p className="mt-1 text-xs text-muted">Building products</p>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-brand-2 lg:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1"
        >
          <span className="h-1.5 w-1 rounded-full bg-current" />
        </motion.span>
      </a>
    </section>
  );
}

/** tiny helpers to keep the chip markup tidy */
function cnChip(extra: string) {
  return `absolute ${extra}`;
}
function cnChipColor(extra: string) {
  return `h-5 w-5 ${extra}`;
}
