import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Visit Us", href: "#visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 md:px-8">
        <div className="flex min-w-0 items-center gap-8">
          <a
            href="#home"
            className={`font-display leading-none tracking-tight transition-all ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
          >
            POPP<span className="text-pop">'d</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-pop"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-foreground transition-colors hover:bg-secondary/70"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-flame px-1 text-[11px] font-bold text-accent-foreground">
                {count}
              </span>
            )}
          </button>
          <a
            href="#menu"
            className="rounded-full bg-pop px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-pop-foreground transition-transform hover:scale-105 md:px-6 md:text-sm"
          >
            Order Now
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mt-2 flex flex-col gap-1 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-display text-lg uppercase hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
