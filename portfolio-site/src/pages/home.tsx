import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Heading, StatGrid } from "@/components/blocks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { home, site } from "@/content";

function Portrait() {
  const [failed, setFailed] = useState(false);
  return (
    <div className="reveal relative" style={{ ["--reveal-delay" as string]: "120ms" }}>
      {/* Corner brackets framing the photo */}
      <span aria-hidden className="pointer-events-none absolute -left-1.5 -top-1.5 z-10 size-7 border-l-2 border-t-2 border-primary" />
      <span aria-hidden className="pointer-events-none absolute -bottom-1.5 -right-1.5 z-10 size-7 border-b-2 border-r-2 border-input" />
      <Card className="overflow-hidden" aria-label="Portrait">
        <div className="relative aspect-[4/5] bg-background">
          {failed ? (
            <div className="grid size-full place-items-center text-6xl font-semibold tracking-tight text-primary/60">
              TA
            </div>
          ) : (
            <img
              src={home.portrait.src}
              alt={home.portrait.alt}
              onError={() => setFailed(true)}
              className="absolute inset-0 size-full object-cover object-[50%_30%]"
            />
          )}
        </div>
        <div className="flex items-center justify-between gap-3 border-t px-4 py-3">
          <span className="text-sm font-medium">{site.name}</span>
          <span className="font-mono text-xs text-primary">{site.id}</span>
        </div>
      </Card>
    </div>
  );
}

export function Home() {
  return (
    <>
      <section className="border-b pb-12 pt-14 md:pt-16">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="reveal flex min-w-0 flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start rounded-md border bg-card px-3 py-1">
              <span className="size-2 rounded-full bg-primary" />
              <span className="font-mono text-label uppercase text-muted-foreground">{home.tag}</span>
            </div>
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              {home.title}
            </h1>
            <p className="max-w-xl text-lg leading-7 text-muted-foreground">{home.lede}</p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button asChild size="lg" className="group">
                <a href="#journey">
                  My Journey
                  <ArrowDown className="transition-transform duration-200 group-hover:translate-y-0.5" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub <ArrowUpRight />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={site.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook <ArrowUpRight />
                </a>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <Portrait />
          </div>
        </div>
      </section>

      <section className="border-b py-14" id="education">
        <div className="container">
          <Heading title={home.education.title} />
          <div className="grid gap-4 md:grid-cols-2">
            {home.education.items.map((e, i) => (
              <Card
                key={e.school}
                className="reveal lift flex items-center gap-5 p-5"
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <EduLogo src={e.logo.src} alt={e.logo.alt} />
                <div className="min-w-0">
                  <h3 className="text-headline-sm">{e.school}</h3>
                  <p className="mt-0.5 font-mono text-xs text-primary">{e.years}</p>
                  <dl className="mt-3 grid grid-cols-[max-content_1fr] gap-x-4 gap-y-1 text-sm">
                    <dt className="text-muted-foreground">Major</dt>
                    <dd className="min-w-0 break-words">{e.major}</dd>
                    <dt className="text-muted-foreground">City</dt>
                    <dd className="min-w-0 break-words">{e.city}</dd>
                  </dl>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b py-14" id="journey">
        <div className="container">
          <Heading title={home.journey.title} refText={home.journey.ref} />
          <div className="grid gap-4 sm:grid-cols-3">
            {home.journey.items.map((s, i) => (
              <Card
                key={i}
                className="reveal lift p-6"
                style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              >
                <span className="text-label uppercase text-muted-foreground">{s.label}</span>
                <div className="mt-2 text-[3.5rem] font-bold leading-none tracking-[-0.03em] text-primary tabular-nums">
                  {s.value}
                  <small className="ml-1 text-xl font-medium text-muted-foreground">{s.note}</small>
                </div>
              </Card>
            ))}
          </div>

          <Heading title={home.scores.title} className="mt-14" />
          <div className="reveal">
            <StatGrid stats={home.scores.items} min="11rem" />
          </div>
          <div className="reveal mt-4 grid gap-3 md:grid-cols-2">
            {home.scores.courses.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lift group flex min-w-0 flex-col gap-0.5 rounded-lg border bg-card px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <b className="flex items-center justify-between gap-2 text-sm font-semibold">
                  {c.title}
                  <ArrowUpRight className="size-4 shrink-0 text-primary opacity-60 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </b>
                <span className="font-mono text-xs text-muted-foreground">{c.note}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <Heading title={home.explore.title} refText={home.explore.ref} />
          <div className="grid gap-4 md:grid-cols-2">
            {home.explore.items.map((x, i) => (
              <a
                key={x.title}
                href={x.href}
                className="reveal lift group flex min-w-0 gap-5 rounded-lg border bg-card p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              >
                <div className="w-28 shrink-0">
                  <div className="text-3xl font-bold leading-8 tracking-[-0.02em] text-primary tabular-nums">
                    {x.value}
                  </div>
                  <div className="mt-1 text-xs leading-4 text-muted-foreground">{x.valueLabel}</div>
                </div>
                <div className="min-w-0">
                  <h3 className="flex items-center justify-between gap-2 text-headline-sm">
                    {x.title}
                    <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-1 text-sm leading-[1.375rem] text-muted-foreground">{x.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function EduLogo({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      width={72}
      height={72}
      onError={() => setFailed(true)}
      className="size-[4.5rem] shrink-0 rounded-full border bg-white object-cover"
    />
  );
}
