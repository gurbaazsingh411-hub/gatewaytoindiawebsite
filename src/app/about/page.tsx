"use client";
import Link from "next/link";
import chefImg from "@/assets/chef.jpg";
import spicesImg from "@/assets/spices.jpg";
import interiorImg from "@/assets/interior.jpg";



export default function About() {
  return (
    <>
      <section className="container mx-auto px-5 lg:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Story</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05]">From a grandmother's kitchen in Punjab.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every dish at Gateway to India carries a memory. Our recipes were written down at
            a wooden table in Amritsar, refined over decades, and brought across continents to
            this restaurant — unchanged, unhurried, unmistakably authentic.
          </p>
        </div>
        <img src={(chefImg as any)?.src || (chefImg as any)} alt="Our chef" className="rounded-2xl shadow-warm w-full" width={1024} height={1280} loading="lazy" />
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <img src={(spicesImg as any)?.src || (spicesImg as any)} alt="Indian spices" className="rounded-2xl shadow-soft w-full order-2 lg:order-1" width={1536} height={1024} loading="lazy" />
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl">Spices ground in-house. Always.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              We toast and grind our garam masala every morning. Cardamom, cumin, cloves,
              cinnamon — measured by smell, not by the clock. It's slower. It tastes like it.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 lg:px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-display text-4xl md:text-5xl">A neighborhood table</h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            We've watched first dates turn into anniversaries, watched kids grow up over plates
            of butter chicken. Our restaurant is small on purpose — we'd rather know your name
            than fill another seat.
          </p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 font-semibold text-primary-foreground shadow-warm">
            Come visit us
          </Link>
        </div>
        <img src={(interiorImg as any)?.src || (interiorImg as any)} alt="Restaurant interior" className="rounded-2xl shadow-soft w-full" width={1536} height={1024} loading="lazy" />
      </section>
    </>
  );
}