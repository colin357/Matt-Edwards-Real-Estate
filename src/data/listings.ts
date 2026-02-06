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
    slug: 'penthouse-brickell-skyline',
    title: 'Brickell Skyline Penthouse',
    address: '1000 Brickell Avenue, PH1',
    neighborhood: 'Brickell',
    price: 8900000,
    priceFormatted: '$8,900,000',
    bedrooms: 4,
    bathrooms: 5,
    sqft: 5200,
    sqftFormatted: '5,200',
    shortDescription: 'Stunning full-floor penthouse with 360-degree views of Miami skyline and Biscayne Bay.',
    description: `Perched atop one of Brickell's most prestigious towers, this full-floor penthouse offers an extraordinary living experience with 360-degree views encompassing the Miami skyline, Biscayne Bay, and the Atlantic Ocean.

The residence features a grand open floor plan with 12-foot ceilings, creating an atmosphere of light and space. The living areas flow seamlessly to multiple terraces, perfect for entertaining or enjoying Miami's spectacular sunsets.

The custom Italian kitchen features Miele appliances, marble countertops, and a butler's pantry. The primary suite is a private retreat with a sitting area, dual walk-in closets, and a spa bathroom with soaking tub overlooking the bay.

Building amenities include a rooftop pool, full-service spa, state-of-the-art fitness center, residents' lounge, and 24-hour concierge service.`,
    imageCount: 0, // Add photos to /public/listings/penthouse-brickell-skyline/
    status: 'available',
    propertyType: 'penthouse',
    yearBuilt: 2019,
    featured: true,
  },
  {
    id: '3',
    slug: 'coral-gables-mediterranean-estate',
    title: 'Mediterranean Revival Estate',
    address: '4500 Granada Boulevard',
    neighborhood: 'Coral Gables',
    price: 15750000,
    priceFormatted: '$15,750,000',
    bedrooms: 6,
    bathrooms: 8,
    sqft: 9800,
    sqftFormatted: '9,800',
    shortDescription: 'Exquisite Mediterranean estate on a lush acre with historic charm and modern amenities.',
    description: `This magnificent Mediterranean Revival estate represents the finest of Coral Gables living. Set on a lush, manicured acre, the home masterfully blends historic architectural details with contemporary luxury and technology.

Original features including hand-painted ceiling murals, intricate ironwork, and coral stone fireplaces have been meticulously preserved, while the home has been completely updated with modern systems and amenities.

The grounds feature mature tropical landscaping, a resort-style pool with cabana, outdoor kitchen, and tennis court. The property offers exceptional privacy while being moments from the shops and restaurants of Miracle Mile.

A true entertainer's dream, the home includes a formal living room, dining room, library, family room, and a spectacular great room that opens to the pool terrace.`,
    imageCount: 0, // Add photos to /public/listings/coral-gables-mediterranean-estate/
    status: 'available',
    propertyType: 'estate',
    yearBuilt: 1928,
    lotSize: '1 acre',
    featured: true,
  },
  {
    id: '4',
    slug: 'miami-beach-art-deco-villa',
    title: 'Art Deco Villa',
    address: '2400 Pine Tree Drive',
    neighborhood: 'Miami Beach',
    price: 11200000,
    priceFormatted: '$11,200,000',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 6800,
    sqftFormatted: '6,800',
    shortDescription: 'Restored Art Deco gem with waterfront views and private dock in prestigious Miami Beach.',
    description: `A rare opportunity to own a piece of Miami Beach history. This stunning Art Deco villa has been impeccably restored and updated to offer the best of both worlds: timeless architectural beauty and modern luxury living.

Located on prestigious Pine Tree Drive, the home offers waterfront views with a private dock capable of accommodating a 60-foot yacht. The interior showcases original Art Deco details including terrazzo floors, curved walls, and porthole windows, all beautifully complemented by contemporary finishes.

The open floor plan is ideal for entertaining, with the living spaces flowing to an expansive pool deck overlooking the water. The chef's kitchen features custom cabinetry and professional-grade appliances.

The primary suite occupies the entire second floor, offering water views, a sitting area, and a luxurious bathroom. Four additional bedroom suites provide comfort for family and guests.`,
    imageCount: 0, // Add photos to /public/listings/miami-beach-art-deco-villa/
    status: 'available',
    propertyType: 'waterfront',
    yearBuilt: 1935,
    lotSize: '15,000 sq ft',
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
