/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: false,
  // disable: false,
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      {
        urlPattern: /\/_next\/data\/.*\.json$/, // Cache Next.js JSON data
        handler: "NetworkFirst",
        options: {
          cacheName: "next-data-cache",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
          },
        },
      },
      {
        urlPattern: /\.(?:js|css|html)$/, // Cache static assets
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "static-resources",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
          },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/, // Cache images
        handler: "CacheFirst",
        options: {
          cacheName: "image-cache",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
          },
        },
      },
      {
        urlPattern: /^https:\/\/your-api\.com\/.*$/, // Cache API responses
        handler: "NetworkFirst",
        options: {
          cacheName: "api-cache",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24, // 1 day
          },
        },
      },
      {
        urlPattern: /.*/, // Cache pages
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "general-cache",
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
          },
        },
      },
    ],
  },
});

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  webpack: (config: { plugins: any[]; }, { webpack, isServer, nextRuntime }: any) => {
    // Avoid AWS SDK Node.js require issue
    if (isServer && nextRuntime === "nodejs") {
      config.plugins.push(
        new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ })
      );
    }
    return config;
  }
};

export default withPWA(withAnalyzer(nextConfig));