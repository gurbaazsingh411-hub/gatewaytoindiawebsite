"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function OrderSuccessPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-5 py-24 max-w-md text-center">
      <CheckCircle2 className="w-24 h-24 text-green-500 mx-auto mb-6" />
      <h1 className="text-4xl font-display mb-4">Order Confirmed!</h1>
      <p className="text-muted-foreground mb-8 text-lg">
        Thank you for ordering from Gateway to India. Your delicious food is being prepared and will be ready soon.
      </p>
      <Button onClick={() => router.push("/")} className="w-full text-lg h-12">
        Return Home
      </Button>
    </div>
  );
}
