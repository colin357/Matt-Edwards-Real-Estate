"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface PhotoGridProps {
  images: string[];
  title: string;
}

export default function PhotoGrid({ images, title }: PhotoGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : i === 0 ? images.length - 1 : i - 1
    );
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : i === images.length - 1 ? 0 : i + 1
    );
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex, close, prev, next]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Mosaic Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px] gap-2 lg:gap-3 grid-flow-dense">
        {images.map((image, index) => {
          // Every 7th image is a large featured tile (2 cols, 2 rows)
          const isLarge = index % 7 === 0;

          return (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className={`relative overflow-hidden group cursor-pointer ${
                isLarge
                  ? "col-span-2 row-span-2"
                  : ""
              }`}
              aria-label={`View photo ${index + 1} of ${images.length}`}
            >
              <Image
                src={image}
                alt={`${title} - Photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={
                  isLarge
                    ? "(max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                }
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/60 to-transparent">
            <p className="text-white text-sm font-medium">
              {title} &mdash; {lightboxIndex + 1} / {images.length}
            </p>
            <button
              onClick={close}
              className="text-white/80 hover:text-white transition-colors p-1"
              aria-label="Close gallery"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Main Image */}
          <div className="absolute inset-0 flex items-center justify-center pt-14 pb-28">
            <div className="relative w-full h-full">
              <Image
                src={images[lightboxIndex]}
                alt={`${title} - Photo ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Prev / Next Buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 transition-colors"
            aria-label="Previous photo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white p-3 transition-colors"
            aria-label="Next photo"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent pt-6 pb-4 px-4">
            <div className="flex gap-2 overflow-x-auto justify-center max-w-5xl mx-auto scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`relative shrink-0 w-16 h-12 overflow-hidden transition-all ${
                    index === lightboxIndex
                      ? "ring-2 ring-[var(--gold)] opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`Go to photo ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
