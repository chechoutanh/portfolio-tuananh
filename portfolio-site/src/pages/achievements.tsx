import { A } from "@/components/ext-link";
import { Heading, PageIntro } from "@/components/blocks";
import { PhotoGrid } from "@/components/photo-grid";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { achievements as a } from "@/content";

export function Achievements() {
  return (
    <div className="container flex flex-col gap-14 py-14">
      <PageIntro kicker={a.kicker} title={a.title} intro={a.intro}>
        <PhotoGrid images={a.hero} grid="grid-cols-3" className="mt-4" />
      </PageIntro>

      <section>
        <Heading title={a.awardsTitle} />
        <Card className="reveal overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b">
                {["Award", "Competition", "Level", "Year", "Proof"].map((h) => (
                  <th key={h} className="px-4 py-3 text-label font-medium uppercase text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {a.awards.map((r, i) => (
                <tr key={i} className="border-b transition-colors last:border-b-0 hover:bg-background">
                  <td className="whitespace-nowrap px-4 py-3 text-xl font-bold text-primary">{r.rank}</td>
                  <td className="px-4 py-3">
                    {r.name}
                    {r.note && <span className="block text-xs text-muted-foreground">{r.note}</span>}
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="accent" className="whitespace-nowrap">
                      {r.level}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs tabular-nums">{r.year}</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <A href={r.href}>View</A>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </section>

      <section>
        <PhotoGrid
          images={a.certs}
          grid="grid-cols-2 md:grid-cols-3"
          title={<Heading title={a.certsTitle} refText={a.certsRef} className="mb-2" />}
        />
      </section>
    </div>
  );
}
