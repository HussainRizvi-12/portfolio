import { ArrowUp, Heart } from "lucide-react";
import { personal } from "@/data/personal";
import { navLinks } from "@/data/nav";
import { socials, emailLink } from "@/data/socials";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [...socials, emailLink];

  return (
    <footer className="relative mt-10 border-t border-line">
      <div className="container-px py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 font-display text-sm font-bold text-white shadow-md shadow-brand-2/30">
                {personal.firstName.charAt(0)}
              </span>
              <span className="font-display text-base font-bold tracking-tight">
                {personal.name}
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {personal.role} crafting responsive, scalable and user-friendly
              digital products.
            </p>
            <div className="flex flex-wrap gap-2">
              {links.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="glass grid h-9 w-9 place-items-center rounded-full text-muted transition-all hover:-translate-y-1 hover:text-brand-2"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brand-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-muted">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="transition-colors hover:text-brand-2"
                >
                  {personal.email}
                </a>
              </li>
              <li>{personal.location}</li>
              <li className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {personal.availability}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <Heart className="h-3.5 w-3.5 text-brand-4" /> using React,
            Vite &amp; Tailwind
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="link-underline inline-flex items-center gap-1.5"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
