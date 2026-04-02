import Link from "next/link";
import { products } from "@/lib/data";
import type { Product } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { cn } from "@/lib/utils";

const categories: Product["category"][] = [
  "Adinkra",
  "Afrocentric",
  "Kente",
  "Gift Packs",
];

type SearchParams = Promise<{ category?: string }>;

export default async function CollectionsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { category } = await searchParams;
  const normalized = category?.replace(/\+/g, " ");
  const filtered =
    normalized && categories.includes(normalized as Product["category"])
      ? products.filter((p) => p.category === normalized)
      : products;

  return (
    <section className="section-shell mt-10 md:mt-12">
      <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
        Collections
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/70">
        Editorial catalog: asymmetrical rhythm, studio-to-lifestyle reveals, and
        one-line cultural meaning on every pattern.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <FilterChip href="/collections" active={!normalized}>
          All
        </FilterChip>
        {categories.map((cat) => (
          <FilterChip
            key={cat}
            href={`/collections?category=${encodeURIComponent(cat)}`}
            active={normalized === cat}
          >
            {cat}
          </FilterChip>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-black/60">
          No products in this category yet.{" "}
          <Link href="/collections" className="font-medium underline underline-offset-2">
            View all
          </Link>
          .
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "blueprint-border liquid-transition rounded-full px-4 py-2 text-xs font-medium",
        active ? "bg-obsidian text-coconut" : "bg-white text-obsidian hover:bg-black/[0.04]"
      )}
    >
      {children}
    </Link>
  );
}
