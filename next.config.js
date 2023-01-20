/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["192.168.2.7", 'localhost'],
    remotePatterns: [
      {protocol: 'http', hostname: 'localhost'}
    ]
  },
};

module.exports = nextConfig;
