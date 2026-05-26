import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactCTA } from "@/components/contact-cta";
const projects = [
  { img: "/Hotels and Inns/img-002.png", title: "Hotels & Inns", sub: "Full hospitality electrical scope" },
  { img: "/Hangers/Ellington Airfield Hanger/ellington_air_field_hanger_pic1.jpg", title: "Hangars", sub: "High-bay industrial systems" },
  { img: "/Construction/img-006.png", title: "Construction", sub: "Diverse commercial projects" },
  { img: "/Lighting/General Lighting/Lighting_13.jpg", title: "Lighting", sub: "Architectural & exterior design" },
  { img: "/Construction/General Construction/Abvi_Lake_Charles_1.jpg", title: "General", sub: "Ground-up commercial" },
  { img: "/Churches/Dominion Church/Dominion_Church_Houston_TX_Pic1.jpg", title: "Churches", sub: "Sanctuary lighting & AV power" },
];

export const Route = createFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="py-24 md:py-32 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05]">
            Projects
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            A selection of commercial electrical work across the categories we know best.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={`${p.title}-${i}`}
              className="group relative overflow-hidden bg-secondary aspect-video rounded-md"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1549}
                height={871}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-primary-foreground font-display text-xl font-bold uppercase tracking-wide">
                  {p.title}
                </h3>
                <p className="text-primary-foreground/60 text-xs mt-1">{p.sub}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCTA />
      <SiteFooter />
    </div>
  );
}