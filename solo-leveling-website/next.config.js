/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Allow external connections
  async rewrites() {
    return []
  },
}

module.exports = nextConfig