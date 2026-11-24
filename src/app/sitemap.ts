import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { neighborhoods } from "@/data/neighborhoods";
import { comparisons } from "@/data/comparisons";
import { getAllListings } from "@/data/listings";
import { buildings, isBuildingPublished } from "@/data/buildings";
import { publishedReports } from "@/data/marketReports";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  const listings = getAllListings();

  return [
    page("", 1, "weekly"),
    page("/south-of-fifth-condos", 0.9, "weekly"),
    page("/sell", 0.9),
    page("/about", 0.7),
    page("/faq", 0.8),
    ...neighborhoods.map((n) => page(`/neighborhoods/${n.slug}`, 0.8)),
    ...comparisons.map((c) => page(`/faq/${c.slug}`, 0.7)),
    // Building pages and market reports join the sitemap automatically once they have real content.
    ...buildings.filter(isBuildingPublished).map((b) => page(`/buildings/${b.slug}`, 0.8, "weekly")),
    ...(publishedReports().length ? [page("/market-reports", 0.6, "weekly")] : []),
    ...publishedReports().map((r) => page(`/market-reports/${r.month}`, 0.6)),
    ...(listings.length ? [page("/listings", 0.7, "weekly")] : []),
    ...listings.map((l) => page(`/listings/${l.slug}`, 0.6, "weekly")),
  ];
}
