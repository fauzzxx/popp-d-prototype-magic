import { useState } from "react";
import { Flame, Instagram, Layers, MapPin, Phone, Sparkles, Car, X } from "lucide-react";
import { MENU } from "@/data/menu";
import { Reveal } from "./Reveal";

const WHY = [
  { icon: Layers, title: "Smashed", text: "Freshly smashed, crispy-edged goodness." },
  { icon: Flame, title: "Loaded", text: "Because normal toppings are boring." },
  { icon: Sparkles, title: "POPP'd", text: "Big flavours. Big cravings. Zero regrets." },
  { icon: Car, title: "Drive-in vibes", text: "Good food, good people, good energy." },
];

export function Marquee() {
  const text = "BURGERS • HOTDOGS • LOADED FRIES • SHAKES • BIG BITES • BIG FLAVOUR • ";
  return (
    <div className="grain overflow-hidden border-y border-border bg-pop py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap font-display text-2xl uppercase text-pop-foreground md:text-4xl">
        <span className="pr-4">{text.repeat(4)}</span>
        <span className="pr-4">{text.repeat(4)}</span>
      </div>
    </div>
  );
}

export function Why() {
  return (
    <section className="section-pad mx-auto max-w-7xl px-4 md:px-8">
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl md:text-6xl">
          Not your average <span className="text-flame">burger joint.</span>
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w, i) => (
          <Reveal key={w.title} delay={i * 70}>
            <div className="h-full rounded-3xl border border-border bg-card p-6 transition-colors hover:border-flame/60">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pop text-pop-foreground">
                <w.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Story() {
  const [open, setOpen] = useState(false);
  return (
    <section id="about" className="section-pad mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={MENU[0]!.image}
              alt="Smashed burger"
              loading="lazy"
              width={800}
              height={800}
              className="w-full -rotate-3 rounded-3xl object-cover shadow-xl"
            />
            <img
              src={MENU[3]!.image}
              alt="Loaded fries"
              loading="lazy"
              width={800}
              height={800}
              className="mt-8 w-full rotate-3 rounded-3xl object-cover shadow-xl"
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl md:text-6xl">
            We like our food <span className="text-pop">loud.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            POPP'd is all about big flavours, messy bites and food worth talking about.
          </p>
          <p className="mt-3 text-muted-foreground">
            From burgers and hotdogs to loaded sides and shakes, everything is made to bring a
            little more excitement to your next meal.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-7 rounded-full bg-flame px-7 py-3.5 font-display text-sm uppercase text-accent-foreground transition-transform hover:scale-105"
          >
            Our Story
          </button>
        </Reveal>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl border border-border bg-card p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl">This is not your average burger place.</h3>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              POPP'd started with one simple idea: make your tastebuds pop with every bite. Today
              you'll find us at The Hive Drive-In in Jubilee Hills, serving smashed burgers, loaded
              hotdogs and sides that refuse to be quiet.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Prototype copy — final brand story to be written with the POPP'd team.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export function Gram() {
  return (
    <section className="section-pad mx-auto max-w-7xl px-4 md:px-8">
      <Reveal>
        <h2 className="font-display text-4xl md:text-6xl">
          POPP'd on the <span className="text-pop">'gram</span>
        </h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        {MENU.map((m, i) => (
          <Reveal key={m.id} delay={i * 50}>
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 grid place-items-center bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-7 w-7 text-cream" />
              </span>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <a
          href="https://instagram.com/poppd.ind"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 font-display text-sm uppercase transition-colors hover:bg-pop hover:text-pop-foreground"
        >
          <Instagram className="h-4 w-4" /> Follow @poppd.ind
        </a>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Placeholder imagery — not official POPP'd photography.
      </p>
    </section>
  );
}

export function Location() {
  return (
    <section id="visit" className="section-pad mx-auto max-w-7xl px-4 md:px-8">
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-border bg-card p-8">
            <h2 className="font-display text-4xl md:text-6xl">
              Come get <span className="text-flame">POPP'd.</span>
            </h2>
            <div className="mt-6 space-y-1 text-lg">
              <p className="font-display">The Hive Drive-In</p>
              <p className="text-muted-foreground">Road No. 05, Jubilee Hills</p>
              <p className="text-muted-foreground">Hyderabad, Telangana</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=The+Hive+Drive-In+Jubilee+Hills+Hyderabad"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-pop px-6 py-3.5 font-display text-sm uppercase text-pop-foreground transition-transform hover:scale-105"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-display text-sm uppercase transition-colors hover:bg-secondary"
              >
                <Phone className="h-4 w-4" /> Call Us
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Phone number to be added by the POPP'd team.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="grain relative grid h-full min-h-64 place-items-center overflow-hidden rounded-3xl border border-border bg-secondary">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] [background-size:40px_40px]" />
            <div className="relative text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-flame text-accent-foreground">
                <MapPin className="h-7 w-7" />
              </span>
              <p className="mt-4 font-display text-xl">Jubilee Hills</p>
              <p className="text-sm text-muted-foreground">Road No. 05, Hyderabad</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="grain border-t border-border bg-ink">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-3xl">
            POPP<span className="text-pop">'d</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Burgers. Hotdogs. More.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {["Home", "Menu", "About", "Visit Us"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "")}`}
              className="text-muted-foreground hover:text-pop"
            >
              {l}
            </a>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="font-display text-foreground">The Hive Drive-In</p>
          <p>Road No. 05, Jubilee Hills</p>
          <p>Hyderabad</p>
          <a
            href="https://instagram.com/poppd.ind"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 hover:text-pop"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground md:px-8">
        © 2026 POPP'd · Prototype website
      </div>
    </footer>
  );
}
