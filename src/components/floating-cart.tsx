"use client";

import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { Minus, Plus, Trash2 } from "lucide-react";

export function FloatingCart() {
  const { items, total, removeItem, updateQuantity } = useCartStore((state) => ({
    items: state.items,
    total: state.getTotal(),
    removeItem: state.removeItem,
    updateQuantity: state.updateQuantity,
  }));
  const router = useRouter();

  if (items.length === 0) return null;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform">
          <div className="relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <span className="font-semibold text-lg">₹{total.toFixed(2)}</span>
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Plate</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 -mx-6 px-6 mt-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 py-4">
              <div className="flex-1">
                <h4 className="font-medium text-sm">{item.name}</h4>
                <div className="text-muted-foreground text-sm mt-1">₹{item.price.toFixed(2)}</div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 text-muted-foreground hover:text-foreground"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 text-sm text-center min-w-[2rem]">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-muted-foreground hover:text-foreground"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-destructive/70 hover:text-destructive p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="font-medium text-right">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="pt-6 mt-auto">
          <Separator className="mb-4" />
          <div className="flex justify-between items-center font-bold text-lg mb-6">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
          <Button
            className="w-full py-6 text-lg"
            onClick={() => {
              // Hide sheet? Actually router push is enough, sheet closes automatically? 
              // Usually clicking a link inside sheet needs manual close, but pushing route is fine.
              router.push("/checkout");
            }}
          >
            Proceed to Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
