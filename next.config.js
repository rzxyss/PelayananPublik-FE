/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["pelayanan-publik-backend.glitch.me", "localhost"],
    remotePatterns: [
      { protocol: "https", hostname: "pelayanan-publik-backend.glitch.me" },
    ],
  },
};

module.exports = nextConfig;
