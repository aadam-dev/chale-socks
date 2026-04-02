import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chalesocks.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
    minimumCacheTTL: 14400,
  },
};

export default nextConfig;
