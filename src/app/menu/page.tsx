"use client";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, dishes } from "@/data/menu";
import { VegBadge, SpiceLevel } from "@/components/dish-badges";
import { useCartStore } from "@/store/cart";



export default function MenuPage() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");
  const addItem = useCartStore((state) => state.addItem);

  const filtered = useMemo(() => {
    return dishes.filter((d) => {
      const cat = active === "All" || d.category === active;
      const q = query.trim().toLowerCase();
      const match = !q || d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q);
      return cat && match;
    });
  }, [active, query]);

  return (
    <>
      <section className="bg-gradient-sunset text-cream py-20 md:py-28">
        <div className="container mx-auto px-5 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Menu</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Cooked from scratch, every day</h1>
          <p className="mt-5 text-cream/80 text-lg">Hand-ground spices, slow simmering, and the smoky kiss of the tandoor.</p>
        </div>
      </section>

      <div className="sticky top-[72px] z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-5 lg:px-8 py-4 flex flex-col gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes…"
              className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5">
            {(["All", ...categories] as string[]).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === c
                    ? "bg-gradient-warm text-primary-foreground shadow-warm"
                    : "bg-muted text-foreground/80 hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="container mx-auto px-5 lg:px-8 py-14">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">No dishes match your search.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((d) => (
              <article key={d.name} className="group bg-card border border-border rounded-2xl p-5 hover:shadow-warm transition-all flex gap-4">
                {d.image && (
                  <img src={(d.image as any)?.src || (d.image as any)} alt={d.name} className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover shrink-0" width={256} height={256} loading="lazy" />
                )}
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <VegBadge veg={d.veg} />
                      <h3 className="font-display text-xl truncate">{d.name}</h3>
                    </div>
                    <span className="text-primary font-semibold whitespace-nowrap">₹{d.price}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed flex-1">{d.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{d.category}</span>
                      <SpiceLevel level={d.spice} />
                    </div>
                    <button 
                      onClick={() => {
                        addItem({
                          id: d.name,
                          name: d.name,
                          price: parseFloat(d.price),
                          veg: d.veg
                        });
                      }}
                      className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
                    >
                      + Add to Plate
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}