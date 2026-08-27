import { motion } from "framer-motion";
import { Compass, Home } from "lucide-react";

interface NotFoundProps {
  onHome: () => void;
}

export function NotFound({ onHome }: NotFoundProps) {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-lg shadow-brand-2/30">
          <Compass className="h-8 w-8" />
        </div>
        <p className="font-display text-7xl font-extrabold text-gradient sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold">Page not found</h1>
        <p className="mx-auto mt-2 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <button type="button" onClick={onHome} className="btn-primary mt-8">
          <Home className="h-4 w-4" />
          Back to home
        </button>
      </motion.div>
    </main>
  );
}
