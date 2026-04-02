import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/50">404</p>
      <h1 className="mt-3 font-headline text-3xl font-bold md:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-black/65">
        This path does not exist. Head back to collections or the home gallery.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className={buttonVariants({ variant: "accent", size: "lg" })}>
          Back home
        </Link>
      </div>
    </div>
  );
}
