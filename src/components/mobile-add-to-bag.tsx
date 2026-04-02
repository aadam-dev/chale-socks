"use client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileAddToBag({ label }: { label: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/10 bg-coconut/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <Button type="button" variant="primary" className="w-full shadow-md" size="lg">
        <ShoppingBag className="h-4 w-4" aria-hidden />
        Add {label} to Bag
      </Button>
    </div>
  );
}
