import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import type { Stat } from "@/content";
import { cn } from "@/lib/utils";

/** Section heading: small mono reference on the right, bottom rule. */
export function Heading({ title, refText, className }: { title: string; refText?: string; className?: string }) {
  return (
    <div className={cn("reveal mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b pb-3", className)}>
      <h2 className="text-headline-lg">{title}</h2>
      {refText && <span className="code-label font-mono text-xs text-muted-foreground">{refText}</span>}
    </div>
  );
}

/** Page opener used by every inner page. */
export function PageIntro({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <header className="reveal flex flex-col gap-4 pb-2">
      <span className="code-label font-mono text-label uppercase text-muted-foreground">{kicker}</span>
      <h1 className="text-[clamp(2rem,4.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.025em]">{title}</h1>
      <p className="max-w-3xl text-lg leading-7 text-muted-foreground">{intro}</p>
      {children}
    </header>
  );
}

/** A row of figures. Content flows into as many columns as fit. */
export function StatGrid({ stats, min = "9.5rem", className }: { stats: Stat[]; min?: string; className?: string }) {
  return (
    <div
      className={cn("grid gap-3", className)}
      style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${min}, 1fr))` }}
    >
      {stats.map((s, i) => (
        <Card
          key={i}
          className="lift flex min-w-0 flex-col gap-1 p-4"
        >
          <span className="break-words text-[1.75rem] font-bold leading-8 tracking-[-0.02em] text-primary tabular-nums">
            {s.value}
          </span>
          <span className="text-sm font-medium leading-5">{s.label}</span>
          {s.note && <span className="text-xs leading-4 text-muted-foreground">{s.note}</span>}
        </Card>
      ))}
    </div>
  );
}
