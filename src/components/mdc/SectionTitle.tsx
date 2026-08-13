import { Reveal } from "./Reveal";

export function SectionTitle({
  kicker,
  title,
  sub,
  align = "center",
}: {
  kicker: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div
        className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-4 w-1 bg-accent" />
        <span className="font-display text-[11px] tracking-[0.4em] text-accent">{kicker}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl sm:text-5xl">
        <span className="text-chrome">{title}</span>
      </h2>
      {sub && (
        <p
          className={`mt-4 max-w-2xl text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
