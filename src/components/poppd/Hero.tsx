import { MapPin } from "lucide-react";
import hero from "@/assets/hero-burger.jpg";

const BADGES = [
  { text: "SMASHED", cls: "left-0 top-8 -rotate-6 bg-pop text-pop-foreground", tilt: "-6deg" },
  { text: "LOADED", cls: "right-2 top-24 rotate-6 bg-flame text-accent-foreground", tilt: "6deg" },
  {
    text: "EXTRA CHEESY",
    cls: "left-2 bottom-24 rotate-3 bg-cream text-ink",
    tilt: "3deg",
  },
  {
    text: "POPP'D",
    cls: "right-0 bottom-10 -rotate-3 bg-pop text-pop-foreground",
    tilt: "-3deg",
  },
];

export function Hero() {
  return (
    <section id="home" className="grain relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-flame/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-pop/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 md:grid-cols-2 md:px-8 md:pb-24">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-flame/50 bg-flame/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-flame">
            Warning: serious burger cravings ahead.
          </span>

          <h1 className="mt-5 font-display text-6xl leading-[0.85] sm:text-7xl md:text-8xl">
            Get
            <br />
            <span className="text-pop drop-shadow-[0_6px_0_var(--flame)]">POPP'D.</span>
          </h1>

          <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
            Burgers. Hotdogs. Loaded bites.
            <br />
            Made to make your tastebuds pop.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-full bg-pop px-7 py-4 font-display text-sm uppercase text-pop-foreground transition-transform hover:scale-105"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="rounded-full border border-border px-7 py-4 font-display text-sm uppercase transition-colors hover:bg-secondary"
            >
              See the Menu
            </a>
          </div>

          <p className="mt-7 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-flame" /> Jubilee Hills, Hyderabad
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 rounded-full bg-pop/25 blur-2xl" />
          <img
            src={hero}
            alt="Close-up of a cheesy smashed chicken burger"
            width={1200}
            height={1200}
            className="relative w-full rounded-[2.5rem] object-cover shadow-2xl"
          />
          {BADGES.map((b) => (
            <span
              key={b.text}
              style={{ ["--tilt" as string]: b.tilt }}
              className={`absolute animate-float-slow rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide shadow-lg ${b.cls}`}
            >
              {b.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
