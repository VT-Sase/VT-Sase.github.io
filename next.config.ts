import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is served by GitHub Pages, which only hosts static files.
  output: "export",

  // Emit `out/events/index.html` rather than `out/events.html` so Pages
  // resolves /events/ without extra rewrite rules.
  trailingSlash: true,

  // The Next image optimizer needs a server; Pages has none.
  images: { unoptimized: true },
};

export default nextConfig;
