import icon from "@/assets/mdc-icon.png.asset.json";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center">
        <img
          src={icon.url}
          alt="Mastery Canvas Digital icon"
          className="h-12 w-12 rounded-lg object-cover"
        />
        <p className="font-display text-xs tracking-[0.35em] text-accent">
          YOUR GOHIGHLEVEL SPECIALIST
        </p>
        <p className="max-w-xl text-sm text-muted-foreground">
          Marcelo Danzel Cagas — Mastery Canvas Digital. Agency setup, CRM automation, AI systems,
          funnels and websites built to convert.
        </p>
        <p className="text-[11px] tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} MASTERY CANVAS DIGITAL
        </p>
      </div>
    </footer>
  );
}
