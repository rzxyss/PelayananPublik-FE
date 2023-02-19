/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["192.168.100.93", "localhost"],
    remotePatterns: [
      { protocol: "https", hostname: "192.168.100.93" },
    ],
  },
};

module.exports = nextConfig;
