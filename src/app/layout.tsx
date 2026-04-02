import type { Metadata } from "next";
import { Outfit, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/page-transition";
import { CurrencyProvider } from "@/components/currency-provider";

const playfair = Playfair_Display({
  variable: "--font-family-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-family-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-family-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chalesocks.com"),
  title: {
    default: "Chalé Socks | Step Into The Culture",
    template: "%s | Chalé Socks",
  },
  description:
    "Afro-Minimal luxury socks from Ghana. Quiet gallery backgrounds, vibrant Adinkra and Kente-inspired patterns—authentic, vibrant, African.",
  keywords: [
    "Chale Socks",
    "Ghana socks",
    "Adinkra",
    "Kente",
    "Afrocentric",
    "African fashion",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Chalé Socks",
    title: "Chalé Socks | Step Into The Culture",
    description:
      "Premium socks designed in Ghana. Patterns are the hero—culture in every step.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chalé Socks | Step Into The Culture",
    description: "Afro-Minimal e-commerce. Designed in Ghana. Inspired by the World.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${playfair.variable} ${outfit.variable} ${spaceMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans flex min-h-screen flex-col bg-[#1a1d21] text-foreground selection:bg-chale-red selection:text-white">
        <CurrencyProvider>
          <div className="relative flex min-h-screen flex-1 flex-col">
            <SiteHeader />
            <PageTransition>{children}</PageTransition>
            <SiteFooter />
          </div>
        </CurrencyProvider>
      </body>
    </html>
  );
}
