import icon from "@/assets/mdc-icon-clear.png.asset.json";

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center">
        <img
          src={icon.url}
          alt="Marcelo Danzel Cagas icon"
          className="h-12 w-12 object-contain"
        />
        <p className="font-display text-xs tracking-[0.35em] text-accent">
          YOUR GOHIGHLEVEL SPECIALIST
        </p>
        <p className="max-w-xl text-sm text-muted-foreground">
          Marcelo Danzel Cagas. Agency setup, CRM automation, AI systems,
          funnels and websites built to convert.
        </p>
        <p className="text-[11px] tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} MARCELO DANZEL CAGAS
        </p>
      </div>
    </footer>
  );
}
