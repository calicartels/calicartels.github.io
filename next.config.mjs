/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static export for GitHub Pages
  output: "export",
  images: {
    // Disable Next.js image optimization for static export / GitHub Pages
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-us-west-2.amazonaws.com",
      },
    ],
  },
}

export default nextConfig
