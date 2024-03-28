/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "magnideveloper.com",
      },
    ],
  },
};

export default nextConfig;
