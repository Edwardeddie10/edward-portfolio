
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/edward-portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;