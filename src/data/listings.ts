export interface Listing {
  id: string;
  slug: string;
  title: string;
  address: string;
  neighborhood: string;
  price: number;
  priceFormatted: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  sqftFormatted: string;
  description: string;
  shortDescription: string;
  // Number of photos in /public/listings/{slug}/ folder (named 1.ext, 2.ext, etc.)
  // Used as fallback when filesystem auto-detection is unavailable
  imageCount: number;
  // Default file extension for listing photos (e.g., 'webp', 'avif', 'jpg', 'jpeg', 'png')
  // Used as fallback when filesystem auto-detection is unavailable
  imageDefaultExt?: string;
  // Override file extensions for specific image numbers (e.g., { 18: 'avif', 23: 'jpg' })
  // Used as fallback when filesystem auto-detection is unavailable
  imageExtOverrides?: Record<number, string>;
  videoUrl?: string;
  status: 'available' | 'pending' | 'sold';
  propertyType: 'single-family' | 'condo' | 'penthouse' | 'waterfront' | 'estate';
  yearBuilt?: number;
  lotSize?: string;
  featured: boolean;
}

/** Supported image file extensions for listing photos */
const IMAGE_EXTENSIONS = new Set([
  'webp', 'avif', 'jpg', 'jpeg', 'png', 'gif', 'tiff', 'bmp', 'svg',
]);

/**
 * Generates image paths for a listing.
 *
 * Primary: auto-detects images from the filesystem by scanning
 * /public/listings/{slug}/ for files named with a numeric prefix (e.g., 1.webp,
 * 2.avif, 3.jpg). Supports any common image format (webp, avif, jpg, jpeg, png, etc.).
 *
 * Fallback: if the filesystem is unavailable, uses the listing's imageCount,
 * imageDefaultExt, and imageExtOverrides fields to build paths manually.
 *
 * To add photos to a listing:
 * 1. Add your photos to /public/listings/{slug}/
 * 2. Name them with numeric prefixes: 1.webp, 2.jpg, 3.avif, etc.
 *    Any mix of formats is supported.
 * 3. Images are sorted numerically and served automatically.
 */
export function getListingImages(listing: Listing): string[] {
  // Try auto-detection from filesystem (works in server components / build time)
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const fs = require('fs');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const pathMod = require('path');

    const dir = pathMod.join(process.cwd(), 'public', 'listings', listing.slug);
    const files: string[] = fs.readdirSync(dir);

    const imageFiles = files
      .filter((file: string) => {
        const ext = file.split('.').pop()?.toLowerCase();
        return ext && IMAGE_EXTENSIONS.has(ext) && /^\d+\./.test(file);
      })
      .sort((a: string, b: string) => parseInt(a) - parseInt(b))
      .map((file: string) => `/listings/${listing.slug}/${file}`);

    if (imageFiles.length > 0) return imageFiles;
  } catch {
    // Filesystem not available — fall through to manual approach
  }

  // Fallback: manual path generation from listing data
  const images: string[] = [];
  for (let i = 1; i <= listing.imageCount; i++) {
    const ext = listing.imageExtOverrides?.[i] ?? listing.imageDefaultExt ?? 'webp';
    images.push(`/listings/${listing.slug}/${i}.${ext}`);
  }
  return images;
}

// Add listings here. Photos go in /public/listings/{slug}/ (see getListingImages above).
export const listings: Listing[] = [];

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find(listing => listing.slug === slug);
}

export function getFeaturedListings(): Listing[] {
  return listings.filter(listing => listing.featured);
}

export function getAllListings(): Listing[] {
  return listings;
}
