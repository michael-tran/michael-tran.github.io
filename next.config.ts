import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",  // Required for static export to GitHub Pages
  basePath: "",  // User Pages (username.github.io) are served from the root domain
  images: {
    unoptimized: true, // Required for Next.js Image component on GitHub Pages
  },
};

export default nextConfig;
