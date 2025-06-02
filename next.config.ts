/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Enable SWC minification
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Enable modern features
    esmExternals: true,
    serverComponentsExternalPackages: [],
  },
}

module.exports = nextConfig