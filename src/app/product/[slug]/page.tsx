import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { products } from "@/lib/data";
import { BundleCalculator } from "@/components/bundle-calculator";
import { CompleteTheLook } from "@/components/complete-the-look";
import { MobileAddToBag } from "@/components/mobile-add-to-bag";
import { ProductPrice } from "@/components/product-price";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return { title: "Product" };
  }
  return {
    title: product.name,
    description: `${product.name} — ${product.storyBadge}`,
    openGraph: {
      title: `${product.name} | Chalé Socks`,
      description: product.storyBadge,
      images: [{ url: product.studioImage, width: 1200, height: 1500, alt: product.name }],
    },
  };
}

export default async function ProductPage(props: PageProps<"/product/[slug]">) {
  const params = await props.params;
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="section-shell mt-8 md:mt-12">
        <nav className="mb-6 flex flex-wrap items-center gap-1 text-xs text-black/55" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-obsidian">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <Link href="/collections" className="hover:text-obsidian">
            Collections
          </Link>
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span className="text-obsidian">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="blueprint-border relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
              <Image
                src={product.studioImage}
                alt={`${product.name} — studio`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="blueprint-border relative aspect-[4/5] overflow-hidden rounded-2xl bg-white">
              <Image
                src={product.lifestyleImage}
                alt={`${product.name} — lifestyle`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <aside className="blueprint-border h-fit rounded-2xl bg-white/60 p-6 backdrop-blur-sm lg:sticky lg:top-28">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/55">
              {product.category}
            </p>
            <h1 className="mt-2 font-headline text-3xl font-bold tracking-tight md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold tabular-nums">
              <ProductPrice value={product.priceUsd} />
            </p>
            <p className="mt-5 border-l-2 border-obsidian pl-4 text-sm leading-relaxed text-black/75">
              {product.storyBadge}
            </p>
            <Button type="button" variant="primary" className="mt-8 w-full" size="lg">
              Add to Bag
            </Button>
            <div className="mt-6">
              <BundleCalculator unitPrice={product.priceUsd} />
            </div>
            <CompleteTheLook excludeSlug={product.slug} />
          </aside>
        </div>
      </section>
      <MobileAddToBag label={product.name} />
    </>
  );
}
