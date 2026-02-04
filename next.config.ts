import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的HTMLとして出力する設定
  output: 'export',

  // Cloudflareの無料枠ではNext.jsの画像最適化が使えないため無効化
  images: {
    unoptimized: true,
  },

  // ビルドエラー無視設定
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
