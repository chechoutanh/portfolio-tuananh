import { useEffect, useState } from "react";
import { details, groups } from "@/content";

const staticPages = ["achievements", "leadership", "projects", "internship", "hobby"] as const;

export type PageId = "home" | (typeof staticPages)[number] | "detail";

export type Route = {
  hash: string;
  page: PageId;
  slug: string;
};

function readHash() {
  try {
    return decodeURIComponent(window.location.hash.replace(/^#\/?/, ""));
  } catch {
    return "";
  }
}

export function resolve(hash: string): Route {
  if ((staticPages as readonly string[]).includes(hash)) {
    return { hash, page: hash as PageId, slug: hash };
  }
  if (details.some((d) => d.slug === hash)) {
    return { hash, page: "detail", slug: hash };
  }
  return { hash, page: "home", slug: "home" };
}

export function useRoute(): Route {
  const [hash, setHash] = useState(readHash);
  useEffect(() => {
    const on = () => setHash(readHash());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return resolve(hash);
}

/** Which top-nav item should be highlighted for this route. */
export function navGroup(route: Route): string {
  if (route.page === "detail") {
    return details.find((d) => d.slug === route.slug)?.group ?? "";
  }
  return route.page === "home" ? "" : route.page;
}

/** Previous / next links for a detail page, within its group. */
export function pagerFor(slug: string) {
  const d = details.find((x) => x.slug === slug);
  if (!d) return null;
  const g = groups[d.group];
  const order = g.order as readonly string[];
  const i = order.indexOf(slug);
  const title = (s: string) => details.find((x) => x.slug === s)?.title ?? s;
  const back = { href: `#${g.id}`, label: g.backLabel };
  const prev = i > 0 ? { href: `#${order[i - 1]}`, label: title(order[i - 1]), kicker: "← Previous" } : { ...back, kicker: "← Back to" };
  const next = i < order.length - 1 ? { href: `#${order[i + 1]}`, label: title(order[i + 1]), kicker: "Next →" } : { ...back, kicker: "Back to →" };
  return { prev, next };
}
