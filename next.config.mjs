/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera o site 100% estático na pasta "out" (hospedado no Cloudflare Pages)
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
