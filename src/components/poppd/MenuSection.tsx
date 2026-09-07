import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { CATEGORIES, MENU } from "@/data/menu";
import { useCart } from "@/lib/cart";
import { Reveal } from "./Reveal";

export function MenuSection() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("ALL");
  const { add, setOpen } = useCart();
  const items = active === "ALL" ? MENU : MENU.filter((i) => i.category === active);

  return (
    <section id="menu" className="section-pad mx-auto max-w-7xl px-4 md:px-8">
      <Reveal>
        <h2 className="font-display text-4xl md:text-6xl">
          The POPP'd <span className="text-pop">Lineup</span>
        </h2>
        <p className="mt-3 text-muted-foreground">
          Things that deserve to be eaten with both hands.
        </p>
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
              active === c
                ? "bg-pop text-pop-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.id} delay={i * 60}>
            <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-pop/50">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3 p-5">
                <div className="min-w-0">
                  <h3 className="truncate text-lg">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  <p className="mt-3 font-display text-xl text-pop">₹{item.price}</p>
                </div>
                <button
                  onClick={() => {
                    add(item);
                    toast("Added to your POPP'd order!", {
                      action: { label: "View", onClick: () => setOpen(true) },
                    });
                  }}
                  aria-label={`Add ${item.name}`}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pop text-pop-foreground transition-transform hover:scale-110"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        Prototype content: sample items, prices and imagery for demo purposes only.
      </p>
    </section>
  );
}
