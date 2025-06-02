/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Use modern JavaScript features
    esmExternals: true,
  },
  // Set target to modern browsers
  target: 'serverless',
}

module.exports = nextConfig