import { useEffect, useRef } from "react";

/**
 * A real 3D perspective-projected particle field rendered on canvas.
 * Reacts to pointer position and scroll velocity.
 */
export function ParticleField({ density = 140 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; z: number; c: string; r: number };
    const palette = ["#39FF14", "#FF1E1E", "#C0C0C0"];
    let points: P[] = [];

    const spawn = () => {
      points = Array.from({ length: density }, () => ({
        x: (Math.random() - 0.5) * 1600,
        y: (Math.random() - 0.5) * 1000,
        z: Math.random() * 1400 + 40,
        c: palette[Math.floor(Math.random() * palette.length)] as string,
        r: Math.random() * 1.8 + 0.5,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;
    const onMove = (e: PointerEvent) => {
      tmx = (e.clientX / window.innerWidth - 0.5) * 2;
      tmy = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    let lastScroll = window.scrollY;
    let boost = 0;
    const onScroll = () => {
      boost += Math.min(Math.abs(window.scrollY - lastScroll) * 0.35, 26);
      lastScroll = window.scrollY;
    };

    resize();
    spawn();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    const fov = 620;
    const draw = () => {
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      boost *= 0.92;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;

      for (const p of points) {
        p.z -= 1.4 + boost * 0.12;
        if (p.z < 30) {
          p.z = 1500;
          p.x = (Math.random() - 0.5) * 1600;
          p.y = (Math.random() - 0.5) * 1000;
        }
        const k = fov / p.z;
        const sx = cx + (p.x - mx * 220) * k;
        const sy = cy + (p.y - my * 160) * k;
        if (sx < -60 || sx > w + 60 || sy < -60 || sy > h + 60) continue;
        const size = Math.max(p.r * k, 0.3);
        const alpha = Math.min(1, (1500 - p.z) / 1200) * 0.85;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.c;
        ctx.shadowBlur = 12 * k;
        ctx.shadowColor = p.c;
        ctx.beginPath();
        ctx.arc(sx, sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };

    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [density]);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" />;
}
