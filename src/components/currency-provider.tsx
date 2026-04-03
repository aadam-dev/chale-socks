"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  detectInitialCurrency,
  formatPrice,
  persistCurrency,
  type CurrencyCode,
} from "@/lib/currency";

type CurrencyContextType = {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  price: (usd: number) => string;
};

const CurrencyContext = createContext<CurrencyContextType | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  // Initialize currency to a default value for SSR, then detect on client.
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");

  // Using useEffect to set client-side specific state after mount to avoid hydration mismatches.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrencyState(detectInitialCurrency());
  }, []);

  const value = useMemo(
    () => ({
      currency,
      setCurrency: (value: CurrencyCode) => {
        setCurrencyState(value);
        persistCurrency(value);
      },
      price: (usd: number) => formatPrice(usd, currency),
    }),
    [currency]
  );

  return (
    <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}
