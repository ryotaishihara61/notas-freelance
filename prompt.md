# 緊急指示：Cloudflare Pages移行のための設定変更

商用利用のため、ホスティング先をVercelからCloudflare Pages（静的サイトホスティング）に変更します。
それに伴い、`next.config.ts` を以下の仕様に書き換えてください。

## 1. 静的エクスポート設定 (Static Export)
Cloudflare Pagesで動作させるため、`nextConfig` に以下を追加・変更してください。

```typescript
const nextConfig: NextConfig = {
  // 静的HTMLとして出力する設定
  output: 'export',
  
  // Cloudflareの無料枠ではNext.jsの画像最適化が使えないため無効化
  images: {
    unoptimized: true,
  },
  
  // ビルドエラー無視設定（前回追加したものは維持）
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // ※注意: output: 'export' では redirects() が使えなくなるため削除してください。
};