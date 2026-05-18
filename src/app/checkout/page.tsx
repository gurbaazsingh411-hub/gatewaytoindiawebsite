"use client";

import { useCartStore } from "@/store/cart";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const total = getTotal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckout = async (method: "card" | "cod") => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast.error("Please fill in all details.");
      return;
    }

    setLoading(true);
    try {
      // Simulate API call to save order
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, this would redirect to Stripe/Razorpay or call Supabase to insert order
      toast.success(method === "card" ? "Payment successful!" : "Order placed for Cash on Delivery!");
      clearCart();
      router.push("/order/success");
    } catch (error) {
      toast.error("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h2 className="text-3xl font-display mb-4">Your Plate is Empty</h2>
        <p className="text-muted-foreground mb-8">Add some delicious dishes to get started.</p>
        <Button onClick={() => router.push("/menu")}>Browse Menu</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 lg:px-8 py-14 max-w-4xl">
      <h1 className="text-4xl font-display mb-8 text-center md:text-left">Checkout</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Delivery Details</CardTitle>
              <CardDescription>Enter your information for delivery.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Input id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="123 Main St, Apartment 4B" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.quantity}x {item.name}</span>
                  <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="pt-4 border-t flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button 
                className="w-full text-lg h-12" 
                onClick={() => handleCheckout("card")} 
                disabled={loading}
              >
                {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                Pay Securely Online
              </Button>
              <Button 
                variant="outline" 
                className="w-full text-lg h-12" 
                onClick={() => handleCheckout("cod")} 
                disabled={loading}
              >
                Cash on Delivery
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
