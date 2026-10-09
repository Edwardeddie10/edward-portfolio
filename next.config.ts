import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/edward-portfolio",
  assetPrefix: "/edward-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;