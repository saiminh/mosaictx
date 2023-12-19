module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://mosaictx-website.netlify.app/:path*',
        basePath: false,
        permanent: true,
      },
    ]
  },
}
