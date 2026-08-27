import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

/**
 * Tracks which section is currently in view so the navbar can highlight
 * the matching link. Uses a thin intersection band near the viewport top.
 */
export function useActiveSection() {
  const [active, setActive] = useState<string>(sectionIds[0] ?? "home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
