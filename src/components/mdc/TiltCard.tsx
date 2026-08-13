import { useRef, useState, type ReactNode } from "react";

export function TiltCard({
  children,
  className = "",
  max = 12,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50, active: false });

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({
      rx: (0.5 - py) * max * 2,
      ry: (px - 0.5) * max * 2,
      gx: px * 100,
      gy: py * 100,
      active: true,
    });
  };

  const reset = () => setT((s) => ({ ...s, rx: 0, ry: 0, active: false }));

  return (
    <div className="scene">
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg) translateZ(0) scale(${t.active ? 1.02 : 1})`,
          transition: t.active ? "transform 80ms linear" : "transform 500ms cubic-bezier(.2,.8,.2,1)",
        }}
        className={`group relative overflow-hidden rounded-xl card-3d ${className}`}
      >
        {glare && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(420px circle at ${t.gx}% ${t.gy}%, color-mix(in oklab, var(--volt) 18%, transparent), transparent 60%)`,
            }}
          />
        )}
        <div className="relative" style={{ transform: "translateZ(40px)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
