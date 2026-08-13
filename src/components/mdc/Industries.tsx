import { industries, skillStack } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="marquee-track flex w-max gap-3"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="whitespace-nowrap rounded-full border border-border bg-card/50 px-4 py-2 font-display text-[11px] tracking-[0.18em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {t.toUpperCase()}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Industries() {
  return (
    <section id="industries" className="relative mx-auto max-w-7xl px-5 py-28">
      <SectionTitle
        kicker="COVERAGE"
        title="Industries & Skill Stack"
        sub="Adapted for local service businesses, clinics, agencies and SaaS teams."
      />
      <Reveal className="mt-12 space-y-3">
        <Marquee items={industries} />
        <Marquee items={skillStack} reverse />
        <Marquee items={industries.slice().reverse()} />
      </Reveal>
    </section>
  );
}
