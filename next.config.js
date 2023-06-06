/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.swell.store", "cdn.schema.io"],
  },
};

module.exports = nextConfig;
