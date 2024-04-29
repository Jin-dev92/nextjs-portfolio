/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.akamai.steamstatic.com',
      },      {
        protocol: 'https',
        hostname: 'store.akamai.steamstatic.com',
      },
    ],
  },
};

export default nextConfig;
