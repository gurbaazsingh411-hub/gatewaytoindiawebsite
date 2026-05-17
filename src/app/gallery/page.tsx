"use client";
import { useState } from "react";
import { X } from "lucide-react";
import butterChicken from "@/assets/dish-butter-chicken.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import tandoori from "@/assets/dish-tandoori.jpg";
import paneer from "@/assets/dish-paneer.jpg";
import naan from "@/assets/dish-naan.jpg";
import samosa from "@/assets/dish-samosa.jpg";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";
import spices from "@/assets/spices.jpg";
import catering from "@/assets/catering.jpg";
import hero from "@/assets/hero-feast.jpg";



const images = [
  { src: hero, alt: "Indian feast", h: "tall" },
  { src: butterChicken, alt: "Butter chicken" },
  { src: interior, alt: "Restaurant interior", h: "wide" },
  { src: biryani, alt: "Lamb biryani" },
  { src: tandoori, alt: "Tandoori chicken", h: "tall" },
  { src: paneer, alt: "Paneer tikka" },
  { src: spices, alt: "Indian spices", h: "wide" },
  { src: naan, alt: "Garlic naan" },
  { src: chef, alt: "Our chef", h: "tall" },
  { src: catering, alt: "Catering setup", h: "wide" },
  { src: samosa, alt: "Vegetable samosa" },
];

export default function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <section className="container mx-auto px-5 lg:px-8 py-16 md:py-20 text-center max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Gallery</span>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Moments from our table</h1>
        <p className="mt-5 text-muted-foreground text-lg">A look inside the kitchen, the dining room and the events we've been part of.</p>
      </section>

      <section className="container mx-auto px-5 lg:px-8 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {images.map((img) => (
            <button
              key={(img.src as any).src || (img.src as any)}
              onClick={() => setOpen((img.src as any).src || (img.src as any))}
              className="block w-full mb-5 break-inside-avoid overflow-hidden rounded-2xl group focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={(img.src as any).src || (img.src as any)}
                alt={img.alt}
                loading="lazy"
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  img.h === "tall" ? "aspect-[3/4]" : img.h === "wide" ? "aspect-[4/3]" : "aspect-square"
                }`}
              />
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-5 animate-in fade-in"
        >
          <button onClick={() => setOpen(null)} className="absolute top-5 right-5 w-10 h-10 rounded-full bg-cream/10 text-cream inline-flex items-center justify-center hover:bg-cream/20" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
          <img src={(open as any)?.src || (open as any)} alt="" className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-warm" />
        </div>
      )}
    </>
  );
}