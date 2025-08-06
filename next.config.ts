import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    clientSegmentCache: false,
    staleTimes: {
      static: 0,
      dynamic: 0
    }
  }
};

export default nextConfig;
