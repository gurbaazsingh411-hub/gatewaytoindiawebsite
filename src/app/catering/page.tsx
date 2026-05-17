"use client";
import { useState } from "react";
import { CalendarCheck, Users, Utensils, Sparkles, Check } from "lucide-react";
import cateringImg from "@/assets/catering.jpg";



export default function CateringPage() {
  const [sent, setSent] = useState(false);

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

      <section className="container mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-3 gap-6">
        {[
          { icon: Users, title: "Any size, any setting", desc: "From intimate dinners of 10 to events with 500+ guests." },
          { icon: Utensils, title: "Custom menus", desc: "Full vegetarian, vegan and dietary-friendly options crafted with you." },
          { icon: CalendarCheck, title: "72-hour notice", desc: "Most events booked in 3 days — rush requests considered." },
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

      <section className="container mx-auto px-5 lg:px-8 py-20 max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Inquire</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Tell us about your event</h2>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
            <h3 className="font-display text-2xl text-primary">Thank you!</h3>
            <p className="mt-2 text-muted-foreground">We've received your inquiry and will get back within 24 hours.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 grid sm:grid-cols-2 gap-5 shadow-soft"
          >
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Event date" name="date" type="date" required />
            <Field label="Number of guests" name="guests" type="number" required />
            <Field label="Event type" name="type" placeholder="Wedding, corporate, birthday…" />
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1.5">Additional notes</label>
              <textarea name="notes" rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <button type="submit" className="sm:col-span-2 inline-flex justify-center items-center rounded-full bg-gradient-warm px-7 py-3.5 font-semibold text-primary-foreground shadow-warm hover:scale-[1.01] transition-transform">
              Send Inquiry
            </button>
          </form>
        )}
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}