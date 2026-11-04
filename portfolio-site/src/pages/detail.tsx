import { isExternal } from "@/components/ext-link";
import { Heading, StatGrid } from "@/components/blocks";
import { PhotoGrid } from "@/components/photo-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { details, groups } from "@/content";
import { pagerFor } from "@/lib/route";

export function DetailPage({ slug }: { slug: string }) {
  const d = details.find((x) => x.slug === slug);
  if (!d) return null;
  const g = groups[d.group];
  const pager = pagerFor(slug);

  return (
    <div className="container flex flex-col gap-12 py-12">
      <header className="reveal flex flex-col gap-4">
        <a
          href={`#${g.id}`}
          className="self-start text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          ← {g.backLabel}
        </a>
        <span className="font-mono text-xs font-medium text-primary">{d.role}</span>
        <h1 className="text-[clamp(2rem,4.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.025em]">
          {d.title}
        </h1>
        <p className="max-w-3xl text-lg leading-7 text-muted-foreground">{d.intro}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          {d.links.map((l, i) => (
            <Button key={l.href} asChild variant={i === 0 ? "default" : "secondary"}>
              <a
                href={l.href}
                {...(isExternal(l.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label}
                {isExternal(l.href) ? " ↗" : " →"}
              </a>
            </Button>
          ))}
        </div>
      </header>

      <PhotoGrid images={d.hero} grid="grid-cols-3" />

      <section className="grid items-start gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="reveal flex flex-col gap-5 p-6 md:p-8">
          <h2 className="text-headline-md">{d.bulletsTitle}</h2>
          <ul className="grid list-disc gap-3 pl-5 text-muted-foreground marker:text-primary">
            {d.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          {d.math && (
            <p className="rounded-md border-l-2 border-primary bg-background px-4 py-3 text-sm text-muted-foreground">
              <b className="mb-0.5 block text-label uppercase text-primary">{d.math.label}</b>
              {d.math.text}
            </p>
          )}
          {d.tags && (
            <div className="flex flex-wrap gap-1.5">
              {d.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          )}
        </Card>
        <div className="reveal" style={{ ["--reveal-delay" as string]: "100ms" }}>
          <StatGrid stats={d.stats} min="9.5rem" />
        </div>
      </section>

      <section>
        <PhotoGrid
          images={d.gallery.images}
          grid="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          title={<Heading title="Gallery" refText={d.gallery.caption} className="mb-2" />}
        />
      </section>

      {pager && (
        <nav aria-label="Page navigation" className="grid gap-4 border-t pt-8 sm:grid-cols-2">
          {[pager.prev, pager.next].map((p, i) => (
            <a
              key={i}
              href={p.href}
              className={
                "lift flex flex-col gap-0.5 rounded-lg border bg-card px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
                (i === 1 ? "sm:items-end sm:text-right" : "")
              }
            >
              <span className="font-mono text-xs text-muted-foreground">{p.kicker}</span>
              <b className="text-headline-sm">{p.label}</b>
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
