"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, close, prev, next]);

  if (images.length === 0) return null;

  return (
    <>
      {/* View All Photos Button — overlaid on the hero grid */}
      <button
        onClick={() => open(0)}
        className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-[var(--charcoal)] px-4 py-2 text-sm font-medium tracking-wide hover:bg-white transition-colors flex items-center gap-2 shadow-lg"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        View All {images.length} Photos
      </button>

      {/* Clickable overlays on each hero image */}
      <div className="absolute inset-0 z-[5] grid grid-cols-1 lg:grid-cols-2">
        <button
          onClick={() => open(0)}
          className="cursor-pointer w-full h-full"
          aria-label={`View photo 1 of ${images.length}`}
        />
        <div className="hidden lg:grid grid-cols-2 grid-rows-2">
          {images.slice(1, 5).map((_, index) => (
            <button
              key={index}
              onClick={() => open(index + 1)}
              className="cursor-pointer w-full h-full"
              aria-label={`View photo ${index + 2} of ${images.length}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black">
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/60 to-transparent">
            <p className="text-white text-sm font-medium">
              {title} &mdash; {currentIndex + 1} / {images.length}
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
                src={images[currentIndex]}
                alt={`${title} - Photo ${currentIndex + 1}`}
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
                  onClick={() => setCurrentIndex(index)}
                  className={`relative shrink-0 w-16 h-12 overflow-hidden transition-all ${
                    index === currentIndex
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
