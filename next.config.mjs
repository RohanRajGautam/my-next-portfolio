/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.dev.to',
      },
      {
        protocol: 'https',
        hostname: 'rrg.com.np',
      },
    ]
  }
};

export default withPlaiceholder(nextConfig);
