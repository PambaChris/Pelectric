const items = [
  "TECL #25896",
  "OSHA 30 Certified",
  "NECA Member",
  "IBEW Trained",
  "Texas Licensed",
  "Fully Insured",
  "Drug-Free Workplace",
  "Safety Rating A+",
];

export function TrustStrip() {
  return (
    <section
      aria-label="Certifications and credentials"
      className="bg-primary border-y border-primary-foreground/10 overflow-hidden"
    >
      <div className="relative py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...items, ...items].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-8 text-primary-foreground/75 text-xs font-bold uppercase tracking-[0.3em] hover:text-brand-accent transition-colors"
            >
              <span
                className="w-1 h-1 rounded-full bg-brand-accent animate-spark shadow-[0_0_4px_color-mix(in_oklab,var(--brand-accent)_55%,transparent)]"
                style={{ animationDelay: `${(i % 5) * 0.7}s` }}
              />

              {t}
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent" />
      </div>
    </section>
  );
}
