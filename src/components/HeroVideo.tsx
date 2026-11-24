"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/site";

/**
 * Background video for the homepage hero. Uses only the poster image (no video download)
 * when the visitor prefers reduced motion.
 */
const query = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(query);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export default function HeroVideo() {
  // Server render: no video (poster only). Client: play unless reduced motion is preferred.
  const play = useSyncExternalStore(
    subscribe,
    () => !window.matchMedia(query).matches,
    () => false,
  );

  if (!play || !site.heroVideoUrl) return null;

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={site.heroPoster}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={site.heroVideoUrl} type="video/mp4" />
    </video>
  );
}
