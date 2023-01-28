/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path:""
  },
  basePath: "/Estructura-de-datos"
  // basePath: process.env.NODE_ENV === 'production' ? '/Estructura-de-datos' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/my-custom-path/' : '',
}

module.exports = nextConfig
