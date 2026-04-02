"use client";

import { useMemo, useState } from "react";
import { useCurrency } from "@/components/currency-provider";

export function BundleCalculator({ unitPrice }: { unitPrice: number }) {
  const [qty, setQty] = useState(3);
  const { price } = useCurrency();

  const summary = useMemo(() => {
    const freePairs = Math.floor(qty / 3);
    const paidPairs = qty - freePairs;
    const total = paidPairs * unitPrice;
    return { freePairs, total };
  }, [qty, unitPrice]);

  return (
    <div className="blueprint-border rounded-2xl p-4">
      <p className="text-xs uppercase tracking-[0.15em] text-black/60">Chale Bundle</p>
      <h3 className="mt-1 font-headline text-xl">Buy 3, Get 1 logic</h3>
      <input
        type="range"
        min={1}
        max={12}
        value={qty}
        onChange={(event) => setQty(Number(event.target.value))}
        className="mt-4 w-full accent-[#e03b2f]"
      />
      <div className="mt-3 flex items-center justify-between text-sm">
        <span>{qty} pairs</span>
        <span>{summary.freePairs} free</span>
      </div>
      <p className="mt-2 text-lg font-semibold">{price(summary.total)}</p>
    </div>
  );
}
