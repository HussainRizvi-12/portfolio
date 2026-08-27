import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/context/ThemeContext";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { NotFound } from "@/components/NotFound";

/**
 * Lightweight SPA 404 handling: any non-root path shows the 404 screen,
 * which is the common behaviour when a host serves index.html for all routes.
 */
function useNotFound() {
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const check = () => setNotFound(window.location.pathname !== "/");
    check();
    window.addEventListener("popstate", check);
    return () => window.removeEventListener("popstate", check);
  }, []);

  const goHome = () => {
    window.history.pushState({}, "", "/");
    setNotFound(false);
  };

  return { notFound, goHome };
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const { notFound, goHome } = useNotFound();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatedBackground />

      <AnimatePresence>{loading && <Preloader key="preloader" />}</AnimatePresence>

      {notFound ? (
        <NotFound onHome={goHome} />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Services />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
    </ThemeProvider>
  );
}
