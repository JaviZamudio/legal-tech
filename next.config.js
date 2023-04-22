/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // accept images from https://api.dicebear.com
  images: {
    domains: ["api.dicebear.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
