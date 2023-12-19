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
        source: '/',
        destination: 'https://mosaictx-website.netlify.app/',
        permanent: true,
        basePath: false,
      },
      {
        source: '/admin',
        destination: 'https://mosaictx-website.netlify.app/admin',
        permanent: true,
        basePath: false,
      },
    ]
  },
}
