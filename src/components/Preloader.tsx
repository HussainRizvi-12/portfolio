import { motion } from "framer-motion";
import { personal } from "@/data/personal";

/** Full-screen loader shown on first paint (controlled via AnimatePresence). */
export function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-base"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-6">
        {/* animated monogram ring */}
        <div className="relative grid h-20 w-20 place-items-center">
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-2 border-r-brand-1"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <motion.span
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-brand-3"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
          />
          <span className="font-display text-2xl font-bold text-gradient">
            {personal.firstName.charAt(0)}
          </span>
        </div>
        <motion.p
          className="text-sm font-medium tracking-[0.3em] text-muted uppercase"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
}
