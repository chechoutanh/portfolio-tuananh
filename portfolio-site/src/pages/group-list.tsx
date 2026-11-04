import { A, isExternal } from "@/components/ext-link";
import { PageIntro, StatGrid } from "@/components/blocks";
import { PhotoGrid } from "@/components/photo-grid";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { details, groups } from "@/content";

/** List page for Leadership and for Projects: one card per detail page. */
export function GroupList({ group }: { group: "leadership" | "projects" }) {
  const g = groups[group];
  const items = (g.order as readonly string[])
    .map((slug) => details.find((d) => d.slug === slug))
    .filter((d): d is NonNullable<typeof d> => !!d);

  return (
    <div className="container flex flex-col gap-10 py-14">
      <PageIntro kicker={g.kicker} title={g.title} intro={g.intro}>
        <PhotoGrid images={[...g.hero]} grid="grid-cols-3" className="mt-4" />
      </PageIntro>

      <div className="flex flex-col gap-6">
        {items.map((d) => (
          <Card key={d.slug} className="reveal lift flex flex-col gap-5 p-6 md:p-8">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs font-medium text-primary">{d.role}</span>
              <h2 className="text-headline-md">
                <a
                  href={`#${d.slug}`}
                  className="transition-colors hover:text-primary focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {d.title}
                </a>
              </h2>
              {d.card.subtitle && <p className="text-sm text-muted-foreground">{d.card.subtitle}</p>}
            </div>

            <ul className="grid max-w-3xl list-disc gap-2 pl-5 text-muted-foreground marker:text-primary">
              {(d.card.bullets ?? d.bullets).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            {d.tags && (
              <div className="flex flex-wrap gap-1.5">
                {d.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            )}

            <PhotoGrid images={d.card.shots} grid="grid-cols-2 md:grid-cols-4" />
            <StatGrid stats={d.card.stats} min="11rem" />

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-4">
              <a
                href={`#${d.slug}`}
                className="text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                Open page →
              </a>
              {d.links
                .filter((l) => isExternal(l.href))
                .map((l) => (
                  <A key={l.href} href={l.href}>
                    {l.label}
                  </A>
                ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
