'use client';

import { useState } from 'react';
import { Wifi, Sparkles, Gift, Briefcase, Users, Quote, ShoppingBag, MapPin, Palette, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const PRIMARY_RED = '#E60012';
const TEXT_BLACK = '#111111';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // アニメーション用の設定
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } },
    viewport: { once: true },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="ノウタスフリーランス"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                特徴
              </a>
              <a href="#projects" className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                案件例
              </a>
              <a href="#voices" className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                参加者の声
              </a>
              <a href="#about" className="text-gray-900 font-semibold hover:text-gray-700 transition-colors">
                会社概要
              </a>
              <a
                href="https://forms.office.com/r/cD1RARsjfv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: PRIMARY_RED }}
              >
                登録する
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="メニュー"
            >
              {mobileMenuOpen ? (
                <X size={28} style={{ color: PRIMARY_RED }} />
              ) : (
                <Menu size={28} style={{ color: PRIMARY_RED }} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-4 py-6 space-y-4">
              <a
                href="#features"
                className="block text-gray-900 font-semibold py-2 hover:text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                特徴
              </a>
              <a
                href="#projects"
                className="block text-gray-900 font-semibold py-2 hover:text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                案件例
              </a>
              <a
                href="#voices"
                className="block text-gray-900 font-semibold py-2 hover:text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                参加者の声
              </a>
              <a
                href="#about"
                className="block text-gray-900 font-semibold py-2 hover:text-gray-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                会社概要
              </a>
              <a
                href="https://forms.office.com/r/cD1RARsjfv"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                style={{ backgroundColor: PRIMARY_RED }}
                onClick={() => setMobileMenuOpen(false)}
              >
                登録する
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ① ヒーローセクション */}
      <section className="pt-32 pb-24 bg-white relative overflow-hidden">
        {/* 背景の幾何学模様 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ background: PRIMARY_RED }}></div>
          <div className="absolute top-40 right-20 w-48 h-48 rounded-3xl rotate-45" style={{ background: PRIMARY_RED }}></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-2xl" style={{ background: PRIMARY_RED }}></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 rounded-full" style={{ background: PRIMARY_RED }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* 左側: キャッチコピーとCTA */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: TEXT_BLACK }}>
                仕事人生に「農」を足す。
              </h2>
              <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: '#555' }}>
                あなたのスキルが、日本の食と農の未来をつくる。
                <br />
                地方創生・農林水産業の案件が見つかるマッチングサービス。
              </p>
              <motion.a
                href="https://forms.office.com/r/cD1RARsjfv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl"
                style={{ backgroundColor: PRIMARY_RED }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                今すぐ無料で登録する
              </motion.a>
            </motion.div>

            {/* 右側: 画像エリア */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -z-10 inset-0 border-2 border-[#E60012] rounded-2xl translate-x-4 translate-y-4"></div>
                <img
                  src="/hero.png"
                  alt="ノウタスフリーランス"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ② 特徴セクション */}
      <section id="features" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: TEXT_BLACK }}
            {...fadeInUp}
          >
            ノウタスフリーランスの3つの特徴
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: '#FFE6E6' }}>
                  <Wifi style={{ color: PRIMARY_RED }} size={48} />
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-center" style={{ color: TEXT_BLACK }}>
                フルリモート・兼業OK
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                週1日〜、土日のみなど、あなたの働き方に合わせた柔軟な案件をご紹介します。
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: '#FFE6E6' }}>
                  <Sparkles style={{ color: PRIMARY_RED }} size={48} />
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-center" style={{ color: TEXT_BLACK }}>
                異業種のスキルが活きる
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                エンジニア、マーケター、デザイナーなど、農業以外のスキルこそが今、現場で求められています。
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: '#FFE6E6' }}>
                  <Gift style={{ color: PRIMARY_RED }} size={48} />
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 text-center" style={{ color: TEXT_BLACK }}>
                報酬＋αの体験
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                金銭報酬だけでなく、美味しい農産物が届いたり、現地での農業体験ができる案件も。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ③ 募集案件例 */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: TEXT_BLACK }}
            {...fadeInUp}
          >
            案件例
          </motion.h3>

          <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Project 1 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl transition-all"
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-2xl" style={{ backgroundColor: PRIMARY_RED }}>
                    <ShoppingBag className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3" style={{ color: TEXT_BLACK }}>
                    【フルリモート】果樹園のECサイト立ち上げ
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    地方の果樹園が初めてのオンライン販売に挑戦します。商品撮影からサイト構築、決済システム導入までトータルサポート。あなたのEC知見が、農家さんの新たな収益源を作ります。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl transition-all"
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-2xl" style={{ backgroundColor: PRIMARY_RED }}>
                    <MapPin className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3" style={{ color: TEXT_BLACK }}>
                    【現地訪問】自治体連携プロジェクトのPM補佐
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    地方自治体と農家をつなぐ新規事業のプロジェクトマネジメント。月1〜2回の現地訪問あり。現場の声を聞きながら、地域の課題解決に貢献できるやりがいのあるポジションです。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl transition-all"
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-2xl" style={{ backgroundColor: PRIMARY_RED }}>
                    <Palette className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold mb-3" style={{ color: TEXT_BLACK }}>
                    【デザイン】農産物ブランドのパッケージデザイン
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    地域特産品のブランディングとパッケージデザイン。商品の魅力を最大限に引き出すビジュアル制作。あなたのデザインが、全国の食卓へ「おいしい」を届けます。
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ④ 参加者の声 */}
      <section id="voices" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: TEXT_BLACK }}
            {...fadeInUp}
          >
            参加者の声
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Voice 1 */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all relative"
              variants={fadeInUp}
            >
              <div className="absolute top-6 left-6 opacity-20">
                <Quote style={{ color: PRIMARY_RED }} size={48} />
              </div>
              <div className="pt-8">
                <div className="mb-4">
                  <p className="font-bold text-lg mb-4" style={{ color: PRIMARY_RED }}>
                    フロントエンジニア / 週2日・フルリモート
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  フロントエンジニアとしてのキャリアを生かして、自治体さま主導のアプリ開発案件に携わっています。以前から関心のあった地方創生や農林水産業に関するサービスに携われて、課題の解決に貢献できることを嬉しく感じています。本業は別であるので、フルリモートで週２日という条件で無理なく働けています。
                </p>
              </div>
            </motion.div>

            {/* Voice 2 */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all relative"
              variants={fadeInUp}
            >
              <div className="absolute top-6 left-6 opacity-20">
                <Quote style={{ color: PRIMARY_RED }} size={48} />
              </div>
              <div className="pt-8">
                <div className="mb-4">
                  <p className="font-bold text-lg mb-4" style={{ color: PRIMARY_RED }}>
                    UIUXデザイナー / 海外輸出プロジェクト
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  国が推進する農産物の海外輸出プロジェクトのブランディング、WEBディレクション、デザイン全般に携わりました。農産物の海外輸出は我が国の農業の重要課題の一つですので、大きなテーマでこれまでの経験を活かせたことはとても大きなやりがいになりました。
                </p>
              </div>
            </motion.div>

            {/* Voice 3 */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all relative"
              variants={fadeInUp}
            >
              <div className="absolute top-6 left-6 opacity-20">
                <Quote style={{ color: PRIMARY_RED }} size={48} />
              </div>
              <div className="pt-8">
                <div className="mb-4">
                  <p className="font-bold text-lg mb-4" style={{ color: PRIMARY_RED }}>
                    プロジェクトマネージャー / 地域通貨導入PJ
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed text-base">
                  中部の地方都市からフルリモートで地域通貨の開発導入プロジェクトに参画しました。自分の住む街の課題解決にも繋がる知見や人脈を得ることができ、今後の人生にとっても大きな経験を積むことが出来ました。
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ⑤ 会社概要 */}
      <section id="about" className="py-24 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: TEXT_BLACK }}
            {...fadeInUp}
          >
            会社概要
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* 左側: 会社情報 */}
            <motion.div {...fadeInUp}>
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  ノウタスは、「人生に農を足す」をテーマに、異業種からの参入や副業人材の活用を通じて、日本の農業の課題解決と新しい価値創造に取り組む企業です。
                  合言葉は「Win-WinよりもFun-Funに」。楽しみながら持続可能な農業の未来をつくります。
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <dl className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-bold text-gray-900 min-w-[100px]">会社名</dt>
                    <dd className="text-gray-700">ノウタス株式会社 (notas inc.)</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-bold text-gray-900 min-w-[100px]">代表者</dt>
                    <dd className="text-gray-700">代表取締役 髙橋 明久</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-bold text-gray-900 min-w-[100px]">所在地</dt>
                    <dd className="text-gray-700">〒107-0062 東京都港区南青山2-15-5 FARO青山1階</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-bold text-gray-900 min-w-[100px]">設立</dt>
                    <dd className="text-gray-700">2022年4月</dd>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-bold text-gray-900 min-w-[100px]">URL</dt>
                    <dd className="text-gray-700">
                      <a
                        href="https://www.notas.co.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        style={{ color: PRIMARY_RED }}
                      >
                        https://www.notas.co.jp/
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>

            {/* 右側: 画像 */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src="/kv.png"
                  alt="ノウタス チームメンバー"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <p className="text-sm text-gray-600 mt-4 text-center">
                  農林水産省『おいしい日本、届け隊』官民共創プロジェクト 参画企業
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h3 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: TEXT_BLACK }}>
              あなたのスキルを活かして、
              <br />
              新しい働き方を始めませんか？
            </h3>
            <motion.a
              href="https://forms.office.com/r/cD1RARsjfv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl"
              style={{ backgroundColor: PRIMARY_RED }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              今すぐ無料で登録する
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ⑥ フッター */}
      <footer className="text-gray-300 py-12" style={{ backgroundColor: '#111111' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="ノウタスフリーランス"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 text-sm">
              <a href="https://www.notas.co.jp/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-center">
                プライバシーポリシー
              </a>
              <a href="/terms" className="hover:text-white transition-colors text-center">
                利用規約
              </a>
            </div>
          </div>
          <div className="text-center text-sm border-t border-gray-700 pt-6">
            <p>Copyright © notas.inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
