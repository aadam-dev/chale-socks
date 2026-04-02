import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping timelines and processing for Chalé Socks orders.",
};

export default function ShippingPolicyPage() {
  return (
    <section className="section-shell mt-10 max-w-3xl md:mt-12">
      <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
        Shipping Policy
      </h1>
      <div className="blueprint-border mt-8 rounded-2xl bg-white/70 p-6 backdrop-blur-sm md:p-8">
        <p className="text-sm leading-relaxed text-black/75">
          Orders are processed within 1–2 business days. Delivery timelines vary by
          region; domestic Ghana routes are prioritized where possible.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-black/75">
          You will receive tracking details when your package ships. For questions,
          contact support with your order number.
        </p>
      </div>
    </section>
  );
}
