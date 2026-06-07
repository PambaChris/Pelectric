import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactCTA } from "@/components/contact-cta";

export const Route = createFileRoute("/hangars")({
  component: HangarsPage,
});

function HangarsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="py-24 md:py-32 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">
            Category
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05]">Hangars</h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
            High-bay industrial systems
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
          <p className="text-muted-foreground">Gallery for Hangars coming soon.</p>
        </div>
      </section>

      <ContactCTA />
      <SiteFooter />
    </div>
  );
}
