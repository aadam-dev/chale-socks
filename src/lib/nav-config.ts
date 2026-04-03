/** Shared navigation data for `SiteHeader` and `HomeHeroNav`. */

export const stylesLinks = [
  { label: "Adinkra", href: "/collections?category=Adinkra", desc: "Symbol-inspired patterns" },
  { label: "Afrocentric", href: "/collections?category=Afrocentric", desc: "Pan-African designs" },
  { label: "Kente", href: "/collections?category=Kente", desc: "Traditional Kente weaves" },
  { label: "Chalé Athletics", href: "/collections?category=Athletics", desc: "Performance streetwear" },
] as const;

export const giftsLinks = [
  { label: "Christmas Packages", href: "/collections?category=Christmas", desc: "Festive gift sets" },
  { label: "Socks Gift Packages", href: "/collections?category=Gift+Packs", desc: "Curated sock bundles" },
  { label: "Greeting Cards", href: "/collections?category=Cards", desc: "Cultural greeting cards" },
  { label: "Accessories", href: "/collections?category=Accessories", desc: "Complementary pieces" },
] as const;
