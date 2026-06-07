import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactCTA } from "@/components/contact-cta";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services | Progressive Electrical Contractors" },
      {
        name: "description",
        content:
          "Design-build electrical, lighting design, service & maintenance, and tenant build-outs for commercial Houston properties.",
      },
    ],
  }),
});

const services = [
  {
    n: "01",
    h: "Design-Build Electrical",
    b: "Full-scope electrical design and installation for ground-up commercial construction.",
  },
  {
    n: "02",
    h: "Lighting Design",
    b: "Custom architectural and exterior lighting solutions, from sanctuaries to streetscapes.",
  },
  {
    n: "03",
    h: "Tenant Build-Outs",
    b: "Fast-track electrical work for hotels, restaurants and multi-family interior fit-outs.",
  },
  {
    n: "04",
    h: "Service & Maintenance",
    b: "24/7 emergency response, preventative maintenance and code-compliance upgrades.",
  },
  {
    n: "05",
    h: "Power Distribution",
    b: "Switchgear, transformer and feeder installations for high-load commercial facilities.",
  },
  {
    n: "06",
    h: "Low-Voltage & Controls",
    b: "Data, fire alarm, AV power coordination and lighting control system integration.",
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">
            Capabilities
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05]">Services</h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div key={s.n} className="bg-background p-8 hover:bg-secondary transition-colors">
              <div className="text-brand-accent font-display font-bold text-sm mb-6">{s.n}</div>
              <h3 className="font-display font-bold text-2xl mb-3">{s.h}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
      <SiteFooter />
    </div>
  );
}
