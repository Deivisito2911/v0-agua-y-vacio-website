/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Permitir tu cuenta de Cloudinary
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
