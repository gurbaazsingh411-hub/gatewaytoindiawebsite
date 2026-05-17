"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container mx-auto px-5 lg:px-8 flex items-center justify-between h-18 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-warm text-primary-foreground font-display text-xl shadow-warm">
            {/* Logo Icon Placeholder */}
          </span>
          <span className="font-display text-xl leading-tight">
            Gateway <span className="text-primary">to India</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => {
            const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-foreground/80"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/order"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm hover:opacity-95 transition-all hover:scale-[1.02]"
          >
            Order Online
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-5 py-4 flex flex-col gap-1">
            {links.map((l) => {
              const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-3 py-3 rounded-md text-base font-medium hover:bg-muted",
                    isActive ? "text-primary bg-muted" : ""
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/order"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-warm px-5 py-3 text-sm font-semibold text-primary-foreground shadow-warm"
            >
              Order Online
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
