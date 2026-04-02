import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns",
  description: "Returns and exchanges policy for Chalé Socks.",
};

export default function ReturnsPage() {
  return (
    <section className="section-shell mt-10 max-w-3xl md:mt-12">
      <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">Returns</h1>
      <div className="blueprint-border mt-8 rounded-2xl bg-white/70 p-6 backdrop-blur-sm md:p-8">
        <p className="text-sm leading-relaxed text-black/75">
          Unworn products may be returned within 14 days of delivery with proof of
          purchase. Items must include original packaging where applicable.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-black/75">
          Exchanges are offered subject to inventory. Final sale items will be noted
          on the product page.
        </p>
      </div>
    </section>
  );
}
