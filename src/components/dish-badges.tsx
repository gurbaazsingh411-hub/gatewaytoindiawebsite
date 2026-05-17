import { Flame, Leaf } from "lucide-react";

export function VegBadge({ veg }: { veg: boolean }) {
  return (
    <span
      title={veg ? "Vegetarian" : "Non-vegetarian"}
      className={`inline-flex items-center justify-center w-4 h-4 border-2 ${
        veg ? "border-olive" : "border-destructive"
      }`}
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          veg ? "bg-olive" : "bg-destructive"
        }`}
      />
    </span>
  );
}

export function SpiceLevel({ level }: { level: 0 | 1 | 2 | 3 }) {
  if (level === 0) return null;
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Spice level ${level} of 3`}>
      {Array.from({ length: level }).map((_, i) => (
        <Flame key={i} className="w-3.5 h-3.5 text-primary fill-primary/40" />
      ))}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-medium px-2 py-0.5 rounded-full bg-accent/30 text-accent-foreground">
      <Leaf className="w-3 h-3" /> {children}
    </span>
  );
}
