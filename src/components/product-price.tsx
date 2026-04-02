"use client";

import { useCurrency } from "@/components/currency-provider";

export function ProductPrice({ value }: { value: number }) {
  const { price } = useCurrency();
  return <>{price(value)}</>;
}
