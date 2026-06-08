import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactCTA } from "@/components/contact-cta";
import { projectCategories } from "@/lib/project-image-data"; // Import projectCategories

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
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05]">Projects</h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            A selection of commercial electrical work across the categories we know best.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projectCategories.map((p, i) => {
            const indexFormatted = (i + 1).toString().padStart(2, "0");
            return (
              <Link
                key={p.slug}
                to={`/${p.slug}`}
                className="group relative overflow-hidden bg-secondary aspect-video block hover-lift"
                style={{ borderRadius: "121px" }}
              >
                <img
                  src={p.img || ""}
                  alt={p.title}
                  loading="lazy"
                  width={1549}
                  height={871}
                  style={{
                    borderRadius: "121px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="transition-all duration-[1400ms] ease-out group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Lighter, cinematic gradient — image stays visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-85" />
                {/* Copper wash on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="w-6 h-px bg-brand-accent" />
                  <span className="text-brand-accent font-display font-bold text-[11px] tracking-[0.25em]">
                    {indexFormatted}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-primary-foreground font-display text-xl font-bold uppercase tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    {p.title}
                  </h3>
                  <p className="text-primary-foreground/75 text-xs mt-1.5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                    {p.sub}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-brand-accent text-[11px] font-bold uppercase tracking-[0.25em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    Explore <span>→</span>
                  </div>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-brand-accent/0 group-hover:ring-brand-accent/50 transition-all duration-500" />
              </Link>
            );
          })}
        </div>
      </section>

      <ContactCTA />
      <SiteFooter />
    </div>
  );
}
