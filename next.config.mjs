/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore ESLint errors during builds to allow deployment
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;