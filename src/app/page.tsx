"use client";
import Link from "next/link";
import { ArrowRight, Award, Leaf, UtensilsCrossed, Users, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-feast.jpg";
import interiorImg from "@/assets/interior.jpg";
import cateringImg from "@/assets/catering.jpg";
import { dishes } from "@/data/menu";
import { VegBadge, SpiceLevel } from "@/components/dish-badges";



export default function Home() {
  const featured = dishes.filter((d) => d.image).slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={(heroImg as any)?.src || (heroImg as any)} alt="Indian feast" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40" />
        </div>
        <div className="relative container mx-auto px-5 lg:px-8 py-28 md:py-40 lg:py-48 max-w-5xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <Sparkles className="w-3.5 h-3.5" /> Family-owned · Est. tradition
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] max-w-4xl">
            Authentic <span className="text-gradient-warm italic">North Indian</span> Cuisine
          </h1>
          <p className="mt-6 text-lg md:text-xl text-cream/85 max-w-2xl leading-relaxed">
            Slow-cooked curries, smoky tandoor specialties and time-honored family recipes —
            served warm at our table or yours.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/order" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-warm hover:scale-[1.03] transition-transform">
              Order Online <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/menu" className="inline-flex items-center gap-2 rounded-full border-2 border-cream/40 px-7 py-3.5 text-base font-semibold text-cream hover:bg-cream hover:text-charcoal transition-colors">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container mx-auto px-5 lg:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={(interiorImg as any)?.src || (interiorImg as any)} alt="Restaurant interior" className="rounded-2xl shadow-warm w-full" width={1536} height={1024} loading="lazy" />
          <div className="hidden md:block absolute -bottom-8 -right-8 bg-card border border-border rounded-2xl p-6 shadow-soft max-w-[260px]">
            <div className="flex gap-1 text-primary mb-2">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
            </div>
            <p className="text-sm font-medium">Loved by 2,000+ guests</p>
            <p className="text-xs text-muted-foreground mt-1">Google reviews · 4.8 average</p>
          </div>
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Story</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">A family kitchen, opened to the world.</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Gateway to India began as a small family table in Punjab, where our grandmother
            taught us that great food starts with patience, fresh spices and people you love.
            Decades later, we still cook every dish from scratch — the same way she did.
          </p>
          <Link href="/about" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all">
            Read our story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Signature Dishes</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Tasting our table</h2>
            </div>
            <Link href="/menu" className="font-semibold text-primary hover:underline inline-flex items-center gap-2">See full menu <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((d) => (
              <article key={d.name} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-warm transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={(d.image as any)?.src || (d.image as any)} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" width={1024} height={768} loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <VegBadge veg={d.veg} />
                      <h3 className="font-display text-xl truncate">{d.name}</h3>
                    </div>
                    <span className="text-primary font-semibold whitespace-nowrap">{d.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{d.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">{d.category}</span>
                    <SpiceLevel level={d.spice} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container mx-auto px-5 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Gateway</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Cooked the way it should be</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: Award, title: "Authentic Recipes", desc: "Three-generation family recipes from the heart of Punjab." },
            { icon: Leaf, title: "Vegan-Friendly", desc: "Plenty of plant-based options, clearly labeled." },
            { icon: UtensilsCrossed, title: "Fresh Ingredients", desc: "Spices ground in-house, produce sourced daily." },
            { icon: Users, title: "Catering Ready", desc: "From intimate dinners to weddings of 500+ guests." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-card rounded-2xl p-7 border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-warm inline-flex items-center justify-center text-primary-foreground mb-4 shadow-warm group-hover:scale-110 transition-transform">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="container mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Guests Say</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Warm words, warmer plates</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Priya M.", quote: "The butter chicken is unreal — silky, smoky, exactly like home. Already booked again." },
              { name: "Daniel R.", quote: "Catered our wedding for 220 guests. Everything was on time, hot, and absolutely delicious." },
              { name: "Sara K.", quote: "Generous vegan menu and the staff actually knows the dishes inside-out. New favorite spot." },
            ].map((t) => (
              <figure key={t.name} className="bg-card border border-border rounded-2xl p-7 shadow-soft">
                <div className="flex gap-1 text-primary mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
                </div>
                <blockquote className="text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm font-semibold text-muted-foreground">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CATERING CTA */}
      <section className="container mx-auto px-5 lg:px-8 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl">
          <img src={(cateringImg as any)?.src || (cateringImg as any)} alt="Catering setup" className="absolute inset-0 w-full h-full object-cover" width={1536} height={1024} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/40" />
          <div className="relative px-8 md:px-14 py-16 md:py-24 max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl text-cream">Catering for unforgettable events</h2>
            <p className="mt-4 text-cream/85 text-lg">From corporate lunches to weddings — full menus, on-site service, and a team that handles every detail.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/catering" className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 font-semibold text-primary-foreground shadow-warm">
                Request Catering <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/menu" className="inline-flex items-center gap-2 rounded-full border-2 border-cream/40 px-6 py-3 font-semibold text-cream hover:bg-cream hover:text-charcoal transition-colors">
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}