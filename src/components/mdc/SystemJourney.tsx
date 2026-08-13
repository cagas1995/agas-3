import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { journey } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function SystemJourney() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const line = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section id="system" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 grid-floor opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionTitle
          kicker="THE SYSTEM"
          title="Visitor → Customer, Automated"
          sub="I don't build isolated workflows. I build the machine around the whole customer journey."
        />

        <div ref={ref} className="relative mt-16 scene">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          <motion.div
            style={{ height: line }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:left-1/2"
          />

          <div className="space-y-10">
            {journey.map((j, i) => (
              <motion.div
                key={j.step}
                initial={{ opacity: 0, x: i % 2 ? 60 : -60, rotateY: i % 2 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 1000 }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 ? "md:ml-auto md:pl-14" : "md:pr-14 md:text-right"
                }`}
              >
                <span
                  className={`absolute left-[9px] top-4 h-3 w-3 rotate-45 border border-accent bg-background md:left-auto ${
                    i % 2 ? "md:-left-1.5" : "md:-right-1.5"
                  }`}
                />
                <div className="rounded-xl card-3d p-5">
                  <div className="font-display text-xs tracking-[0.3em] text-accent">
                    0{i + 1} — {j.step.toUpperCase()}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{j.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
