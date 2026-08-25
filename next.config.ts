import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/fred-kendrick-demo",
  assetPrefix: "/fred-kendrick-demo",
};

export default nextConfig;
