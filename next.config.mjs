/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows easy static export or Vercel hosting without external image optimization quotas
  },
};

export default nextConfig;
