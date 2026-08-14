import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/mdc-logo.png.asset.json";
import { ParticleField } from "./ParticleField";
import { stats } from "@/data/portfolio";

const words = ["AUTOMATE.", "DOMINATE.", "ELEVATE."];

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const logoY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.72]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const gridRotate = useTransform(scrollYProgress, [0, 1], [68, 82]);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setTilt({
        x: (e.clientY / window.innerHeight - 0.5) * -16,
        y: (e.clientX / window.innerWidth - 0.5) * 22,
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,color-mix(in_oklab,var(--blood)_16%,transparent),transparent_60%)]" />
      <ParticleField />

      {/* 3D perspective grid floor */}
      <motion.div
        aria-hidden
        style={{ rotateX: gridRotate, opacity: fade }}
        className="pointer-events-none absolute inset-x-[-40%] bottom-[-10%] h-[70vh] origin-bottom grid-floor [mask-image:linear-gradient(to_top,black,transparent_75%)]"
      />

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto max-w-6xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotateX: 40 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: logoY, scale: logoScale, transformPerspective: 1200 }}
          className="scene mx-auto w-full max-w-3xl"
        >
          <div
            className="float-slow"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 300ms cubic-bezier(.2,.8,.2,1)",
            }}
          >
            <img
              src={logo.url}
              alt="MDC — Mastery Canvas Digital logo"
              className="mx-auto w-full mix-blend-screen"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-2 font-display text-2xl tracking-[0.35em] sm:text-4xl"
        >
          <span className="text-chrome">MASTERY </span>
          <span className="text-accent" style={{ textShadow: "0 0 26px rgba(57,255,20,.55)" }}>
            CANVAS
          </span>
          <span className="text-chrome"> DIGITAL</span>
        </motion.h1>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, rotateY: 90, x: -20 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ delay: 0.6 + i * 0.18, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`font-display text-sm tracking-[0.4em] sm:text-lg ${
                i === 1 ? "text-accent" : "text-[oklch(0.9_0_0)]"
              }`}
            >
              {w}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          I'm <span className="text-foreground font-semibold">Marcelo Danzel Cagas</span> — a
          GoHighLevel All-Rounder building agency setups, CRM automation, AI receptionists, funnels
          and websites end to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group relative overflow-hidden rounded-md bg-primary px-7 py-3 font-display text-xs tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-1 hover:glow-blood"
          >
            <span className="relative z-10">SEE THE WORK</span>
            <span className="absolute inset-0 -translate-x-full bg-accent/30 transition-transform duration-500 group-hover:translate-x-0" />
          </a>
          <a
            href="#contact"
            className="rounded-md border border-accent/60 px-7 py-3 font-display text-xs tracking-[0.2em] text-accent transition-all hover:-translate-y-1 hover:glow-volt"
          >
            BUILD MY SYSTEM
          </a>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35 + i * 0.1 }}
              className="rounded-lg border border-border bg-card/40 px-3 py-4 backdrop-blur"
            >
              <div className="font-display text-2xl text-accent">{s.value}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.35em] text-muted-foreground"
      >
        <div className="mx-auto mb-2 h-10 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
        SCROLL
      </motion.div>
    </section>
  );
}
