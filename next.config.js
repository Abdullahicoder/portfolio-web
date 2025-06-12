/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio-web';

const nextConfig = {
  // Enable static HTML export
  output: 'export',
  // Ensure trailing slashes for GitHub Pages routing
  trailingSlash: true,
  // If in production, set basePath and assetPrefix to the repo name
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
