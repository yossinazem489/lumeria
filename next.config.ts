import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isGitHubPages
    ? {
        output: "export" as const,
        trailingSlash: true,
        basePath: "/lumeria",
        assetPrefix: "/lumeria/",
        images: {
          unoptimized: true,
        },
      }
    : {}),
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default withNextIntl(nextConfig);
