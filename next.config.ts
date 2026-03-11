import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  domains: [
    'images.unsplash.com',
    'media.myswitzerland.com',
    'images.pexels.com',
    'lh3.googleusercontent.com',
  ],
},
};

export default withNextIntl(nextConfig);