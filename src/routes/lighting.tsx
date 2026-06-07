import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactCTA } from "@/components/contact-cta";

export const Route = createFileRoute("/lighting")({
  component: LightingPage,
});

const projects = [{ slug: "general-lighting", title: "General Lighting Projects" }];

function LightingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="py-24 md:py-32 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05]">Lighting</h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            Architectural & exterior design
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/${p.slug}`}
              className="p-6 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <h2 className="text-xl font-bold">{p.title}</h2>
            </Link>
          ))}
        </div>
      </section>

      <ContactCTA />
      <SiteFooter />
    </div>
  );
}
