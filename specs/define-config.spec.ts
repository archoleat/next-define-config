import { describe, expect, test as spec } from 'bun:test';

import { defineConfig } from '#src/index.ts';

describe('Next Config', async () => {
  spec('should return empty config', async () => {
    expect(defineConfig({}));
  });

  spec('should return config', async () => {
    expect(
      defineConfig({
        amp: {
          canonicalBase: '',
        },
        assetPrefix: '',
        basePath: '',
        cacheMaxMemorySize: 1200,
        cacheHandler: '',
        cleanDistDir: true,
        compress: true,
        devIndicators: {
          buildActivity: true,
          buildActivityPosition: 'bottom-right',
        },
        deploymentId: '',
        distDir: '',
        eslint: {
          dirs: [''],
          ignoreDuringBuilds: true,
        },
        env: {},
        excludeDefaultMomentLocales: true,
        generateEtags: false,
        i18n: {
          defaultLocale: '',
          domains: [{ defaultLocale: '', domain: '', http: true, locales: [''] }],
          localeDetection: false,
          locales: [],
        },
        images: {
          contentDispositionType: 'attachment',
          contentSecurityPolicy: '',
          dangerouslyAllowSVG: false,
          deviceSizes: [500, 500],
          disableStaticImages: false,
          formats: ['image/webp', 'image/avif'],
          imageSizes: [500, 500],
          loader: 'akamai',
          loaderFile: '',
          minimumCacheTTL: 100,
          path: '',
          remotePatterns: [
            {
              protocol: 'https',
              hostname: '',
              port: '',
              pathname: '',
            },
          ],
          unoptimized: false,
        },
        onDemandEntries: {
          maxInactiveAge: 100,
          pagesBufferLength: 100,
        },
        pageExtensions: [''],
        poweredByHeader: false,
        trailingSlash: true,
        typescript: { ignoreBuildErrors: false, tsconfigPath: '' },
        sassOptions: {},
        useFileSystemPublicRoutes: true,
      }),
    );
  });
});
