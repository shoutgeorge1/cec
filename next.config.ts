import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Keep tracing rooted on this app (monorepo has a parent lockfile).
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "www.cuttingedgecreations.com",
      },
      {
        protocol: "https",
        hostname: "cuttingedgecreations.com",
      },
    ],
  },
};

export default nextConfig;
