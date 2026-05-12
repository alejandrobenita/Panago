/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "true";
const basePath = process.env.BASE_PATH?.trim() || "";

const nextConfig = {
  reactStrictMode: true,
};

if (isStaticExport) {
  nextConfig.output = "export";
  nextConfig.images = { unoptimized: true };
  nextConfig.trailingSlash = true;
  if (basePath) {
    nextConfig.basePath = basePath;
    nextConfig.assetPrefix = `${basePath}/`;
  }
}

export default nextConfig;
