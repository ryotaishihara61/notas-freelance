# 修正指示：metadataBaseの設定追加

`src/app/layout.tsx` の `metadata` 設定において、`metadataBase` プロパティが不足しているため警告が出ています。
以下のように、本番URLを基準URLとして設定してください。

## 修正内容
`export const metadata: Metadata = {` の中に、以下の行を追加してください。

```typescript
metadataBase: new URL('[https://freelance.notas.co.jp](https://freelance.notas.co.jp)'),