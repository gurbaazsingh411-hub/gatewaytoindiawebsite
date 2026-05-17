"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2, Truck, Store } from "lucide-react";
import { dishes } from "@/data/menu";
import { VegBadge, SpiceLevel } from "@/components/dish-badges";



const popular = dishes.filter((d) => d.image);

function priceNum(p: string) {
  return parseFloat(p.replace("$", ""));
}

export default function Order() {
  const [mode, setMode] = useState<"pickup" | "delivery">("pickup");
  const [cart, setCart] = useState<Record<string, number>>({});

  const items = useMemo(
    () =>
      Object.entries(cart)
        .map(([name, qty]) => ({ dish: dishes.find((d) => d.name === name)!, qty }))
        .filter((i) => i.dish),
    [cart]
  );

  const subtotal = items.reduce((s, i) => s + priceNum(i.dish.price) * i.qty, 0);
  const fee = mode === "delivery" ? 3.99 : 0;
  const total = subtotal + fee;

  const add = (name: string) => setCart((c) => ({ ...c, [name]: (c[name] ?? 0) + 1 }));
  const sub = (name: string) =>
    setCart((c) => {
      const next = { ...c };
      if ((next[name] ?? 0) <= 1) delete next[name];
      else next[name] -= 1;
      return next;
    });

  return (
    <section className="container mx-auto px-5 lg:px-8 py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Order Online</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Hot, fresh, on its way</h1>
        <p className="mt-5 text-muted-foreground text-lg">Pickup is ready in 20–25 minutes. Delivery in 35–50.</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_360px] gap-8">
        <div>
          <div className="inline-flex p-1 rounded-full bg-muted mb-6">
            <button
              onClick={() => setMode("pickup")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${mode === "pickup" ? "bg-gradient-warm text-primary-foreground shadow-warm" : "text-foreground/70"}`}
            >
              <Store className="w-4 h-4" /> Pickup
            </button>
            <button
              onClick={() => setMode("delivery")}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors ${mode === "delivery" ? "bg-gradient-warm text-primary-foreground shadow-warm" : "text-foreground/70"}`}
            >
              <Truck className="w-4 h-4" /> Delivery
            </button>
          </div>

          <h2 className="font-display text-2xl mb-4">Popular dishes</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {popular.map((d) => (
              <article key={d.name} className="bg-card border border-border rounded-2xl p-4 flex gap-4">
                <img src={(d.image as any)?.src || (d.image as any)} alt={d.name} className="w-24 h-24 rounded-xl object-cover shrink-0" width={256} height={256} loading="lazy" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2"><VegBadge veg={d.veg} /><h3 className="font-display text-lg truncate">{d.name}</h3></div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{d.description}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-primary font-semibold">{d.price}</span>
                    <SpiceLevel level={d.spice} />
                  </div>
                  <button
                    onClick={() => add(d.name)}
                    className="mt-2 w-full inline-flex justify-center items-center gap-1 rounded-full bg-gradient-warm text-primary-foreground py-1.5 text-sm font-semibold shadow-warm"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Looking for more? <Link href="/menu" className="text-primary font-semibold hover:underline">Browse the full menu</Link>
          </p>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit bg-card border border-border rounded-2xl p-6 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl">Your Order</h2>
          </div>
          {items.length === 0 ? (
            <p className="text-sm text-muted-foreground py-8 text-center">Cart is empty. Add a dish to get started.</p>
          ) : (
            <>
              <ul className="divide-y divide-border">
                {items.map(({ dish, qty }) => (
                  <li key={dish.name} className="py-3 flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{dish.name}</p>
                      <p className="text-xs text-muted-foreground">{dish.price}</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => sub(dish.name)} className="w-7 h-7 rounded-full border border-border inline-flex items-center justify-center hover:bg-muted">
                        {qty === 1 ? <Trash2 className="w-3 h-3" /> : <Minus className="w-3 h-3" />}
                      </button>
                      <span className="w-5 text-center font-semibold text-sm">{qty}</span>
                      <button onClick={() => add(dish.name)} className="w-7 h-7 rounded-full border border-border inline-flex items-center justify-center hover:bg-muted">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-4 mt-2 space-y-1.5 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                {mode === "delivery" && <div className="flex justify-between"><span className="text-muted-foreground">Delivery fee</span><span>${fee.toFixed(2)}</span></div>}
                <div className="flex justify-between font-semibold text-base pt-2"><span>Total</span><span>${total.toFixed(2)}</span></div>
              </div>
              <button className="mt-5 w-full rounded-full bg-gradient-warm text-primary-foreground py-3 font-semibold shadow-warm hover:scale-[1.01] transition-transform">
                Checkout
              </button>
              <p className="mt-3 text-[11px] text-center text-muted-foreground">
                Secure checkout · {mode === "pickup" ? "Ready in 20–25 min" : "Delivery 35–50 min"}
              </p>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}