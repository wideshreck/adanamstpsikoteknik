import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // IP ile erişim için
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
