/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Enforce HTTPS redirects only in production to avoid local dev HTTPS issues
    if (process.env.NODE_ENV !== 'production') {
      return [];
    }

    // Get domain from env; default to localhost if not set
    const domain = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: `${domain}/:path*`,
        permanent: true,
      },
    ];
  },
  async headers() {
    // Do not send HSTS or upgrade-insecure-requests in development to avoid cert issues
    if (process.env.NODE_ENV !== 'production') {
      return [];
    }

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
