export interface Neighborhood {
  name: string;
  slug: string;
  tagline: string;
  heroImage: string;
  description: string[];
  whatToDo: {
    title: string;
    description: string;
  }[];
  mattsTake: string[];
}

export const neighborhoods: Neighborhood[] = [
  {
    name: "South of Fifth",
    slug: "south-of-fifth",
    tagline: "Miami Beach's Most Exclusive Enclave",
    heroImage: "https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?w=1920&q=80",
    description: [
      "South of Fifth, known as SoFi, is the crown jewel of Miami Beach. Located at the southernmost tip of the island, this intimate neighborhood is home to some of the most prestigious residences in all of South Florida. With the Atlantic Ocean on one side and Biscayne Bay on the other, SoFi offers a rare combination of urban sophistication and waterfront living.",
      "The neighborhood is defined by its world-class condominium towers, including Apogee, Continuum, and Murano Grande, which offer panoramic views and resort-style amenities. Tree-lined streets, art deco architecture, and a walkable layout give SoFi a village-like feel that sets it apart from the rest of Miami Beach.",
      "South Pointe Park, at the very tip of the island, is one of Miami's most beautiful green spaces, offering views of cruise ships, Fisher Island, and the downtown skyline. SoFi is where Miami's most discerning residents choose to call home."
    ],
    whatToDo: [
      {
        title: "South Pointe Park",
        description: "A stunning 17-acre waterfront park with walking paths, a playground, and unobstructed views of Government Cut, Fisher Island, and the downtown skyline."
      },
      {
        title: "Joe's Stone Crab",
        description: "A Miami institution since 1913, Joe's is the quintessential South Beach dining experience. Expect stone crabs, key lime pie, and a legendary wait."
      },
      {
        title: "Prime Italian",
        description: "Located in the Setai, this upscale Italian steakhouse by the Myles Restaurant Group is a favorite among locals and visitors alike."
      },
      {
        title: "South Pointe Pier",
        description: "Walk out to the end of the pier for some of the best views in all of Miami. A perfect spot for sunrise or watching the cruise ships pass."
      },
      {
        title: "First Street Beach",
        description: "A quieter, less crowded stretch of sand compared to the more touristy beaches further north. Locals love it for morning walks and weekend relaxation."
      }
    ],
    mattsTake: [
      "South of Fifth is where I send clients who want the best of the best without the noise. It's Miami Beach for people who actually live here, not just visit. The neighborhood has a residential quality that you won't find anywhere else on the island.",
      "What I love about SoFi is the walkability. You can grab a coffee at Panther, walk your dog through South Pointe Park, have dinner at Macchialina, and never get in your car. For a city built around driving, that's rare and valuable.",
      "From an investment perspective, SoFi has consistently outperformed the rest of Miami Beach. The limited inventory, prime location, and high barriers to entry mean that properties here hold their value exceptionally well. If you're looking for a trophy asset in Miami, this is where to start."
    ]
  },
  {
    name: "Sunset Harbor",
    slug: "sunset-harbor",
    tagline: "Miami Beach's Best-Kept Secret",
    heroImage: "https://images.unsplash.com/photo-1704236600122-56a1401023d3?w=1920&q=80",
    description: [
      "Sunset Harbour is a small but vibrant neighborhood tucked between the Intracoastal Waterway and Dade Boulevard on the west side of Miami Beach. Once an overlooked industrial area, it has transformed into one of the most desirable pockets on the island, known for its boutique fitness studios, chef-driven restaurants, and laid-back waterfront lifestyle.",
      "The neighborhood's appeal lies in its authenticity. Unlike the flashier parts of Miami Beach, Sunset Harbour attracts a community of health-conscious professionals, young families, and creatives who value quality of life over spectacle. The streets are walkable, the restaurants are locally owned, and the energy is distinctly neighborhood-oriented.",
      "Residential options range from renovated mid-century condos to newer luxury developments. Many units offer bay views and direct access to the neighborhood's dining and fitness scene, making Sunset Harbour one of Miami Beach's most livable addresses."
    ],
    whatToDo: [
      {
        title: "Onda by Michael Schwartz",
        description: "Award-winning chef Michael Schwartz brings coastal Italian cuisine to this waterfront restaurant with beautiful bay views."
      },
      {
        title: "SoulCycle & Barry's Bootcamp",
        description: "Sunset Harbour is Miami's unofficial fitness capital. Multiple boutique studios line the streets, making it easy to build a healthy routine."
      },
      {
        title: "Sunset Harbour Marina",
        description: "Rent a paddleboard, take a boat out, or simply enjoy watching the sunset over the Intracoastal from the marina's waterfront."
      },
      {
        title: "Icebox Cafe",
        description: "A neighborhood staple known for its brunch, baked goods, and relaxed atmosphere. A must-visit on weekend mornings."
      },
      {
        title: "Greenmonkey Yoga",
        description: "One of the most popular yoga studios in Miami, offering a variety of classes in a serene, open-air setting."
      }
    ],
    mattsTake: [
      "Sunset Harbour is the neighborhood I recommend to clients who want the Miami Beach zip code without the South Beach chaos. It's where the people who actually live and work on the island spend their time.",
      "The food scene here punches way above its weight. You've got everything from Onda to Lucali to casual poke bowls, all within a few blocks. And because it's not on the tourist radar, you can actually get a table.",
      "For buyers, Sunset Harbour represents strong value relative to the rest of Miami Beach. You get waterfront proximity, walkability, and a genuine neighborhood feel. I've seen tremendous appreciation here over the past five years, and I think there's still room to grow as the area continues to evolve."
    ]
  },
  {
    name: "Brickell",
    slug: "brickell",
    tagline: "Miami's Financial District Meets Urban Living",
    heroImage: "https://images.unsplash.com/photo-1704080864842-2577d94ebb1c?w=1920&q=80",
    description: [
      "Brickell is Miami's most dynamic urban neighborhood. Known as the financial district of South Florida, it has evolved far beyond its corporate roots into a vibrant residential community with world-class dining, nightlife, and retail. The skyline is defined by sleek glass towers that house some of the city's most sought-after condominiums.",
      "Brickell City Centre, a $1.05 billion mixed-use development, serves as the neighborhood's central hub, offering luxury shopping, restaurants, and a climate-controlled open-air design. The surrounding streets are lined with cafes, cocktail bars, and international restaurants that cater to the neighborhood's cosmopolitan population.",
      "The Brickell waterfront along Biscayne Bay provides a scenic backdrop for jogging, cycling, and outdoor dining. With Metromover access and proximity to downtown, Key Biscayne, and Coconut Grove, Brickell offers connectivity that few Miami neighborhoods can match."
    ],
    whatToDo: [
      {
        title: "Brickell City Centre",
        description: "A sprawling mixed-use complex with high-end retail, dining, a cinema, and the climate ribbon, an innovative architectural feature that provides natural ventilation."
      },
      {
        title: "Komodo",
        description: "A three-story indoor/outdoor eatery and lounge serving Southeast Asian cuisine. Known for its vibrant atmosphere and celebrity sightings."
      },
      {
        title: "Brickell Key",
        description: "A small island connected by bridge, offering a quieter residential vibe with waterfront parks and stunning skyline views."
      },
      {
        title: "Simpson Park Hammock",
        description: "A hidden gem in the heart of Brickell, this preserved hardwood hammock is a lush, tranquil escape from the urban energy."
      },
      {
        title: "The Underline",
        description: "A 10-mile linear park and urban trail running beneath the Metrorail, connecting Brickell to Dadeland with art, nature, and recreation."
      }
    ],
    mattsTake: [
      "Brickell is Miami's engine. If you want to be at the center of everything, professionally and socially, this is the neighborhood. The energy here is unlike anywhere else in the city, and it only keeps growing.",
      "I work with a lot of young professionals and international buyers who are drawn to Brickell's lifestyle. The ability to walk to work, hit a world-class restaurant, and be home in an elevator ride is genuinely compelling. It's Manhattan-style living with Miami weather.",
      "From a market perspective, Brickell inventory moves fast. The combination of strong rental demand, international buyer interest, and continuous development means well-priced units don't last long. If you're considering Brickell, I always advise being ready to act decisively."
    ]
  },
  {
    name: "Coconut Grove",
    slug: "coconut-grove",
    tagline: "Miami's Original Neighborhood",
    heroImage: "https://images.unsplash.com/photo-1595111571848-fdf33cfb6cff?w=1920&q=80",
    description: [
      "Coconut Grove is Miami's oldest continuously inhabited neighborhood, and it wears that history well. Founded in the 1800s, the Grove has a bohemian spirit, lush tropical canopy, and waterfront charm that set it apart from every other community in the city. It's where Miami's artistic and intellectual roots run deepest.",
      "The neighborhood centers around CocoWalk, a recently reimagined open-air lifestyle center with boutique shopping, chef-driven dining, and a luxury cinema. Beyond the village center, Coconut Grove is defined by its tree-lined streets, historic estates, and proximity to Biscayne Bay.",
      "The Grove is also home to some of Miami's most important cultural institutions, including the Vizcaya Museum and Gardens, The Barnacle Historic State Park, and the Coconut Grove Arts Festival. For families, the neighborhood offers top-rated schools and a safe, walkable environment with a strong sense of community."
    ],
    whatToDo: [
      {
        title: "Vizcaya Museum & Gardens",
        description: "A stunning Italian Renaissance-style villa and formal gardens on Biscayne Bay. One of Miami's most important historic landmarks and a popular venue for events."
      },
      {
        title: "CocoWalk",
        description: "The recently redeveloped heart of the Grove, featuring upscale dining, shopping, a luxury cinema, and a lively outdoor atmosphere."
      },
      {
        title: "Sailing & Watersports",
        description: "Coconut Grove is Miami's sailing capital. The Coral Reef Yacht Club and Coconut Grove Sailing Club offer access to Biscayne Bay for sailing, kayaking, and paddleboarding."
      },
      {
        title: "Peacock Park & Bayfront",
        description: "A beloved waterfront park perfect for picnics, outdoor yoga, and weekend farmers markets with views across Biscayne Bay."
      },
      {
        title: "Lulu in the Grove",
        description: "A neighborhood favorite serving elevated American cuisine in a warm, inviting setting. Known for its excellent wine list and lively brunch."
      }
    ],
    mattsTake: [
      "Coconut Grove is the neighborhood I recommend to clients who want a real sense of place. It's not manufactured or trendy; it has genuine history and character. When you walk through the Grove, you can feel the roots.",
      "For families, the Grove is hard to beat. The schools are strong, the streets are safe and shaded, and there's a real community here. Kids ride bikes, neighbors know each other, and the pace of life is a little slower, in the best possible way.",
      "The real estate in the Grove ranges from historic waterfront estates to modern new construction. What makes it special from an investment standpoint is the scarcity. There's very little developable land left, which means existing homes, especially those on the water, will only become more valuable over time."
    ]
  },
  {
    name: "Fisher Island",
    slug: "fisher-island",
    tagline: "America's Wealthiest Zip Code",
    heroImage: "https://images.unsplash.com/photo-1589083130544-0d6a2926e519?w=1920&q=80",
    description: [
      "Fisher Island is a 216-acre private island located just south of Miami Beach, accessible only by ferry, helicopter, or private yacht. With a population of fewer than 800 residents, it is one of the most exclusive residential communities in the world, consistently ranked among America's wealthiest zip codes.",
      "The island features a private beach club, a world-class golf course, a deep-water marina, multiple restaurants, a spa, tennis courts, and an observatory. Every amenity is designed for residents only, creating an environment of total privacy and exclusivity that is virtually impossible to replicate.",
      "Residences on Fisher Island range from elegant condominiums to grand single-family estates, many with direct ocean or bay views. The architecture reflects a timeless Mediterranean and tropical modern aesthetic, and the landscaping throughout the island is meticulously maintained."
    ],
    whatToDo: [
      {
        title: "Fisher Island Beach Club",
        description: "A pristine private beach with imported Bahamian sand, full-service cabanas, and a beachfront restaurant. One of the most exclusive beach experiences in the country."
      },
      {
        title: "The Links at Fisher Island",
        description: "A 9-hole championship golf course designed by P.B. Dye, offering stunning water views and a challenging layout for golfers of all levels."
      },
      {
        title: "Fisher Island Marina",
        description: "A deep-water marina accommodating vessels up to 200 feet. Perfect for day trips to the Keys, Bahamas, or simply cruising Biscayne Bay."
      },
      {
        title: "The Spa Internazionale",
        description: "A full-service luxury spa offering treatments, fitness classes, and wellness programs in a serene island setting."
      },
      {
        title: "Private Dining",
        description: "Multiple on-island restaurants serve everything from casual poolside fare to formal fine dining, all exclusively for residents and their guests."
      }
    ],
    mattsTake: [
      "Fisher Island is in a category of its own. There's nowhere else in Miami, or frankly in the country, that offers this level of privacy, security, and exclusivity. When I bring clients over on the ferry for the first time, the reaction is always the same: they can't believe this exists just minutes from South Beach.",
      "The community on Fisher Island is genuinely special. Because it's so small and private, residents actually know each other. There's a neighborly quality that you wouldn't expect in a place of this caliber. It's a real community, just an extraordinarily exclusive one.",
      "From a real estate perspective, Fisher Island inventory is extremely limited. Properties rarely come to market, and when they do, they move quickly. I've handled numerous transactions on the island, and I can tell you that buying here is as much about relationships and access as it is about the property itself. If Fisher Island is on your radar, reach out early."
    ]
  }
];

export function getNeighborhoodBySlug(slug: string): Neighborhood | undefined {
  return neighborhoods.find((n) => n.slug === slug);
}

export function getAllNeighborhoodSlugs(): string[] {
  return neighborhoods.map((n) => n.slug);
}
