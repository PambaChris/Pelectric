import { Link } from "@tanstack/react-router";

export function ContactCTA() {
  return (
    <section className="relative bg-primary py-32 overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--brand-accent) 1px, transparent 1px), linear-gradient(90deg, var(--brand-accent) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Cinematic radial glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />
      {/* Top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-brand-accent" />
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent">
            Let's build something powerful
          </p>
          <span className="w-10 h-px bg-brand-accent" />
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-8 leading-[1.02] tracking-tight">
          Ready to power your <br className="hidden md:block" />
          <span className="text-brand-accent">next project?</span>
        </h2>
        <p className="text-primary-foreground/70 mb-12 text-lg max-w-xl mx-auto leading-relaxed">
          Houston's most reliable commercial electrical contractor — built on commitment, executed
          with precision.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="tel:7137722018"
            className="btn-premium bg-brand-accent text-primary px-10 py-5 font-bold uppercase tracking-widest text-sm shadow-[0_10px_40px_-10px_rgba(234,123,38,0.6)]"
          >
            (713) 772-2018
          </a>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-primary-foreground/80 hover:text-brand-accent transition-colors font-bold uppercase tracking-widest text-sm"
          >
            Request a quote
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
          </Link>
        </div>
      </div>
    </section>
  );
}
