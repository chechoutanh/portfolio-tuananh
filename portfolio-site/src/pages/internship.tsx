import { A } from "@/components/ext-link";
import { PageIntro } from "@/components/blocks";
import { PhotoGrid } from "@/components/photo-grid";
import { Card } from "@/components/ui/card";
import { internship as n } from "@/content";

export function Internship() {
  return (
    <div className="container flex flex-col gap-10 py-14">
      <PageIntro kicker={n.kicker} title={n.title} intro={n.intro}>
        <PhotoGrid images={n.hero} grid="grid-cols-3" className="mt-4" />
      </PageIntro>

      <ol className="m-0 ml-1.5 grid list-none border-l-2 p-0">
        {n.items.map((it, i) => (
          <li key={i} className="reveal relative pb-8 pl-7 last:pb-0">
            <span className="absolute -left-[7px] top-2 size-3 rotate-45 bg-primary" aria-hidden="true" />
            <Card className="lift flex flex-col gap-4 p-6 md:p-8">
              <div>
                <span className="font-mono text-xs font-medium text-primary">{it.when}</span>
                <h2 className="mt-1 text-headline-md">{it.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{it.org}</p>
              </div>
              {it.bullets.length > 0 && (
                <ul className="grid max-w-3xl list-disc gap-2 pl-5 text-muted-foreground marker:text-primary">
                  {it.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
              <PhotoGrid images={it.shots} grid="grid-cols-2 md:grid-cols-4" />
              <div className="flex flex-wrap gap-x-5 gap-y-2 border-t pt-4">
                {it.links.map((l) => (
                  <A key={l.href} href={l.href}>
                    {l.label}
                  </A>
                ))}
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}
