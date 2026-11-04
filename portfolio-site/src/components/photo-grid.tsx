import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Img } from "@/content";
import { cn } from "@/lib/utils";

type Props = {
  images: Img[];
  /** Optional heading rendered above the grid; hidden together with the grid if no image loads. */
  title?: ReactNode;
  /** Tailwind classes for the grid columns, e.g. "grid-cols-2 md:grid-cols-4". */
  grid?: string;
  /** Tailwind aspect class for each tile. */
  aspect?: string;
  className?: string;
};

/**
 * Responsive photo grid with a lightbox. A file that is missing or fails to load is hidden,
 * and if none of the images load the whole block (including its title) disappears, so the
 * site looks finished before every photo has been added.
 */
export function PhotoGrid({
  images,
  title,
  grid = "grid-cols-2 md:grid-cols-4",
  aspect = "aspect-[4/3]",
  className,
}: Props) {
  const [failed, setFailed] = useState<Record<string, true>>({});
  const [open, setOpen] = useState<number | null>(null);

  const visible = images.filter((i) => !failed[i.src]);
  const onFail = useCallback((src: string) => setFailed((f) => (f[src] ? f : { ...f, [src]: true })), []);

  if (images.length > 0 && visible.length === 0) return null;
  if (images.length === 0) return null;

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {title}
      <div className={cn("grid gap-3", grid)}>
        {visible.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpen(idx)}
            aria-label={`Enlarge photo: ${img.alt}`}
            className={cn(
              "group relative min-w-0 cursor-zoom-in overflow-hidden rounded-md border bg-card",
              "transition-[border-color,box-shadow] duration-200 hover:border-input",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              aspect
            )}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              onError={() => onFail(img.src)}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>
      {open !== null && (
        <Lightbox images={visible} index={Math.min(open, visible.length - 1)} setIndex={setOpen} />
      )}
    </div>
  );
}

function Lightbox({
  images,
  index,
  setIndex,
}: {
  images: Img[];
  index: number;
  setIndex: (i: number | null) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const single = images.length < 2;
  const go = useCallback(
    (d: number) => setIndex((index + d + images.length) % images.length),
    [index, images.length, setIndex]
  );

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      else if (!single && e.key === "ArrowLeft") go(-1);
      else if (!single && e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, setIndex, single]);

  const img = images[index];
  const btn =
    "absolute grid size-11 place-items-center rounded-md border bg-card text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[70] grid place-items-center bg-background/95 px-4 py-16 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIndex(null);
      }}
    >
      <figure className="m-0 grid max-w-[min(1100px,100%)] justify-items-center gap-3">
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[78vh] max-w-full rounded-md border object-contain shadow-lg"
        />
        <figcaption className="text-center font-mono text-xs text-muted-foreground">{img.alt}</figcaption>
      </figure>
      <button ref={closeRef} type="button" aria-label="Close" onClick={() => setIndex(null)} className={cn(btn, "right-4 top-4")}>
        <X className="size-5" />
      </button>
      {!single && (
        <>
          <button type="button" aria-label="Previous photo" onClick={() => go(-1)} className={cn(btn, "left-3 top-1/2 -translate-y-1/2")}>
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" aria-label="Next photo" onClick={() => go(1)} className={cn(btn, "right-3 top-1/2 -translate-y-1/2")}>
            <ChevronRight className="size-5" />
          </button>
        </>
      )}
    </div>
  );
}
