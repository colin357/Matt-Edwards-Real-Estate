"use client";

import Script from "next/script";
import { site } from "@/lib/site";

/**
 * Third-party IDX listings widget. Loads the vendor script lazily (after the page is idle)
 * using site.idx.scriptUrl. Renders nothing until an IDX vendor is configured.
 * TODO(Matt): once the vendor is chosen, adjust the container attributes to match their embed code.
 */
export default function ListingsEmbed({
  area,
  title = "Featured Listings",
  className = "",
}: {
  area: string;
  title?: string;
  className?: string;
}) {
  if (!site.idx.scriptUrl) return null;

  return (
    <section className={`bg-white py-20 ${className}`} aria-label={`${title}: ${area}`}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-10">
          <p className="eyebrow">Live Listings</p>
          <h2 className="section-title text-3xl md:text-5xl text-[var(--ink)] mt-5">{title}</h2>
        </div>
        <div className="idx-embed min-h-[400px]" data-idx-area={area} data-idx-vendor={site.idx.vendor} />
        <Script src={site.idx.scriptUrl} strategy="lazyOnload" />
      </div>
    </section>
  );
}
