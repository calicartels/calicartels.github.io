/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate a fully static export for GitHub Pages
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-us-west-2.amazonaws.com",
      },
    ],
  },
}

export default nextConfig
