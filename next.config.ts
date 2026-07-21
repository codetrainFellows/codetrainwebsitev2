import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
