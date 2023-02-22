/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["192.168.2.7", "localhost"],
    remotePatterns: [
      { protocol: "https", hostname: "192.168.2.7" },
    ],
  },
};

module.exports = nextConfig;
