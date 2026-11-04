import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const isExternal = (href: string) => /^https?:\/\//.test(href);

type Props = { href: string; children: ReactNode; className?: string; arrow?: boolean };

/** Internal "#page" links stay in the tab; everything else opens in a new tab. */
export function A({ href, children, className, arrow = true }: Props) {
  const ext = isExternal(href);
  return (
    <a
      href={href}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group/link inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-hover",
        "focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      {children}
      {ext && arrow && (
        <ArrowUpRight className="size-4 opacity-60 transition-all duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:opacity-100" />
      )}
    </a>
  );
}
