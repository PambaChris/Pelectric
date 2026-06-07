import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";

const cols = [
  {
    title: "Capabilities",
    links: [
      { label: "Design-Build", to: "/services" },
      { label: "Lighting Design", to: "/services" },
      { label: "Tenant Build-Outs", to: "/services" },
      { label: "Service & Maintenance", to: "/services" },
    ],
  },
  {
    title: "Sectors",
    links: [
      { label: "Hospitality", to: "/projects" },
      { label: "Multi-Family", to: "/projects" },
      { label: "Aviation", to: "/projects" },
      { label: "Worship Spaces", to: "/projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Projects", to: "/projects" },
      { label: "Contact", to: "/contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 electric-line" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2">
            <Link to="/" className="inline-block" aria-label="Progressive Electrical Contractors">
              <Logo variant="dark" imgClassName="h-20 w-auto" glow={false} spark={false} />
            </Link>
            <p className="mt-5 text-primary-foreground/60 max-w-sm leading-relaxed text-sm">
              Houston's premier commercial electrical contractor. Three decades of design-build,
              lighting, and service excellence.
            </p>
            <div className="mt-8 space-y-1 text-sm">
              <a
                href="tel:7137722018"
                className="block font-display text-2xl font-bold text-brand-accent hover:underline"
              >
                (713) 772-2018
              </a>
              <a
                href="mailto:info@pelectric.com"
                className="text-primary-foreground/70 hover:text-brand-accent transition-colors"
              >
                info@pelectric.com
              </a>
              <p className="text-primary-foreground/50 pt-2">Houston, Texas</p>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-bold text-xs uppercase tracking-[0.22em] text-brand-accent mb-5">
                {c.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>
            © {new Date().getFullYear()} Progressive Electrical Contractors, Inc. — TECL #25896. All
            rights reserved.
          </p>
          <p className="uppercase tracking-[0.25em]">Total · Quality · Commitment</p>
        </div>
      </div>
    </footer>
  );
}
