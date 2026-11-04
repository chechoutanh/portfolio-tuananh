import { useEffect } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Achievements } from "@/pages/achievements";
import { DetailPage } from "@/pages/detail";
import { GroupList } from "@/pages/group-list";
import { Hobby } from "@/pages/hobby";
import { Home } from "@/pages/home";
import { Internship } from "@/pages/internship";
import { details, nav, site } from "@/content";
import { useReveal } from "@/hooks/use-reveal";
import { navGroup, useRoute } from "@/lib/route";

export default function App() {
  const route = useRoute();
  useReveal(route.hash);

  // Page title, and scroll position on navigation.
  useEffect(() => {
    const label =
      route.page === "detail"
        ? details.find((d) => d.slug === route.slug)?.title
        : nav.find((n) => n.id === route.page)?.label;
    document.title = label ? `${label} · ${site.short}` : `${site.short} Portfolio`;

    const target = route.page === "home" && route.hash ? document.getElementById(route.hash) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [route.hash, route.page, route.slug]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header active={navGroup(route)} />
      <main className="flex-grow">
        {route.page === "home" && <Home />}
        {route.page === "achievements" && <Achievements />}
        {route.page === "leadership" && <GroupList group="leadership" />}
        {route.page === "projects" && <GroupList group="projects" />}
        {route.page === "internship" && <Internship />}
        {route.page === "hobby" && <Hobby />}
        {route.page === "detail" && <DetailPage slug={route.slug} />}
      </main>
      <Footer />
    </div>
  );
}
