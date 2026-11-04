import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { nav, site } from "@/content";
import { cn } from "@/lib/utils";

export function Header({ active }: { active: string }) {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="container flex flex-wrap items-center justify-between gap-x-4 py-2 md:h-16 md:flex-nowrap md:py-0">
        <a
          href="#"
          className="flex items-baseline gap-2 text-headline-sm text-foreground transition-colors hover:text-primary focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {site.short}
          <span className="hidden font-mono text-xs font-normal text-muted-foreground sm:inline">{site.id}</span>
        </a>

        <nav
          aria-label="Sections"
          className="order-3 -mx-1 flex w-full gap-1 overflow-x-auto pb-1 text-sm font-medium md:order-none md:mx-0 md:w-auto md:gap-6 md:overflow-visible md:pb-0"
        >
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              aria-current={active === n.id ? "page" : undefined}
              className={cn(
                "whitespace-nowrap border-b-2 border-transparent px-2 py-2 text-muted-foreground transition-colors duration-150 md:px-0 md:py-1",
                "hover:text-primary focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                active === n.id && "border-primary text-primary"
              )}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <Button
          variant="outline"
          size="icon"
          onClick={toggle}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
      </div>
    </header>
  );
}
