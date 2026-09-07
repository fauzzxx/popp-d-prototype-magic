import { Minus, Plus, X } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { open, setOpen, lines, subtotal, add, remove } = useCart();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-ink/70 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-card shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="font-display text-xl">Your POPP'd order</h3>
          <button onClick={() => setOpen(false)} aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-5">
          {lines.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Nothing here yet. Go smash that Add button.
            </p>
          )}
          {lines.map((l) => (
            <div key={l.item.id} className="flex items-center gap-3 rounded-2xl bg-secondary p-3">
              <img
                src={l.item.image}
                alt={l.item.name}
                loading="lazy"
                width={80}
                height={80}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold">{l.item.name}</p>
                <p className="text-sm text-pop">₹{l.item.price * l.qty}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  onClick={() => remove(l.item.id)}
                  aria-label="Remove one"
                  className="grid h-7 w-7 place-items-center rounded-full bg-background"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-4 text-center text-sm font-bold">{l.qty}</span>
                <button
                  onClick={() => add(l.item)}
                  aria-label="Add one"
                  className="grid h-7 w-7 place-items-center rounded-full bg-background"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3 border-t border-border p-5">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-display text-xl">₹{subtotal}</span>
          </div>
          <button
            onClick={() => toast("Ordering integration coming soon.")}
            className="w-full rounded-full bg-pop py-3.5 font-display text-sm uppercase text-pop-foreground transition-transform hover:scale-[1.02]"
          >
            Continue to Order
          </button>
          <p className="text-center text-[11px] text-muted-foreground">
            Prototype only — no real orders are placed.
          </p>
        </div>
      </aside>
    </>
  );
}
