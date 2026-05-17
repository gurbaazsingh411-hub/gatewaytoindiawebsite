"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";



export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="container mx-auto px-5 lg:px-8 py-16 md:py-20 text-center max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">We'd love to hear from you</h1>
      </section>

      <section className="container mx-auto px-5 lg:px-8 pb-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          {[
            { icon: MapPin, title: "Address", body: "1234 Curry Lane\nYour City, ST 00000" },
            { icon: Phone, title: "Phone", body: "(555) 123-4567" },
            { icon: Mail, title: "Email", body: "hello@gatewaytoindia.com" },
            { icon: Clock, title: "Hours", body: "Mon – Thu: 11:30 – 21:30\nFri – Sat: 11:30 – 22:30\nSun: 12:00 – 21:00" },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 bg-card border border-border rounded-2xl p-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-warm inline-flex items-center justify-center text-primary-foreground shadow-warm shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{body}</p>
              </div>
            </div>
          ))}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Gateway+to+India+Restaurant"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 font-semibold text-primary-foreground shadow-warm"
          >
            <Navigation className="w-4 h-4" /> Get Directions
          </a>
        </div>

        <div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-soft aspect-[4/3] mb-6">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=indian+restaurant&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          {sent ? (
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 text-center">
              <p className="font-semibold text-primary">Thanks — we'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="bg-card border border-border rounded-2xl p-6 grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Name</label>
                <input required className="w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Email</label>
                <input type="email" required className="w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Message</label>
                <textarea rows={4} required className="w-full rounded-xl border border-border bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <button className="rounded-full bg-gradient-warm px-6 py-3 font-semibold text-primary-foreground shadow-warm">Send Message</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}