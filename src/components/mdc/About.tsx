import { motion } from "motion/react";
import portrait from "@/assets/marcelo-portrait.jpg.asset.json";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <motion.div
            whileHover={{ rotateY: -8, rotateX: 6 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            style={{ transformPerspective: 1000 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-3 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--blood)_45%,transparent),transparent_65%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-card/40">
              <img
                src={portrait.url}
                alt="Marcelo Danzel Cagas, GoHighLevel specialist"
                className="w-full object-cover"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-display text-sm tracking-[0.28em] text-chrome">
                  MARCELO DANZEL CAGAS
                </p>
                <p className="text-[11px] tracking-[0.25em] text-accent">GOHIGHLEVEL ALL-ROUNDER</p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-4 w-1 bg-accent" />
            <span className="font-display text-[11px] tracking-[0.4em] text-accent">
              THE OPERATOR
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl">
            <span className="text-chrome">BEHIND THE SYSTEMS</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            I build complete GoHighLevel ecosystems — agency setup, CRM automation, AI receptionists,
            funnels and websites — engineered end to end so every lead is captured, nurtured and
            converted without you touching a thing.
          </p>
          <p className="mt-4 text-muted-foreground">
            From snapshot architecture to multi-channel follow-up, everything is built to run on
            autopilot and scale with your business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-primary px-6 py-3 font-display text-xs tracking-[0.2em] text-primary-foreground transition-all hover:-translate-y-1 hover:glow-blood"
            >
              WORK WITH ME
            </a>
            <a
              href="#work"
              className="rounded-md border border-accent/60 px-6 py-3 font-display text-xs tracking-[0.2em] text-accent transition-all hover:-translate-y-1 hover:glow-volt"
            >
              VIEW PROJECTS
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
