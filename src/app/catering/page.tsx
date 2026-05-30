"use client";
import { CalendarCheck, Users, Utensils, Sparkles, Check } from "lucide-react";
import cateringImg from "@/assets/catering.jpg";

export default function CateringPage() {

  return (
    <>
      <section className="relative overflow-hidden">
        <img src={(cateringImg as any)?.src || (cateringImg as any)} alt="Catering" className="absolute inset-0 w-full h-full object-cover" width={1536} height={1024} />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/50" />
        <div className="relative container mx-auto px-5 lg:px-8 py-24 md:py-36 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Catering</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl text-cream">Memorable food, made for your guests</h1>
          <p className="mt-5 text-cream/85 text-lg">Weddings, corporate, birthdays, festivals — we bring the kitchen to you.</p>
        </div>
      </section>

      {/* CATERING SPECIAL BANNER */}
      <section className="container mx-auto px-5 lg:px-8 pt-16 max-w-4xl">
        <div className="bg-gradient-to-br from-primary/95 to-primary-foreground/90 border border-primary/20 rounded-3xl p-8 md:p-10 text-center text-primary-foreground shadow-warm relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 rounded-full bg-cream/10 blur-xl"></div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Special Events</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl text-cream">We Do Catering!</h2>
          <p className="mt-4 text-cream/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Do you have a wedding, birthday party, or another event that you need catered? Let us help you wow your guests with the best Indian cuisine in town! For all catering requests please call and provide a minimum of 48 hours notice.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a href="tel:2535525022" className="inline-flex items-center gap-2 rounded-full bg-cream text-primary font-bold px-6 py-3 shadow hover:scale-[1.02] transition-transform">
              Call (253) 552-5022
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-6">
        {[
          { icon: Users, title: "Any size, any setting", desc: "From intimate dinners of 10 to events with 500+ guests." },
          { icon: Utensils, title: "Custom menus", desc: "Full vegetarian, vegan and dietary-friendly options crafted with you." },
          { icon: CalendarCheck, title: "48-hour notice", desc: "Please call and provide a minimum of 48 hours notice." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card border border-border rounded-2xl p-7">
            <div className="w-12 h-12 rounded-xl bg-gradient-warm inline-flex items-center justify-center text-primary-foreground shadow-warm mb-4">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-3 gap-6">
          {[
            { name: "Essential", price: "From $18 / guest", items: ["3 mains", "Rice & naan", "1 appetizer", "Mango lassi"] },
            { name: "Signature", price: "From $28 / guest", items: ["5 mains incl. tandoori", "Biryani station", "3 appetizers", "Dessert", "On-site warmer setup"], featured: true },
            { name: "Royal", price: "From $42 / guest", items: ["7 mains incl. lamb specials", "Live tandoor station", "Full dessert spread", "Servers & setup", "Custom menu design"] },
          ].map((p) => (
            <div key={p.name} className={`rounded-2xl p-8 border ${p.featured ? "bg-gradient-warm text-primary-foreground border-transparent shadow-warm" : "bg-card border-border"}`}>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl">{p.name}</h3>
                {p.featured && <Sparkles className="w-5 h-5" />}
              </div>
              <p className={`mt-2 text-sm ${p.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>{p.price}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2"><Check className="w-4 h-4 mt-0.5 shrink-0" /> {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}