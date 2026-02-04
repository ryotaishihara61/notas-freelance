# 緊急修正：ビルドエラーの解消

Cloudflare Pagesへのデプロイ時にエラーが発生しています。以下の2点を修正してください。

## 1. `next.config.ts` の修正
Next.jsの最新仕様により、`nextConfig` 内の `eslint` キーが無効になりました。
`next.config.ts` から `eslint: { ... }` のブロックを**完全に削除**してください。

## 2. `robots.ts` と `sitemap.ts` の静的化
`output: 'export'` モードでは、動的なルートハンドラーが禁止されています。
以下の2つのファイルの先頭に、**静的生成を強制する設定**を追加してください。

- **対象ファイル:**
  - `src/app/robots.ts`
  - `src/app/sitemap.ts`

- **追加内容:**
  ファイルの最後（または`export default`の前）に、以下の1行を追加してください。
  ```typescript
  export const dynamic = 'force-static';