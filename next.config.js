/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '/.',
  reactStrictMode: true,
  images: {
    domains: ['www.roamiasim.com', 'admin.roamiasim.com'],
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: 'https://admin.roamiasim.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig; 