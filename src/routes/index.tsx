import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactCTA } from "@/components/contact-cta";
import { TrustStrip } from "@/components/trust-strip";
import { Counter } from "@/components/counter";
import { Logo } from "@/components/logo";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Progressive Electrical Contractors | Houston Commercial Electricians" },
      {
        name: "description",
        content:
          "Houston's premier commercial electrical contractor — churches, hotels, multi-family, hospitality, hangars and lighting. Total. Quality. Commitment.",
      },
      { property: "og:title", content: "Progressive Electrical Contractors" },
      {
        property: "og:description",
        content:
          "Commercial electrical contracting in Houston for hospitality, multi-family, ecclesiastical and aviation projects.",
      },
      { property: "og:image", content: "https://via.placeholder.com/1200x630?text=Hero" },
      { name: "twitter:image", content: "https://via.placeholder.com/1200x630?text=Hero" },
    ],
  }),
});

const categories = [
  {
    img: "/Hotels and Inns/img-002.png",
    title: "Hotels & Inns",
    sub: "Multi-unit electrical systems",
    n: "02",
  },
  {
    img: "/Hangers/Ellington Airfield Hanger/ellington_air_field_hanger_pic1.jpg",
    title: "Aviation Hangars",
    sub: "High-capacity solutions",
    n: "03",
  },
  {
    img: "/Construction/img-006.png",
    title: "Construction",
    sub: "Diverse commercial projects",
    n: "04",
  },
  {
    img: "/Churches/Dominion Church/Dominion_Church_Houston_TX_Pic1.jpg",
    title: "Worship Spaces",
    sub: "Architectural & AV power",
    n: "01",
  },
];

function Index() {
  const valuesRef = useReveal<HTMLDivElement>();
  const catRef = useReveal<HTMLDivElement>();
  const aboutRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative h-screen min-h-[640px] bg-primary overflow-hidden">
        <video
          src="/HeroVid.mp4"
          poster="https://via.placeholder.com/1920x1080?text=Hero+Video+Poster"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-110 saturate-[1.15] contrast-105 animate-slow-zoom"
        />
        {/* Light, subtle overlays for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-primary/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-primary/10" />
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "linear-gradient(transparent 95%, color-mix(in oklab, var(--brand-accent) 30%, transparent) 100%)",
            backgroundSize: "100% 4px",
          }}
        />

        {/* Floating accent */}
        <div
          className="absolute top-1/3 right-10 w-[5px] h-[5px] rounded-full bg-brand-accent/80 animate-spark hidden md:block"
          style={{ animationDuration: "5.2s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full bg-brand-accent/60 animate-spark hidden md:block"
          style={{ animationDelay: "2.4s", animationDuration: "4.6s" }}
        />

        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="mb-10 inline-flex">
              <Logo variant="dark" imgClassName="h-24 md:h-32 w-auto" glow={false} spark={false} />
            </div>
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-brand-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-accent drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
                Houston's Premier Electrical Partner
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-display font-bold text-primary-foreground leading-[1.02] mb-8 drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
              Precision Power. <br />
              <span className="text-brand-accent">Unrivaled</span> Quality.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-xl leading-relaxed drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
              Large-scale commercial electrical from aviation hangars to hospitality hubs.
              <span className="text-primary-foreground"> Total. Quality. Commitment.</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="btn-premium bg-brand-accent text-primary px-8 py-4 font-bold uppercase text-sm tracking-[0.2em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
              >
                Our Portfolio
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border border-primary-foreground/40 bg-primary-foreground/5 backdrop-blur-sm text-primary-foreground px-8 py-4 font-bold uppercase text-sm tracking-[0.2em] hover:bg-primary-foreground/10 hover:border-brand-accent transition-all drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
              >
                Request Quote
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-primary-foreground/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent" />
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip />

      {/* Values */}
      <section className="relative py-24 bg-brand-accent overflow-hidden">
        {/* Subtle blueprint grid for industrial texture */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Warm radial glow for depth */}
        <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div ref={valuesRef} className="reveal relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { word: "Total", sub: "End-to-end solutions", n: "I" },
              { word: "Quality", sub: "Master-level craftsmanship", n: "II" },
              { word: "Commitment", sub: "24/7 operational support", n: "III" },
            ].map((v, i) => (
              <div
                key={v.word}
                className={`group flex items-start gap-5 ${i < 2 ? "md:border-r md:border-primary/20 md:pr-10" : ""}`}
              >
                <span className="font-display text-sm font-bold text-primary/40 mt-3 transition-colors group-hover:text-primary">
                  {v.n}
                </span>
                <div>
                  <span className="block text-5xl md:text-6xl font-display font-bold text-primary leading-none tracking-tight">
                    {v.word}
                  </span>
                  <span className="uppercase tracking-[0.25em] text-[11px] font-bold text-primary/70 mt-4 block">
                    {v.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project categories */}
      <section className="relative py-28 bg-background overflow-hidden">
        {/* Atmospheric accent */}
        <div className="absolute top-40 -right-32 w-[500px] h-[500px] rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
        <div ref={catRef} className="reveal relative max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-brand-accent" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                  Core Sectors
                </p>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold max-w-2xl leading-[1.05]">
                Where downtime <br />
                <span className="text-brand-accent">isn't an option.</span>
              </h2>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 text-foreground font-bold uppercase text-sm tracking-[0.2em] hover:text-brand-accent transition-colors"
            >
              View All Sectors
              <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {categories.map((c) => (
              <Link
                key={c.title}
                to="/projects"
                className="group relative overflow-hidden bg-secondary aspect-video block hover-lift"
                style={{ borderRadius: "121px" }}
              >
                <img
                  src={c.img}
                  alt={c.title}
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
                    {c.n}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-primary-foreground font-display text-xl font-bold uppercase tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                    {c.title}
                  </h3>
                  <p className="text-primary-foreground/75 text-xs mt-1.5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                    {c.sub}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-brand-accent text-[11px] font-bold uppercase tracking-[0.25em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    Explore <span>→</span>
                  </div>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-brand-accent/0 group-hover:ring-brand-accent/50 transition-all duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / Stats */}
      <section className="relative py-28 bg-secondary overflow-hidden">
        <div className="absolute top-0 left-0 right-0 electric-line" />
        {/* Atmospheric copper glow */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-brand-accent/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        {/* Subtle blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--brand-primary) 1px, transparent 1px), linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div
          ref={aboutRef}
          className="reveal relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-brand-accent" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
                About Progressive
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-[1.05]">
              Three decades powering Houston's{" "}
              <span className="text-brand-accent">most ambitious</span> builds.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Progressive Electrical Contractors, Inc. is a licensed Texas commercial electrical
              contractor serving the greater Houston region. From design-build to final inspection,
              we deliver precision execution and rigorous safety standards on every project.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 border-2 border-brand-accent text-foreground px-7 py-4 font-bold uppercase text-xs tracking-[0.2em] hover:bg-brand-accent hover:text-primary transition-all"
            >
              About Our Company
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-px bg-primary/10 border border-primary/10">
            <div className="bg-secondary p-8">
              <Counter to={30} suffix="+" label="Years In Business" />
            </div>
            <div className="bg-secondary p-8">
              <Counter to={500} suffix="+" label="Projects Delivered" />
            </div>
            <div className="bg-secondary p-8">
              <Counter to={24} suffix="/7" label="Service Response" />
            </div>
            <div className="bg-secondary p-8">
              <Counter to={100} suffix="%" label="Licensed & Insured" />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <SiteFooter />
    </div>
  );
}
