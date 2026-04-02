import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";

export default function StoriesPage() {
  return (
    <section className="section-shell mt-10 md:mt-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
            Archives
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/70">
            Horizontal lookbook: each pattern paired with proverb and meaning—culture
            you can wear.
          </p>
        </div>
        <Link href="/collections" className={buttonVariants({ variant: "outline", size: "sm" })}>
          Shop collections
        </Link>
      </div>

      <div
        className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        tabIndex={0}
        aria-label="Story lookbook"
      >
        {stories.map((story) => (
          <article
            key={story.title}
            className="blueprint-border snap-start rounded-2xl bg-white p-3 shadow-sm min-[420px]:min-w-[min(360px,calc(100vw-3rem))] min-[420px]:max-w-[360px] w-[min(100%,360px)] shrink-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-black/[0.03]">
              <Image
                src={story.image}
                alt={story.title}
                fill
                sizes="360px"
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 font-headline text-xl font-bold">{story.title}</h2>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-black/50">
              {story.proverb}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-black/75">{story.meaning}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
