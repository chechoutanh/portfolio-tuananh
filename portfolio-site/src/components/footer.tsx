import { A } from "@/components/ext-link";
import { site } from "@/content";

export function Footer() {
  const cells = [
    { k: "Name", v: site.name, wide: true },
    { k: "Intended majors", v: site.majors },
    { k: "Based in", v: site.location },
    { k: "Class of", v: site.classOf },
  ];
  return (
    <footer id="contact" className="border-t bg-card">
      <div className="container flex flex-col gap-6 py-12">
        <div className="grid grid-cols-2 overflow-hidden rounded-lg border bg-background md:grid-cols-[2fr_1fr_1fr_1fr]">
          {cells.map((c) => (
            <div
              key={c.k}
              className={
                "min-w-0 border-b p-4 md:border-b-0 md:border-r md:last:border-r-0 " +
                (c.wide ? "col-span-2 md:col-span-1" : "")
              }
            >
              <span className="text-label uppercase text-muted-foreground">{c.k}</span>
              <div className="mt-1 break-words text-sm font-semibold">{c.v}</div>
            </div>
          ))}
          <div className="col-span-2 min-w-0 border-t p-4 md:col-span-4">
            <span className="text-label uppercase text-muted-foreground">Email</span>
            <div className="mt-1 break-all font-mono text-sm">
              <a
                href={`mailto:${site.email}`}
                className="select-all text-primary hover:text-primary-hover hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-xl text-sm text-muted-foreground">{site.closing}</p>
          <div className="flex gap-5">
            <A href={site.github}>GitHub</A>
            <A href={site.facebook}>Facebook</A>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
