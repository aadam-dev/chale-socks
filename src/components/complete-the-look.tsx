import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import { ProductPrice } from "@/components/product-price";

export function CompleteTheLook({ excludeSlug }: { excludeSlug: string }) {
  const picks = products.filter((p) => p.slug !== excludeSlug).slice(0, 2);

  if (picks.length === 0) return null;

  return (
    <section className="mt-10 border-t border-black/10 pt-8">
      <h2 className="font-headline text-lg font-bold tracking-tight">
        Complete the look
      </h2>
      <p className="mt-1 text-sm text-black/60">
        Pair patterns that share the same cultural energy.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {picks.map((p) => (
          <Link
            key={p.slug}
            href={`/product/${p.slug}`}
            className="blueprint-border group liquid-transition flex gap-4 rounded-2xl bg-white p-3 hover:shadow-md"
          >
            <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={p.studioImage}
                alt={p.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="96px"
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.15em] text-black/50">
                {p.category}
              </p>
              <p className="font-headline truncate font-semibold">{p.name}</p>
              <p className="text-sm font-medium">
                <ProductPrice value={p.priceUsd} />
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
