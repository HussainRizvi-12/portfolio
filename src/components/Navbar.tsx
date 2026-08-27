import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { personal } from "@/data/personal";
import { useActiveSection } from "@/hooks/useActiveSection";
import { downloadResume } from "@/utils/downloadResume";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/utils/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="container-px">
        <div
          className={cn(
            "mt-3 flex items-center justify-between rounded-2xl px-3 transition-all duration-300 sm:px-4",
            scrolled
              ? "glass-strong shadow-lg shadow-black/5"
              : "border border-transparent",
          )}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="flex items-center gap-2.5 py-3"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 font-display text-sm font-bold text-white shadow-md shadow-brand-2/30">
              {personal.firstName.charAt(0)}
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              {personal.name}
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-line bg-surface-strong backdrop-blur-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 py-2">
            <button
              type="button"
              onClick={downloadResume}
              className="btn-primary hidden px-4 py-2.5 sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              Resume
            </button>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((p) => !p)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="glass grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="container-px overflow-hidden md:hidden"
          >
            <div className="glass-strong mt-2 rounded-2xl p-3 shadow-xl">
              <div className="flex flex-col">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive = active === id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-surface-strong text-ink"
                          : "text-muted hover:bg-surface hover:text-ink",
                      )}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  downloadResume();
                }}
                className="btn-primary mt-2 w-full"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
