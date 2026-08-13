import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import icon from "@/assets/mdc-icon.png.asset.json";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#system", label: "System" },
  { href: "/#industries", label: "Industries" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={icon.url}
            alt="Mastery Canvas Digital logo"
            className="h-10 w-10 rounded-lg object-cover transition-transform duration-500 hover:rotate-12"
          />
          <span className="hidden font-display text-sm tracking-[0.25em] sm:block">
            <span className="text-chrome">MASTERY </span>
            <span className="text-accent">CANVAS</span>
            <span className="text-chrome"> DIGITAL</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-display text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-md bg-primary px-4 py-2 font-display text-xs tracking-[0.18em] text-primary-foreground transition-all hover:glow-blood hover:-translate-y-0.5"
          >
            HIRE ME
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden rounded-md border border-border p-2"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-accent transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-5 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-display text-sm tracking-[0.2em] text-muted-foreground"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
