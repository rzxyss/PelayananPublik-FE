/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["10.10.10.179", 'localhost'],
    remotePatterns: [
      {protocol: 'http', hostname: 'localhost'}
    ]
  },
};

module.exports = nextConfig;
