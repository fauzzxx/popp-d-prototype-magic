import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { MenuItem } from "@/data/menu";

export type CartLine = { item: MenuItem; qty: number };

type CartCtx = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (item: MenuItem) => void;
  remove: (id: string) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  const value = useMemo<CartCtx>(() => {
    const add = (item: MenuItem) =>
      setLines((prev) => {
        const found = prev.find((l) => l.item.id === item.id);
        return found
          ? prev.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l))
          : [...prev, { item, qty: 1 }];
      });
    const remove = (id: string) =>
      setLines((prev) =>
        prev.flatMap((l) =>
          l.item.id === id ? (l.qty > 1 ? [{ ...l, qty: l.qty - 1 }] : []) : [l],
        ),
      );
    return {
      lines,
      open,
      setOpen,
      add,
      remove,
      count: lines.reduce((n, l) => n + l.qty, 0),
      subtotal: lines.reduce((n, l) => n + l.qty * l.item.price, 0),
    };
  }, [lines, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
