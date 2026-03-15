/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Registramos Unsplash para las pruebas actuales 
    // y Cloudinary para cuando subas las fotos reales.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig