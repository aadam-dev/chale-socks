export type CurrencyCode = "USD" | "GHS" | "EUR" | "GBP";

const RATE_GHS = 15.4;
const RATE_EUR = 0.92;
const RATE_GBP = 0.79;
const OVERRIDE_KEY = "chale-currency";

export function detectInitialCurrency(locale?: string): CurrencyCode {
  if (typeof window === "undefined") {
    return "USD";
  }

  const saved = window.localStorage.getItem(OVERRIDE_KEY);
  if (saved === "USD" || saved === "GHS" || saved === "EUR" || saved === "GBP") {
    return saved as CurrencyCode;
  }

  const lang = (locale ?? navigator.language ?? "en-US").toLowerCase();
  let tz = "";
  try {
    tz = Intl.DateTimeFormat().resolvedOptions().timeZone ?? "";
  } catch {
    tz = "";
  }

  const ghanaSignals =
    lang.includes("gh") ||
    lang.endsWith("-gh") ||
    tz === "Africa/Accra";

  return ghanaSignals ? "GHS" : "USD";
}

export function persistCurrency(currency: CurrencyCode) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(OVERRIDE_KEY, currency);
  document.cookie = `chale_currency=${currency}; path=/; max-age=31536000`;
}

export function formatPrice(usd: number, currency: CurrencyCode) {
  let amount = usd;
  let locale = "en-US";
  if (currency === "GHS") {
    amount = usd * RATE_GHS;
    locale = "en-GH";
  } else if (currency === "EUR") {
    amount = usd * RATE_EUR;
    locale = "en-IE"; 
  } else if (currency === "GBP") {
    amount = usd * RATE_GBP;
    locale = "en-GB";
  }
  
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}
