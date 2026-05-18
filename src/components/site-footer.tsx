"use client";
import Link from "next/link";
import { MessageCircle, Camera, MapPin, Phone, Mail, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-cream/90 mt-24 hidden md:block">
      <div className="container mx-auto px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-warm text-primary-foreground font-display text-xl">
              {/* Logo */}
            </span>
            <span className="font-display text-xl text-cream">Gateway to India</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">
            Authentic North Indian cuisine, prepared with traditional recipes and
            served with warmth since day one.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-cream/20 inline-flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
              <Camera className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-cream/20 inline-flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream mb-4">Visit Us</h4>
          <ul className="space-y-3 text-sm text-cream/75">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" /> 1234 Curry Lane, Your City</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" /> (555) 123-4567</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" /> hello@gatewaytoindia.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-cream/75">
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Mon – Thu: 11:30 – 21:30</li>
            <li className="ml-6">Fri – Sat: 11:30 – 22:30</li>
            <li className="ml-6">Sunday: 12:00 – 21:00</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-cream mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["/menu", "Menu"],
              ["/catering", "Catering"],
              ["/about", "Our Story"],
              ["/gallery", "Gallery"],
              ["/order", "Order Online"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link href={to} className="text-cream/75 hover:text-primary transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-5 lg:px-8 py-5 text-xs text-cream/55 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Gateway to India. All rights reserved.</p>
          <p>Crafted with love · Authentic North Indian Cuisine</p>
        </div>
      </div>
    </footer>
  );
}
