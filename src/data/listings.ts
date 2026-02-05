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
  features: string[];
  images: string[];
  videoUrl?: string;
  status: 'available' | 'pending' | 'sold';
  propertyType: 'single-family' | 'condo' | 'penthouse' | 'waterfront' | 'estate';
  yearBuilt?: number;
  lotSize?: string;
  featured: boolean;
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
images: [
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/twq7vgxtwjxpvwfalvr7',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/r6p4uupflf3jtxombe18',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/2409edd5-dbd5-4550-a8fa-e982f01cd44b',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/7c86b554-1f13-48f3-8395-1e07b610c934',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/22b77447-45fd-49f3-8982-5b91301988e9',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/30973865-4ffd-4fdc-a8a8-820cdae5cf34',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/1804a205-fb83-4623-8cf3-4a44b1d94bd2',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/799fa9ba-3944-4a86-9227-3ddc36f1dd3c',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/efc78ca0-4f97-4222-8cad-10aa1262fa26',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/f18d1d49-8204-4940-a84b-9affe08e0fd4',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/e38cf821-8247-47bc-8a39-e39f0e6f4f32',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/aefd86ea-002f-4b6f-bf65-55b415e8182d',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/cce42fb0-290e-4398-8701-16cd2faeeba2',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/dff5dec2-99bc-435d-bd12-c4823d832fa3',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/549ac861-5abe-4f9c-86aa-749bb025c85c',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/d047fb66-93a4-4908-9fc8-7916931cde4e',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/92e6cec2-76f1-4b0c-959a-a5ffe3f6f21a',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/e3abd68d-7f86-4244-bcd3-4894bd43423a',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/dcc50323-9da5-4830-b36c-96705bc31c81',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/583e4f35-ce85-40dc-a236-5c5bf24e0a34',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/b7ae0e7d-2b56-4f32-8897-36de43969697',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/d5fc6444-216d-42a3-92a5-709e151844de',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/211e24f0-cf1e-45f2-9bce-0f465cbb60e0',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/626e101e-9cfa-4809-8694-42c07968d70d',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85/https://media-production.lp-cdn.com/media/fb0c1d12-efb3-49ac-ae99-39b9b7525532',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/79d27cd6-abd0-4c63-b4cc-5989507a777a',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/0200861e-d3b2-49e7-ac3a-7e02506cfe20',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/a5eb70e7-174b-4468-bd2f-0c01de66032c',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/bfcace94-fd04-4283-83c8-c4ec55b37986',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/975b58b7-89bd-4e17-bfae-4a5ed8e8a42d',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/517067a2-ce6f-4579-b18f-e3b0b036b0d2',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/c715aadc-fd23-41a5-8300-817a758eb7e5',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/a120ad32-292c-49f7-b575-c56924ab4684',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1920/https://media-production.lp-cdn.com/media/562baf26-cddb-4f07-908b-0c5393748d3c',
  'https://media-production.lp-cdn.com/cdn-cgi/image/format=auto,quality=85,fit=scale-down,width=1280/https://media-production.lp-cdn.com/media/ibg7agcxrzkgscqjfilj'
    ],
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
    features: [
      '360-degree views',
      'Full-floor residence',
      'Private elevator',
      'Multiple terraces',
      'Custom Italian kitchen',
      'Primary suite with bay views',
      'Building spa & fitness center',
      '24-hour concierge',
      'Valet parking',
      '2 dedicated parking spaces'
    ],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    ],
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
    features: [
      'Historic Mediterranean architecture',
      '1-acre gated lot',
      'Pool with cabana',
      'Tennis court',
      'Outdoor kitchen',
      'Library & study',
      'Wine cellar',
      'Guest house',
      'Mature tropical landscaping',
      '3-car garage'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200',
    ],
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
    features: [
      'Restored Art Deco architecture',
      'Waterfront with private dock',
      'Pool overlooking water',
      'Original terrazzo floors',
      'Chef\'s kitchen',
      'Primary suite floor',
      'Impact windows throughout',
      'New roof & systems',
      'Lush landscaping',
      '2-car garage'
    ],
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200',
    ],
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
    features: [
      'Contemporary architecture',
      '20-foot ceilings',
      'Walls of glass',
      'Infinity pool',
      'Summer kitchen',
      'Private guest suite',
      'Smart home technology',
      'Tropical gardens',
      'Walking distance to village',
      'Gated entry'
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    ],
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
    features: [
      'Fisher Island exclusivity',
      'Direct ocean views',
      'Recently renovated',
      'Gaggenau appliances',
      'Private beach club access',
      'Golf & tennis',
      'Deep-water marina',
      'Full-service spa',
      '24-hour security',
      'Multiple parking spaces'
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    ],
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
