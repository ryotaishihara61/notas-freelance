import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://freelance.notas.co.jp'),
  title: {
    template: '%s | ノウタスフリーランス',
    default: 'ノウタスフリーランス | 農業・地方創生の副業・兼業マッチング',
  },
  description: '農業や地方創生に特化した副業・フリーランス案件紹介サービス。エンジニア、マーケター、企画職など、あなたのスキルで日本の食と農の未来をつくりませんか？フルリモートや週1日からの案件も多数。',
  keywords: ['農業 副業', '農業 フリーランス', '地方創生 副業', 'アグリテック', 'ノウタス'],
  openGraph: {
    title: 'ノウタスフリーランス | 農業・地方創生の副業・兼業マッチング',
    description: '農業や地方創生に特化した副業・フリーランス案件紹介サービス。エンジニア、マーケター、企画職など、あなたのスキルで日本の食と農の未来をつくりませんか？フルリモートや週1日からの案件も多数。',
    type: 'website',
    locale: 'ja_JP',
    images: '/og-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
