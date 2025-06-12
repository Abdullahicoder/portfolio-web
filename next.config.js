/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: 'export'' as it's not compatible with Server Actions
  // Remove 'trailingSlash', 'basePath', and 'assetPrefix' as they are specific to static export to subpaths

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    // Re-enable serverActions to allow them to compile and run
    serverActions: true,
  },
};

module.exports = nextConfig;