import {
  Building2,
  Workflow,
  Bot,
  GitBranch,
  Rocket,
  Code2,
  Globe,
  GraduationCap,
  Repeat,
  Plug,
  Phone,
  Star,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/portfolio";
import { TiltCard } from "./TiltCard";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

const icons: Record<string, LucideIcon> = {
  Building2,
  Workflow,
  Bot,
  GitBranch,
  Rocket,
  Code2,
  Globe,
  GraduationCap,
  Repeat,
  Plug,
  Phone,
  Star,
};

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-28">
      <SectionTitle
        kicker="CAPABILITIES"
        title="Everything GoHighLevel"
        sub="One specialist. One system. From setup to automation to optimization."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon] ?? Rocket;
          return (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <TiltCard className="h-full p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-accent/30 bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-base tracking-wide text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
