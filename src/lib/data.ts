export type Product = {
  slug: string;
  name: string;
  category: "Adinkra" | "Afrocentric" | "Kente" | "Gift Packs";
  priceUsd: number;
  storyBadge: string;
  studioImage: string;
  lifestyleImage: string;
};

export type Story = {
  title: string;
  proverb: string;
  meaning: string;
  image: string;
};

export const heroSlides = [
  {
    image: "https://chalesocks.com/wp-content/uploads/2022/03/MG_2266-copy.jpg",
    alt: "Urban street portrait featuring vibrant Chale patterns",
  },
  {
    image: "https://chalesocks.com/wp-content/uploads/2023/03/IMG_8044.jpg",
    alt: "Lifestyle scene with contemporary African styling",
  },
  {
    image: "https://chalesocks.com/wp-content/uploads/2023/03/IMG_8103.jpg",
    alt: "Streetwear portrait showcasing textile details",
  },
];

export const products: Product[] = [
  {
    slug: "chaskele-green",
    name: "Chaskele (Green)",
    category: "Adinkra",
    priceUsd: 16,
    storyBadge: "Adinkra roots: resilience and strategic movement.",
    studioImage: "https://chalesocks.com/wp-content/uploads/2023/07/cklgrn1.png",
    lifestyleImage:
      "https://chalesocks.com/wp-content/uploads/2023/03/IMG_8129.jpg",
  },
  {
    slug: "gye-nyame-black",
    name: "Gye Nyame (Black)",
    category: "Adinkra",
    priceUsd: 16,
    storyBadge: "Gye Nyame signifies divine supremacy and courage.",
    studioImage: "https://chalesocks.com/wp-content/uploads/2023/03/gynm1.png",
    lifestyleImage:
      "https://chalesocks.com/wp-content/uploads/2023/03/IMG_8074.jpg",
  },
  {
    slug: "akwaaba",
    name: "Akwaaba",
    category: "Kente",
    priceUsd: 16,
    storyBadge: "Akwaaba: hospitality woven into modern form.",
    studioImage: "https://chalesocks.com/wp-content/uploads/2023/03/AKWB1.png",
    lifestyleImage:
      "https://chalesocks.com/wp-content/uploads/2023/03/IMG_8044.jpg",
  },
  {
    slug: "mon-afrique-deluxe",
    name: "Mon Afrique Deluxe",
    category: "Kente",
    priceUsd: 16,
    storyBadge: "A tribute to pan-African pride and movement.",
    studioImage:
      "https://chalesocks.com/wp-content/uploads/2023/07/MonAfqp1.png",
    lifestyleImage:
      "https://chalesocks.com/wp-content/uploads/2023/03/IMG_8103.jpg",
  },
  {
    slug: "chale-wvs-off-white",
    name: "CHALÉ™ WVS – Off White",
    category: "Afrocentric",
    priceUsd: 26,
    storyBadge: "Athletics line: clean silhouette, bold identity.",
    studioImage:
      "https://chalesocks.com/wp-content/uploads/2023/03/CHALE-WVS-ATHLETIC_OW.jpg",
    lifestyleImage:
      "https://chalesocks.com/wp-content/uploads/2023/03/IMG_8044.jpg",
  },
  {
    slug: "pattern-trio-pack",
    name: "Pattern Trio — Gift Pack",
    category: "Gift Packs",
    priceUsd: 42,
    storyBadge: "Three signature patterns—gift-ready, culture-first.",
    studioImage:
      "https://chalesocks.com/wp-content/uploads/2023/03/chskl1.png",
    lifestyleImage:
      "https://chalesocks.com/wp-content/uploads/2022/03/MG_2266-copy.jpg",
  },
];

export const stories: Story[] = [
  {
    title: "Gye Nyame",
    proverb: "Except for God",
    meaning:
      "A timeless Adinkra symbol of ultimate sovereignty, translated into confident streetwear color rhythm.",
    image: "https://chalesocks.com/wp-content/uploads/2023/03/gynm2.png",
  },
  {
    title: "Akwaaba",
    proverb: "Welcome Home",
    meaning:
      "Inspired by Ghanaian hospitality, this motif celebrates belonging and bold first impressions.",
    image: "https://chalesocks.com/wp-content/uploads/2023/03/AKWB3.png",
  },
  {
    title: "Kente Waves",
    proverb: "Thread by thread",
    meaning:
      "Kente geometry adapted for everyday movement: heritage made wearable and modern.",
    image: "https://chalesocks.com/wp-content/uploads/2023/03/kwvsb1.png",
  },
];

export const legalLinks = [
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Returns", href: "/returns" },
  { label: "FAQ", href: "/faq" },
];
