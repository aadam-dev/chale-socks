import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Sizing, orders, bundles, and shipping help for Chalé Socks.",
};

export default function FaqPage() {
  return (
    <section className="section-shell mt-10 max-w-3xl md:mt-12">
      <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">FAQ</h1>
      <div className="blueprint-border mt-8 rounded-2xl bg-white/70 p-6 backdrop-blur-sm md:p-8">
        <p className="text-sm leading-relaxed text-black/75">
          Need help with sizing, orders, or bundles? Reach out to support and we will
          guide you through product fit, currency display, and delivery options.
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-sm text-black/75">
          <li>Sizing charts ship with every athletic line listing.</li>
          <li>Bundle pricing updates live as you adjust quantity.</li>
          <li>Currency can be switched anytime from the header.</li>
        </ul>
      </div>
    </section>
  );
}
