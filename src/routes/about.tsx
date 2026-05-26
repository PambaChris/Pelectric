import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactCTA } from "@/components/contact-cta";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About | Progressive Electrical Contractors" },
      {
        name: "description",
        content:
          "Houston-based commercial electrical contractor with 30+ years of experience across hospitality, multi-family, ecclesiastical and industrial projects.",
      },
    ],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="py-24 md:py-32 border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-6">
            About Us
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.05]">
            Built on craft. Driven by commitment.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Progressive Electrical Contractors, Inc. has served Houston and Southeast Texas for
            more than three decades — wiring the schools, churches, hotels and hangars that shape
            the region's skyline.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            {
              h: "Our Mission",
              b: "Deliver every project with technical precision, fair pricing and a relentless commitment to safety on the jobsite.",
            },
            {
              h: "Our Approach",
              b: "We partner with general contractors, owners and architects from preconstruction through commissioning — no surprises, no shortcuts.",
            },
            {
              h: "Our People",
              b: "Master and journeyman electricians with deep field experience in commercial, hospitality and industrial environments.",
            },
          ].map((c) => (
            <div key={c.h} className="border-t-2 border-brand-accent pt-6">
              <h3 className="font-display font-bold text-2xl mb-3">{c.h}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
      <SiteFooter />
    </div>
  );
}
