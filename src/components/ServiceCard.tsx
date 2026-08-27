import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-strong group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-2/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />

      <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-2 text-white shadow-lg shadow-brand-2/30">
        <service.icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {service.description}
      </p>

      <ul className="mt-4 space-y-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-xs text-muted"
          >
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-brand-2" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
