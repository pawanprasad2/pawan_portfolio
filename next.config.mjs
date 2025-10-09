/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This makes it static
  images: {
    unoptimized: true,  // Required for static export
  },
}

module.exports = nextConfig