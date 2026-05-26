import { cn } from "@/lib/utils";

type Variant = "dark" | "light";

interface LogoProps {
  variant?: Variant;
  className?: string;
  imgClassName?: string;
  glow?: boolean;
  spark?: boolean;
  withSparks?: boolean;
  shine?: boolean;
}

export function Logo({
  variant = "dark",
  className,
  imgClassName,
  glow = true,
  spark = true,
  withSparks = false,
  shine = true,
}: LogoProps) {
  const src = "/logo.png"; // Changed to use the logo from the public directory
  return (
    <span className={cn("relative inline-flex items-center", className)}>
      {glow && (
        <span
          aria-hidden
          className="absolute inset-0 rounded-full blur-2xl opacity-50 pointer-events-none"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--brand-accent) 55%, transparent), transparent 70%)",
          }}
        />
      )}
      <img
        src={src}
        alt="Progressive Electrical Contractors"
        className={cn("relative object-contain select-none", shine && "logo-shine", imgClassName)}
        draggable={false}
      />
      {spark && (
        <span
          aria-hidden
          className="absolute -top-0.5 left-[18%] w-[3px] h-[3px] rounded-full bg-brand-accent animate-spark pointer-events-none"
          style={{
            boxShadow: "0 0 6px 1px color-mix(in oklab, var(--brand-accent) 55%, transparent)",
            animationDelay: "0.4s",
          }}
        />
      )}
      {withSparks && (
        <>
          <span aria-hidden className="absolute top-1/2 left-[8%] w-0.5 h-0.5 rounded-full bg-brand-accent/80 animate-spark pointer-events-none" style={{ animationDelay: "1.6s", animationDuration: "5s" }} />
          <span aria-hidden className="absolute bottom-2 left-[14%] w-[3px] h-[3px] rounded-full bg-brand-accent/70 animate-spark pointer-events-none" style={{ animationDelay: "2.8s", animationDuration: "4.8s" }} />
        </>
      )}
    </span>
  );
}
