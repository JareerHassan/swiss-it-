import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
 images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'media.myswitzerland.com',
    },
    {
      protocol: 'https',
      hostname: 'images.pexels.com',
    },
    {
      protocol: 'https',
      hostname: 'lh3.googleusercontent.com',
    },
    {
      protocol: 'https',
      hostname: 'marketplacebackend.oxmite.com',
    },
       {
        protocol: 'https',
        hostname: 'backend.highlandgroup.ch', // ✅ add this for your blog images
      },
  ],
},
};

export default withNextIntl(nextConfig);