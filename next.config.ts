import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The FAQ and the sponsor wall used to be routes of their own. They are
      // sections of the home page now, so old links land on those sections.
      { source: "/faqs", destination: "/#faqs", permanent: true },
      { source: "/sponsors", destination: "/#sponsors", permanent: true },
    ];
  },
};

export default nextConfig;
