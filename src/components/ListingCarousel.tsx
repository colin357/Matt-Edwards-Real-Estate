"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export type CarouselListing = {
  slug: string;
  title: string;
  neighborhood: string;
  priceFormatted: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  sqftFormatted: string;
  image?: string;
};

const typeLabel: Record<string, string> = {
  "single-family": "Single Family",
  condo: "Condo",
  penthouse: "Penthouse",
  waterfront: "Waterfront",
  estate: "Estate",
};

export default function ListingCarousel({ listings }: { listings: CarouselListing[] }) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const arrow = "absolute top-[150px] -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--ink)] hover:bg-[var(--navy)] hover:text-white transition-colors";

  return (
    <div className="relative">
      <button type="button" aria-label="Previous listings" onClick={() => scroll(-1)} className={`${arrow} left-1 lg:-left-5`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button type="button" aria-label="Next listings" onClick={() => scroll(1)} className={`${arrow} right-1 lg:-right-5`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>

      <div ref={track} className="no-scrollbar flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {listings.map((l) => (
          <Link
            key={l.slug}
            href={`/listings/${l.slug}`}
            className="group snap-start shrink-0 w-[88%] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)] bg-white"
          >
            <div className="relative h-[300px] overflow-hidden bg-gray-200">
              {l.image && (
                <Image
                  src={l.image}
                  alt={l.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4 left-4 flex items-baseline justify-end gap-3 text-white">
                <span className="text-2xl font-semibold tracking-wide drop-shadow">{l.priceFormatted}</span>
                <span className="text-sm tracking-wider drop-shadow">{typeLabel[l.propertyType] ?? l.propertyType}</span>
              </div>
            </div>
            <div className="text-center py-4 text-[0.95rem] text-[var(--ink)] border-b border-gray-200 group-hover:text-[var(--navy)] transition-colors">
              {l.title}, {l.neighborhood}
            </div>
            <div className="py-5 px-6 text-sm text-[var(--charcoal-light)]">
              <div className="flex justify-center gap-16">
                <span>{l.bedrooms} Beds</span>
                <span>{l.bathrooms} Baths</span>
              </div>
              <p className="text-center mt-2">{l.sqftFormatted} Sq Ft</p>
              <p className="text-center mt-3 text-[10px] tracking-wider text-[var(--muted)]">Listed by Dora Puig · Luxe Living Realty</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
