import { useCountUp } from "@/hooks/use-reveal";

export function Counter({
  to,
  suffix = "",
  prefix = "",
  label,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const { ref, value } = useCountUp(to);
  return (
    <div className="border-l-2 border-brand-accent pl-5 py-2">
      <div className="text-4xl md:text-5xl font-display font-bold tabular-nums">
        <span ref={ref}>
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-2">
        {label}
      </div>
    </div>
  );
}
