import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import type { Stat } from "@/data/stats";

export function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, value } = useCountUp(stat.value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-strong relative overflow-hidden rounded-2xl p-5 text-center"
    >
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-2/15 blur-2xl" />
      <span
        ref={ref}
        className="block font-display text-3xl font-bold text-gradient sm:text-4xl"
      >
        {value}
        {stat.suffix}
      </span>
      <p className="mt-2 text-sm text-muted">{stat.label}</p>
    </motion.div>
  );
}
