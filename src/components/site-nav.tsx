import { Link } from "@tanstack/react-router";
import * as React from "react";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark border-b border-brand-accent/15 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="absolute bottom-0 left-0 right-0 electric-line opacity-40 pointer-events-none" />
        <div
          className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-20" : "h-24"
          }`}
        >
          <Link to="/" className="flex items-center -ml-1" aria-label="Progressive Electrical Contractors">
            <Logo
              variant="dark"
              imgClassName={`${scrolled ? "h-14" : "h-16"} w-auto transition-all duration-500`}
              glow={false}
              spark={false}
              shine={false}
            />
          </Link>

          <div className="hidden md:flex items-center gap-1 font-medium text-[13px] uppercase tracking-[0.18em]">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-4 py-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
                activeProps={{ className: "text-brand-accent" }}
              >
                <span>{l.label}</span>
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-brand-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </Link>
            ))}
            <a
              href="tel:7137722018"
              className="btn-premium ml-4 bg-brand-accent text-primary px-5 py-3 font-bold text-xs tracking-[0.2em]"
            >
              (713) 772-2018
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-primary-foreground hover:text-brand-accent transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-graphite" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-brand-accent/15 blur-3xl pointer-events-none" />
        <div className="relative h-full flex flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            <Logo variant="dark" imgClassName="h-14 w-auto" glow={false} spark={false} shine={false} />
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-primary-foreground hover:text-brand-accent"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center gap-2">
            {links.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-5xl font-bold text-primary-foreground hover:text-brand-accent transition-colors uppercase tracking-tight"
                style={{
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.08}s`,
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="font-display text-5xl font-bold text-brand-accent hover:opacity-80 transition-opacity uppercase tracking-tight"
            >
              Contact
            </Link>
          </div>
          <a
            href="tel:7137722018"
            className="btn-premium bg-brand-accent text-primary px-6 py-5 font-bold text-sm tracking-[0.2em] text-center"
          >
            (713) 772-2018
          </a>
        </div>
      </div>
    </>
  );
}
