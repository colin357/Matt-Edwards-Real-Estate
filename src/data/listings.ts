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

// Sample listings - replace with real data or CMS integration
export const listings: Listing[] = [
  {
    id: '1',
    slug: 'fisher-island-mansion-7',
    title: 'Fisher Island Mansion No. 7',
    address: '1007 Fisher Island Drive',
    neighborhood: 'Miami Beach',
    price: 55000000,
    priceFormatted: '$55,000,000',
    bedrooms: 8,
    bathrooms: 12,
    sqft: 15801,
    sqftFormatted: '15,801',
    shortDescription: 'THE GRANDE DAME OF FISHER ISLAND... THE MEGA MANSION No.7 SITS ON OVER HALF ACRE OF LUSH GARDENS & WATER FEATURES WITH STUNNING DIRECT BAY & GOLF COURSE VIEWS!',
    description: `THE GRANDE DAME OF FISHER ISLAND... THE MEGA MANSION No.7 SITS ON OVER HALF ACRE OF LUSH GARDENS & WATER FEATURES WITH STUNNING DIRECT BAY & GOLF COURSE VIEWS! This Modern Tuscan Mansion features over 15,800 SF of Interior Living Space + Massive Outdoor Spaces for Entertaining. The Largest & Most Opulent Mansion on Fisher Island features 8 Bedrooms + 10 Bathrooms + 2 Powder Rooms. European White Premium select Oak Flooring & Italian Stone throughout--Italian Kitchen equipped with top-of-the-line Wolf & Sub-Zero Appliances. Expansive Master Suite with His & Hers Baths features Dornbracht Fixtures + Huge Dressing Rooms. Infinity Edge Pool & Spa. Rooftop with Wellness areas + Yoga Meditation Deck with 360-degree views. Architecture by Portuondo Perotti Architects. 4 Car Garage + Large Driveway.`,
    imageCount: 32,
    imageExtOverrides: { 18: 'avif', 23: 'avif' },
    status: 'available',
    propertyType: 'single-family',
    yearBuilt: 2026,
    lotSize: '0.54 acres',
    featured: true,
  },
{
  id: '2',
  slug: '126-w-san-marino-dr-miami-beach',
  title: '126 W San Marino Drive',
  address: '126 W San Marino Dr, Miami Beach, FL 33139',
  neighborhood: 'Venetian Islands',
  price: 37000000,
  priceFormatted: '$37,000,000',
  bedrooms: 5,
  bathrooms: 7.5,
  sqft: 7890,
  sqftFormatted: '7,890',
  shortDescription: 'Rare modern waterfront estate on Venetian Islands with skyline and bay views.',
  description: `Located on the coveted south side of San Marino Island, this waterfront estate offers expansive views of Biscayne Bay and the Miami skyline. Situated on a lot and a half with 90 feet of water frontage and a multi-vessel dock with lift and jet ski platforms, the residence blends modern design with tropical appeal. 

The open floor plan is defined by 10-foot telescopic Fleetwood glass doors that create seamless indoor/outdoor living. Blonde oak floors, a gourmet eat-in kitchen with gas range and stainless Miele appliances, and a separate catering kitchen with pantry and service entrance elevate daily life and entertaining. Additional living spaces include a comfortable breakfast area, wine room, bar, and family room. 

The primary suite is a private retreat with panoramic sunset views, two dressing rooms, and a book-matched marble bath with rain shower and deep soaking tub. Outdoor amenities include wraparound terraces, an expansive rooftop entertaining area with pool and spa, a modern gazebo with summer kitchen and cabana bath, a privacy gate, and a two-car garage.`,
  imageCount: 54,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2018,
  featured: true,
},
{
  id: '3',
  slug: '1004-fisher-island-drive-miami-beach',
  title: '1004 Fisher Island Drive',
  address: '1004 Fisher Island Drive, Miami Beach, FL 33109',
  neighborhood: 'Fisher Island',
  price: 36500000,
  priceFormatted: '$36,500,000',
  bedrooms: 8,
  bathrooms: 12,
  sqft: 10648,
  sqftFormatted: '10,648',
  shortDescription: 'Exclusive Fisher Island estate with waterfront access and extraordinary customization potential.',
  description: `Located in one of the most private and prestigious enclaves in the United States, this rare Fisher Island estate presents an exceptional opportunity to customize a trophy residence exceeding 10,000 square feet. Positioned on an expansive waterfront lot with ocean access, the property commands privacy and expansive views of Biscayne Bay, emerald fairways, and the Miami skyline.

The home offers a grand layout with multiple living spaces, elevator access, and opportunities to tailor interior finishes and exterior landscaping to suit exact lifestyle preferences. Additional features include a pool, ample parking, and proximity to the island’s private club, golf course, marina, and beach amenities.

This offering represents one of the last available estate sites on Fisher Island and invites a purchaser to realize a world-class architectural vision in a setting defined by exclusivity and luxury.`,
  imageCount: 19,
  imageExtOverrides: { 7: 'avif', 12: 'avif' },
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 2006,
  lotSize: '0.37 acres',
  featured: true,
},
{
  id: '4',
  slug: '1005-fisher-island-drive-fisher-island',
  title: '1005 Fisher Island Drive',
  address: '1005 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 29500000,
  priceFormatted: '$29,500,000',
  bedrooms: 7,
  bathrooms: 7.5,
  sqft: 7860,
  sqftFormatted: '7,860',
  shortDescription: 'Elegant waterfront Fisher Island residence with private dock and bay views.',
  description: `Situated on the bayfront of ultra-exclusive Fisher Island, this elegant single-family residence offers direct water access, a private dock, and sweeping views of Biscayne Bay and the Miami skyline. The home blends classic architecture with resort-style living in one of the most secure and private communities in the country.

Interior spaces are defined by generous ceiling heights, abundant natural light, and an open yet functional floor plan designed for both everyday living and entertaining. The gourmet kitchen connects seamlessly to formal and informal living areas, while multiple bedrooms offer ensuite baths and tranquil island views.

Outdoor living is a standout feature, with a waterfront pool, expansive terraces, lush landscaping, and a private dock ideal for yachting enthusiasts. Ownership includes access to Fisher Island Club amenities including golf, tennis, beach club, marina, and private ferry service.`,
  imageCount: 30,
  imageExtOverrides: {
    1: 'avif', 3: 'jpeg', 4: 'jpeg', 5: 'jpeg', 7: 'jpeg', 8: 'jpeg',
    10: 'jpeg', 11: 'jpeg', 12: 'jpeg', 13: 'jpeg', 15: 'avif', 20: 'avif',
  },
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1989,
  lotSize: '0.41 acres',
  featured: true,
},
{
  id: '1003-fisher-island-drive',
  slug: '1003-fisher-island-drive-miami-beach',
  title: '1003 Fisher Island Drive',
  address: '1003 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 28500000,
  priceFormatted: '$28,500,000',
  bedrooms: 7,
  bathrooms: 7.5,
  sqft: 7600,
  sqftFormatted: '7,600',
  shortDescription: 'Prestigious Fisher Island waterfront estate with panoramic bay views and private dock.',
  description: `An exceptional waterfront estate located on Fisher Island, offering expansive views of Biscayne Bay and city skyline. This residence features grand living spaces and a thoughtful layout that takes full advantage of indoor-outdoor Florida living.

The chef’s kitchen is equipped with high-end appliances and opens to light-filled living and dining areas. Multiple ensuite bedrooms include a luxurious primary suite with direct water views. The outdoor space includes a pool, ample terrace areas, and a private dock with deep water access.

The property provides full access to Fisher Island Club amenities including golf, tennis, beach club, marina, and exclusive ferry service, delivering a complete private island lifestyle.`,
  imageCount: 29,
  imageDefaultExt: 'jpg',
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1995,
  lotSize: '0.38 acres',
  featured: false,
},
{
  id: '1009-fisher-island-drive',
  slug: '1009-fisher-island-drive-fisher-island',
  title: '1009 Fisher Island Drive',
  address: '1009 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 32500000,
  priceFormatted: '$32,500,000',
  bedrooms: 7,
  bathrooms: 8.5,
  sqft: 8200,
  sqftFormatted: '8,200',
  shortDescription: 'Premier Fisher Island waterfront residence with direct bay access and luxurious outdoor living.',
  description: `Situated on Fisher Island’s coveted waterfront, this exceptional estate offers expansive views of Biscayne Bay and the Miami skyline. The residence provides a seamless flow between indoor and outdoor spaces, ideal for relaxed living and high-end entertaining.

The chef’s kitchen is equipped with premium appliances and opens to grand living and dining areas with abundant natural light. Multiple ensuite bedrooms include a luxurious primary suite with private balcony and water views. The outdoor area features a waterfront pool, expansive terraces, lush landscaping, and a private dock with deep-water access.

Ownership on Fisher Island includes exclusive access to club amenities such as golf, tennis, beach club, marina, spa, and private ferry service, delivering a complete private-island lifestyle.`,
  imageCount: 34,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1992,
  lotSize: '0.40 acres',
  featured: false,
},
{
  id: '7085-fisher-island-drive',
  slug: '7085-fisher-island-drive-miami-beach',
  title: '7085 Fisher Island Drive',
  address: '7085 Fisher Island Drive, Fisher Island, FL 33109',
  neighborhood: 'Fisher Island',
  price: 17800000,
  priceFormatted: '$17,800,000',
  bedrooms: 5,
  bathrooms: 6.5,
  sqft: 6540,
  sqftFormatted: '6,540',
  shortDescription: 'Elegant waterfront Fisher Island residence with private dock and panoramic bay views.',
  description: `This exceptional Fisher Island waterfront home offers panoramic views of Biscayne Bay and direct water access via a private dock. Designed with both comfort and resort-style living in mind, the residence features generous living spaces with abundant natural light and an open flow between indoor and outdoor entertaining areas.

The gourmet kitchen is equipped with high-end appliances and opens to formal and informal living and dining spaces. Multiple ensuite bedrooms include a luxurious primary suite with water views and private bath.

Outdoor amenities include an expansive pool deck, lush landscaping, and a deep-water dock. Residents enjoy full access to the exclusive Fisher Island Club lifestyle, including golf, tennis, beach club, marina, spa, and private ferry service.`,
  imageCount: 75,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1998,
  lotSize: '0.32 acres',
  featured: false,
},
{
  id: '1417-n-venetian-way',
  slug: '1417-n-venetian-way-miami',
  title: '1417 N Venetian Way',
  address: '1417 N Venetian Way, Miami, FL 33139',
  neighborhood: 'North Venetian Islands',
  price: 24800000,
  priceFormatted: '$24,800,000',
  bedrooms: 6,
  bathrooms: 7.5,
  sqft: 8300,
  sqftFormatted: '8,300',
  shortDescription: 'Exquisite waterfront Venetian Islands estate with deep water dock and skyline views.',
  description: `Located on the prestigious North Venetian Islands, this waterfront estate offers deep water access, panoramic Biscayne Bay views, and spectacular Miami skyline vistas. The residence features an open layout with abundant natural light and seamless indoor-outdoor living spaces ideal for entertaining.

The gourmet kitchen is equipped with high-end appliances and custom cabinetry. Multiple ensuite bedrooms include a luxurious primary suite with private water-facing terrace. Outdoor amenities include a pool, expansive terraces, lush landscaping, and a private dock with deep water access.

Ownership includes convenient proximity to Miami Beach and Key Biscayne, offering the best of city, bay, and island living.`,
  imageCount: 71,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1994,
  lotSize: '0.41 acres',
  featured: false,
},
];

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find(listing => listing.slug === slug);
}

export function getFeaturedListings(): Listing[] {
  return listings.filter(listing => listing.featured);
}

export function getAllListings(): Listing[] {
  return listings;
}
