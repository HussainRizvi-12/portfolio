import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="container-px">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What I can <span className="text-gradient">do for you</span>
            </>
          }
          description="From a single landing page to a full product — here's how I can help bring your idea to life."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
