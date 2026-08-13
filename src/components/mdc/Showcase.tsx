import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, Image as ImageIcon, X, Plus } from "lucide-react";
import { showcase, type ShowcaseItem } from "@/data/portfolio";
import { TiltCard } from "./TiltCard";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

function loomEmbed(url: string) {
  const id = url.split("/share/")[1]?.split(/[?#]/)[0];
  return id ? `https://www.loom.com/embed/${id}` : url;
}

export function Showcase({ full = false }: { full?: boolean }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(showcase.map((s) => s.category)))],
    [],
  );
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState<ShowcaseItem | null>(null);

  const items = showcase.filter((s) => active === "All" || s.category === active);

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-5 py-28">
      <SectionTitle
        kicker="PROOF"
        title="Loom Walkthroughs & Builds"
        sub="Recordings, screenshots and live builds from real GoHighLevel systems."
      />

      <Reveal className="mt-10">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-4 py-1.5 font-display text-[11px] tracking-[0.2em] transition-all ${
                active === c
                  ? "border-accent bg-accent/15 text-accent glow-volt"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard max={9} className="h-full">
                <button onClick={() => setOpen(item)} className="block w-full text-left">
                  <div className="relative aspect-video overflow-hidden bg-carbon">
                    {item.kind === "image" ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_50%_50%,color-mix(in_oklab,var(--blood)_25%,transparent),transparent_70%)]">
                        <span className="relative grid h-16 w-16 place-items-center rounded-full border border-accent/50 bg-background/60">
                          <Play className="h-6 w-6 translate-x-0.5 text-accent" />
                          <span className="pulse-ring absolute inset-0 rounded-full border border-accent/50" />
                        </span>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur">
                      {item.kind === "loom" ? (
                        <Play className="h-3 w-3 text-primary" />
                      ) : (
                        <ImageIcon className="h-3 w-3 text-accent" />
                      )}
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-sm tracking-wide">{item.title}</h3>
                    {item.description && (
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>

        {!full && (
          <Reveal delay={0.1}>
            <div className="flex h-full min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed border-border/80 p-8 text-center">
              <Plus className="h-8 w-8 text-accent" />
              <p className="mt-3 font-display text-xs tracking-[0.2em] text-muted-foreground">
                MORE BUILDS COMING
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                New Loom recordings and screenshots are added here as projects ship.
              </p>
            </div>
          </Reveal>
        )}
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-background/90 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, rotateX: -8 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-xl card-3d"
            >
              <button
                onClick={() => setOpen(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 rounded-md border border-border bg-background/80 p-2 hover:border-accent"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="aspect-video w-full bg-carbon">
                {open.kind === "loom" ? (
                  <iframe
                    src={loomEmbed(open.url)}
                    title={open.title}
                    allowFullScreen
                    className="h-full w-full"
                  />
                ) : (
                  <img src={open.url} alt={open.title} className="h-full w-full object-contain" />
                )}
              </div>
              <div className="p-5">
                <h3 className="font-display text-base">{open.title}</h3>
                {open.description && (
                  <p className="mt-2 text-sm text-muted-foreground">{open.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
