import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Use separate build directory for CI/pre-push checks to avoid conflicts with dev server
  distDir: process.env.NEXT_BUILD_DIR || '.next',

  // Include docs folder in Vercel deployment (needed for dynamic fs reads)
  outputFileTracingIncludes: {
    '/presenter-docs': ['./docs/presenter-docs/**/*'],
    '/presenter-docs/[...slug]': ['./docs/presenter-docs/**/*'],
  },

  async redirects() {
    // Only redirect to presenter-docs in production (Vercel)
    // Use ?redirect=false to bypass and view the blog
    if (process.env.VERCEL) {
      return [
        {
          source: '/',
          destination: '/presenter-docs',
          permanent: false,
          missing: [
            {
              type: 'query',
              key: 'redirect',
            },
          ],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
