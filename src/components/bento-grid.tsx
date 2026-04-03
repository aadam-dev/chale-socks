import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export function BentoGrid() {
  return (
    <section className="section-shell mt-16 md:mt-20">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-headline text-3xl font-medium tracking-tight md:text-4xl text-primary">
            Curated Collections
          </h2>
          <p className="mt-2 text-[15px] font-light text-primary/60">For the culture. For the city. Discover authentic patterns.</p>
        </div>
        <Link href="/collections" className="text-[11px] font-medium uppercase tracking-widest text-chale-gold hover:text-white transition-colors border-b border-chale-gold hover:border-white pb-1 mb-2">
          View all
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-6 md:grid-rows-2">
        <div className="md:col-span-4">
          <ProductCard product={products[0]} index={0} />
        </div>
        <div className="md:col-span-2">
          <ProductCard product={products[1]} index={1} />
        </div>
        <div className="md:col-span-2">
          <ProductCard product={products[2]} index={2} />
        </div>
        <div className="md:col-span-4">
          <ProductCard product={products[3]} index={3} />
        </div>
      </div>
    </section>
  );
}
