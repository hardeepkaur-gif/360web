import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you', '/services/digital-pr-agency'],
      },
    ],
    sitemap: 'https://www.360websolutions.co.uk/sitemap.xml',
  };
}