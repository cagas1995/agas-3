import { Mail, MessageSquare, CalendarCheck, ArrowRight } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { SectionTitle } from "./SectionTitle";
import { Reveal } from "./Reveal";

const options = [
  {
    icon: Mail,
    title: "Email Me",
    detail: "Send the scope, get a build plan back.",
    action: "mailto:hello@masterycanvasdigital.com",
    label: "hello@masterycanvasdigital.com",
  },
  {
    icon: CalendarCheck,
    title: "Book a Call",
    detail: "15 minutes to map your GoHighLevel system.",
    action: "#contact",
    label: "Schedule a discovery call",
  },
  {
    icon: MessageSquare,
    title: "Quick Question",
    detail: "One workflow broken? Ask, I'll diagnose it.",
    action: "#contact",
    label: "Message me",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,color-mix(in_oklab,var(--volt)_12%,transparent),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionTitle
          kicker="LET'S BUILD"
          title="Need GoHighLevel Handled End-to-End?"
          sub="One workflow, one funnel, an AI receptionist, or the entire agency configured from scratch."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {options.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.08}>
              <a href={o.action} className="block">
                <TiltCard className="h-full p-6">
                  <o.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 font-display text-sm tracking-wide">{o.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.detail}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
                    {o.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </TiltCard>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <p className="font-display text-lg tracking-[0.25em] text-chrome sm:text-2xl">
            SETUP <span className="text-accent">|</span> AUTOMATE{" "}
            <span className="text-accent">|</span> OPTIMIZE <span className="text-accent">|</span>{" "}
            SCALE
          </p>
        </Reveal>
      </div>
    </section>
  );
}
