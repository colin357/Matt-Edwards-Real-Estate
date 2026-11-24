import type { Metadata } from "next";

export const defaultOgImage = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Matt Edwards, ONE Sotheby's International Realty",
};

/**
 * Per-page metadata: title, description, canonical URL, and Open Graph / Twitter
 * tags that match the page (instead of inheriting the homepage's text).
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const images = image ? [{ url: image, width: 1200, height: 630, alt: title }] : [defaultOgImage];
  return {
    title,
    description,
    alternates: { canonical: path || "/" },
    openGraph: {
      title,
      description,
      url: path || "/",
      siteName: "Matt Edwards | ONE Sotheby's International Realty",
      locale: "en_US",
      type,
      images,
    },
    twitter: { card: "summary_large_image", title, description, images: images.map((i) => i.url) },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
