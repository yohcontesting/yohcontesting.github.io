/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/bpr-engineering-lab` : "";

const nextConfig = {
  output: "export",
  basePath: "/yohcontesting.github.io/bpr-engineering-lab",
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
