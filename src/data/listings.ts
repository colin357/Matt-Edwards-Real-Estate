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
  // Number of photos in /public/listings/{slug}/ folder (named 1.webp, 2.webp, etc.)
  imageCount: number;
  // Override file extensions for specific image numbers (e.g., { 18: 'avif' })
  imageExtOverrides?: Record<number, string>;
  videoUrl?: string;
  status: 'available' | 'pending' | 'sold';
  propertyType: 'single-family' | 'condo' | 'penthouse' | 'waterfront' | 'estate';
  yearBuilt?: number;
  lotSize?: string;
  featured: boolean;
}

/**
 * Generates image paths for a listing based on the imageCount.
 * Photos should be stored in /public/listings/{slug}/ as 1.webp, 2.webp, etc.
 *
 * To add photos to a listing:
 * 1. Add your photos to /public/listings/{slug}/
 * 2. Name them sequentially: 1.webp, 2.webp, 3.webp, etc.
 * 3. Update the imageCount in the listing data
 * 4. For non-webp images, add entries to imageExtOverrides (e.g., { 18: 'avif' })
 */
export function getListingImages(listing: Listing): string[] {
  const images: string[] = [];
  for (let i = 1; i <= listing.imageCount; i++) {
    const ext = listing.imageExtOverrides?.[i] ?? 'webp';
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
  imageCount: 0,
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
  imageCount: 0,
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
  imageCount: 0,
  status: 'available',
  propertyType: 'single-family',
  yearBuilt: 1989,
  lotSize: '0.41 acres',
  featured: false,
},
  {
    id: '5',
    slug: 'coconut-grove-modern-retreat',
    title: 'Modern Grove Retreat',
    address: '3200 Devon Road',
    neighborhood: 'Coconut Grove',
    price: 7450000,
    priceFormatted: '$7,450,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5500,
    sqftFormatted: '5,500',
    shortDescription: 'Architectural masterpiece featuring clean lines, natural materials, and seamless indoor-outdoor living.',
    description: `This contemporary architectural masterpiece in Coconut Grove represents the perfect fusion of modern design and tropical living. Designed by a renowned Miami architect, the home features clean lines, soaring ceilings, and walls of glass that blur the boundaries between inside and out.

Natural materials including ipe wood, coral stone, and floor-to-ceiling windows create a warm, sophisticated atmosphere. The open floor plan centers on a spectacular great room with 20-foot ceilings and sliding glass walls that open completely to the outdoor living areas.

The grounds feature a heated infinity pool, summer kitchen, and lush tropical gardens designed for privacy. A separate guest suite with its own entrance provides flexibility for extended family or visitors.

Located in the heart of Coconut Grove, the home is walking distance to boutiques, galleries, cafes, and the waterfront parks that define this beloved neighborhood.`,
    imageCount: 0, // Add photos to /public/listings/coconut-grove-modern-retreat/
    status: 'available',
    propertyType: 'single-family',
    yearBuilt: 2021,
    lotSize: '18,000 sq ft',
    featured: false,
  },
  {
    id: '6',
    slug: 'fisher-island-waterfront-condo',
    title: 'Fisher Island Waterfront',
    address: '7000 Fisher Island Drive, #7042',
    neighborhood: 'Fisher Island',
    price: 19500000,
    priceFormatted: '$19,500,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 7200,
    sqftFormatted: '7,200',
    shortDescription: 'Ultra-exclusive Fisher Island residence with direct ocean views and world-class amenities.',
    description: `Experience the ultimate in exclusive island living with this extraordinary residence on Fisher Island, accessible only by ferry or private yacht. This exceptional home offers sweeping views of the Atlantic Ocean, Government Cut, and the Miami skyline.

Recently renovated to the highest standards, the residence features an open floor plan with seamless flow between living spaces. Floor-to-ceiling windows maximize the spectacular views from every room. The gourmet kitchen is equipped with Gaggenau appliances and features a large center island perfect for casual dining.

The expansive primary suite includes a sitting area, dual walk-in closets, and a spa-like bathroom with ocean views. Four additional bedroom suites offer comfort and privacy for family and guests.

Fisher Island offers unparalleled amenities including a private beach club, world-class golf course, deep-water marina, tennis center, spa, and multiple dining venues.`,
    imageCount: 0, // Add photos to /public/listings/fisher-island-waterfront-condo/
    status: 'available',
    propertyType: 'condo',
    yearBuilt: 2015,
    featured: true,
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
