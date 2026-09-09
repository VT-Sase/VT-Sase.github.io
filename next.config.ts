import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/faqs", destination: "/#faqs", permanent: true },
      { source: "/sponsors", destination: "/#sponsors", permanent: true },
    ];
  },
};

export default nextConfig;
