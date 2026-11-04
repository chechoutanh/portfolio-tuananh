import { A } from "@/components/ext-link";
import { Heading, PageIntro } from "@/components/blocks";
import { PhotoGrid } from "@/components/photo-grid";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { hobby as h } from "@/content";

export function Hobby() {
  return (
    <div className="container flex flex-col gap-14 py-14">
      <PageIntro kicker={h.kicker} title={h.title} intro={h.intro}>
        <PhotoGrid images={h.hero} grid="grid-cols-3" className="mt-4" />
      </PageIntro>

      <section>
        <Heading title={h.skillsTitle} />
        <div className="grid gap-4 md:grid-cols-3">
          {h.skills.map((s, i) => (
            <Card
              key={s.title}
              className="reveal lift flex flex-col gap-4 p-6"
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <h3 className="text-headline-sm">{s.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((t) => (
                  <Badge key={t} variant="accent">
                    {t}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <Heading title={h.volunteerTitle} />
        <div className="grid gap-4">
          {h.volunteer.map((v) => (
            <Card key={v.title} className="reveal lift flex flex-col gap-4 p-5 md:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="min-w-0 text-headline-sm">{v.title}</h3>
                <span className="font-mono text-xs text-primary">{v.when}</span>
              </div>
              <PhotoGrid images={v.shots} grid="grid-cols-2 md:grid-cols-4" />
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {v.links.map((l) => (
                  <A key={l.href} href={l.href}>
                    {l.label}
                  </A>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <PhotoGrid
          images={h.off}
          grid="grid-cols-2"
          title={<Heading title={h.offTitle} refText={h.offRef} className="mb-2" />}
        />
      </section>
    </div>
  );
}
