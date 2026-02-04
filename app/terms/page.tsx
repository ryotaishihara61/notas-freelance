'use client';

import { Briefcase } from 'lucide-react';
import Link from 'next/link';

const PRIMARY_RED = '#E60012';
const TEXT_BLACK = '#111111';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="ノウタスフリーランス"
                className="h-12 w-auto"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: TEXT_BLACK }}>
            ノウタスフリーランス利用規約
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* 第１条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１条（適用）
              </h2>
              <div className="space-y-4 pl-4">
                <p>
                  １：ノウタスフリーランス利用規約（以下「本規約」といいます。）は、ノウタス株式会社が運営する「ノウタスフリーランス」を利用する者と当社との間の権利義務関係及び利用者が遵守すべき事項等を定めるものです。
                </p>
                <p>
                  ２：本サイトの利用者は、本規約に同意する前に本規約の全文を熟読し、内容を理解したうえで、本サイトを利用するものとし、本サイトを利用した者は、本規約に同意したものとみなします。
                </p>
              </div>
            </section>

            {/* 第２条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第２条（定義）
              </h2>
              <p className="mb-4 pl-4">本規約中に使用される以下の用語は、以下のとおり、定義されます。</p>
              <div className="space-y-2 pl-8">
                <p>①「本サービス」とは、当社がノウタスフリーランスを通じて提供する一切のサービスをいいます。</p>
                <p>②「利用者」とは、ノウタスフリーランスを利用する者をいい、ノウタスフリーランスの情報サイトを閲覧する者も含みます。</p>
                <p>③「ユーザー」とは、利用者のうち、本サービスを通じて、業務を受託し又は受託しようとし若しくは求職し又は求職しようとする者をいいます。</p>
                <p>④「クライアント」とは、利用者のうち、本サービスを通じて、業務を委託し又は委託しようとし若しくは求人募集をし又は求人募集をしようとする者といいます。</p>
                <p>⑤「応募機能」とは、本サービスサイトに掲載されているクライアントの案件に関する情報をユーザーが利用することにより、当該案件に申し込みをすることができる機能のことをいいます。</p>
                <p>⑥「スカウト機能」とは、ユーザーが、本サービスサイトにユーザーのプロフィールに関する情報を掲載し、クライアントの閲覧に供することにより、クライアントからの案件に関する申込みの誘因をすることができる機能のことをいいます。</p>
                <p>⑦「登録抹消」とは、当社が会員（以下に定義します。）の会員登録を抹消することをいいます。</p>
                <p>⑧「退会」とは、会員が当社に対し、会員登録の抹消を求めることをいいます。</p>
              </div>
            </section>

            {/* 第３条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第３条（登録）
              </h2>
              <div className="space-y-4 pl-4">
                <p>
                  １：本サービスの利用を希望する者は、本規約を遵守することに同意したうえで、当社の定める一定の情報（個人情報を含みます。以下「登録情報」といいます。）を提供することにより、登録の申請をすることができます（以下「登録申請者」といいます。）。
                </p>
                <p>
                  ２：登録申請者は、提供した登録情報が全て正確、真実、最新であることを保証し、その内容の正確性、真実性、最新性等について、一切の責任を負うものとします。
                </p>
                <p>
                  ３：当社は、登録の申請を受けた場合、登録の可否を審査します。当社は、登録を拒否した事由について、何らの回答義務も負いません。登録申請者は、登録が拒否された場合であっても、いかなる異議も申し立てることができません。
                </p>
                <p>
                  ４：当社は、登録申請者につき以下の事由に該当する場合、登録を拒否することがあります。
                </p>
                <div className="pl-4 space-y-2">
                  <p>①未成年者である場合</p>
                  <p>②登録情報の全部又は一部につき虚偽の情報があることが判明した場合</p>
                  <p>③過去に本規約に違反した者又はその関係者である場合</p>
                  <p>④過去に登録抹消をされた者又はその関係者である場合</p>
                  <p>⑤既に登録されている者</p>
                  <p>⑥その他当社が登録することを不適当不適切と判断した場合</p>
                </div>
              </div>
            </section>

            {/* 第４条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第４条（本サービスの利用等）
              </h2>
              <div className="space-y-4 pl-4">
                <p>１：本サービスの利用料金は無料です。</p>
                <p>
                  ２：当社（当社のエージェントを含みます。）は、ユーザーが応募機能を利用した場合、クライアントに合否の確認をしたうえで、ユーザーに対し、合否の連絡をします。ユーザーは、クライアントの判断に対し、異議を述べることができません。
                </p>
                <p>
                  ３：前項の規定にかかわらず、当社は、ユーザーが応募機能を利用した場合、当社独自の判断により、クライアントに合否の確認を行わずに、合否の判断を行い、合否の結果をユーザーに連絡する場合があります。ユーザーは、当社の判断に対し、異議を述べることができません。
                </p>
                <p>
                  ４：当社は、クライアントに合否の確認を行うために、ユーザーの個人情報（氏名、生年月日、住所、電話番号、メールアドレスその他の記述等により特定の個人が識別できるものをいいます。）を含む登録情報を提供することがあります。ユーザーは、応募機能を利用した場合、クライアントに個人情報を含む登録情報が提供されることを同意しておりますので、登録情報が提供されたことに関し、当社のみならずクライアントに対し、異議を述べることができません。
                </p>
                <p>
                  ５：ユーザーがスカウトを受けるという設定にした場合、ユーザーが提供した情報により、クライアントにユーザーとして特定される可能性があります（特に、ユーザーが職務経歴書を本サービスサイトにアップロードする際、個人情報を誤って記載してしまう可能性または消去することを失念する可能性があり、その結果、クライアントにユーザーとして特定される可能性があります。）。この場合であっても、当社は、一切の責任を負わず、ユーザーは、当社のみならずクライアントに対して、異議を述べることができません。
                </p>
                <p>
                  ６：クライアントがスカウト機能を利用した場合、当社は、本サービスを通じて、ユーザーに通知をします。ユーザーは、クライアントのスカウトに対し、応募機能を利用するか否かを決定することができます。
                </p>
                <p>
                  ７：当社は、スカウトされたユーザーが応募機能を利用した場合、本条第２項または第３項に規定された処理を行います。ユーザーは、第２項または第３項の規定に従い、クライアントまたは当社の判断に対し、異議を述べることができません。
                </p>
              </div>
            </section>

            {/* 第５条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第５条（ID及びパスワードの管理）
              </h2>
              <div className="space-y-4 pl-4">
                <p>
                  １：当社が登録を認めた者（以下「会員」といいます。）は、登録ID及び登録パスワードを、自己の責任で適切に管理し、第三者に譲渡、貸与、提供することができません。
                </p>
                <p>
                  ２：会員は、登録ID及び登録パスワードの管理上の不注意、管理の不完全性などにより被った損害については、自ら責任を負うものとし、当社は、一切の責任を負いません。
                </p>
                <p>
                  ３：会員は、登録ID及び登録パスワードの盗用又は第三者による使用が判明した場合、直ちに、当社に通知しなければなりません。
                </p>
              </div>
            </section>

            {/* 第６条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第６条（直接契約の禁止等）
              </h2>
              <div className="space-y-4 pl-4">
                <p>
                  １：ユーザーは、クライアントとの間で、本サービスを利用せずに、業務委託、請負、委任契約等の名称の如何を問わず、直接契約をする行為又はその準備行為をしてはいけません。
                </p>
                <p>
                  ２：ユーザー又はその関係者は、本サービスと同種又は類似のサービスの提供又はその準備行為をしてはなりません。
                </p>
                <p>
                  ３：ユーザー又はその関係者は、本サービスを通じて得た情報を、本サービスを利用する以外の目的で使用してはならず、第三者に提供してはなりません。
                </p>
              </div>
            </section>

            {/* 第７条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第７条（禁止行為及び登録の抹消）
              </h2>
              <div className="space-y-4 pl-4">
                <p>１：ユーザーは、本サービスを利用するにあたり、以下に該当する行為をしてはなりません。</p>
                <div className="pl-4 space-y-2">
                  <p>①本規約に違反する行為。</p>
                  <p>②法令に違反する行為</p>
                  <p>③犯罪行為又は公序良俗に違反する行為</p>
                  <p>④当社、利用者又は第三者の権利（知的財産権、プライバシー権等を含むがこれらに限りません。）を侵害する行為</p>
                  <p>⑤登録情報の全部又は一部につき虚偽の情報又は虚偽の情報と評価されるおそれのある情報を提供する行為</p>
                  <p>⑥本サービスサイトのサーバーに過度の負担をかける行為又はコンピューターウィルス等有害なコンピュータープログラムを送信する行為</p>
                  <p>⑦本サービスサイトに関するプログラムを変更、改変、編集する行為</p>
                  <p>⑧第三者に対し、登録ID及び登録パスワードを提供する行為。</p>
                  <p>⑨上記のほか、当社が不適切と判断する行為。</p>
                </div>
                <p>
                  ２：ユーザーは、前項の行為を行ったことに起因して、当社が第三者から権利侵害、損害賠償請求その他あらゆる請求又は主張を受けた場合、自らの責任と費用負担にて、これらを解決するものとし、当社が、これらに対応した場合、当社が負担した費用（弁護士費用を含みますが、これらに限りません。）を負担するものとし、当社の請求に対し、直ちに支払うものとします。
                </p>
                <p>
                  ３：当社は、会員が本条第１項に違反すると合理的に判断する場合、何ら通知をすることなく、提供された情報の削除修正、当該会員のサービスの利用停止、会員の登録抹消又は本サービスの利用契約の解除をすることができ、これらの措置に対し、何らの責任も負いません。会員は、これらの措置に対し、いかなる異議も申し立てることができません。
                </p>
              </div>
            </section>

            {/* 第８条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第８条（本サービスの停止又は中断）
              </h2>
              <div className="space-y-4 pl-4">
                <p>１：当社は、以下のいずれかに該当する場合、何らの通知をすることなく、本サービスの全部又は一部を停止し又は中断することができます。</p>
                <div className="pl-4 space-y-2">
                  <p>①本サービスに使用する設備等の保守又は工事のために必要な場合。</p>
                  <p>②コンピューター、通信回線等が停止した場合。</p>
                  <p>③地震、落雷、火災、風水害等の不可抗力により、本サービスの提供が不可能又は困難になった場合。</p>
                  <p>④上記のほか、当社が本サービスの停止又は中断が合理的であると判断した場合。</p>
                </div>
                <p>２：当社は、前項に基づき当社が行った措置に起因して発生した損害について、一切の責任を負いません。</p>
              </div>
            </section>

            {/* 第９条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第９条（退会）
              </h2>
              <p className="pl-4">
                会員は、info@notas.co.jp宛にメールで通知することにより、退会することができます。
              </p>
            </section>

            {/* 第１０条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１０条（権利帰属）
              </h2>
              <div className="space-y-4 pl-4">
                <p>
                  １：本サービス又は本サービスサイトに関する知的財産権は、全て当社又は当社がライセンスを許諾している者に帰属しています。
                </p>
                <p>
                  ２：本サービスの利用許諾は、当社の利用者に対する知的財産権の利用許諾を意味するものではありません。
                </p>
              </div>
            </section>

            {/* 第１１条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１１条（保証の否認及び免責）
              </h2>
              <div className="space-y-4 pl-4">
                <p>
                  １：当社は、本サービスが利用者の特定の目的に適合すること、期待する価値を提供すること、正確性、真実性、有用性、最新性を有することについて、何らの保証をするものではありません。
                </p>
                <p>
                  ２：当社は、本サービスの変更、利用停止、中断又は終了、本サービスに係る情報の削除、消失、当該会員の登録の抹消その他本サービスに関してユーザーが被った損害について、賠償する責任を負わないものとします。
                </p>
                <p>
                  ３：当社は、利用者間又は利用者と第三者との間で生じた紛争につき、責任を負わないものとします。
                </p>
              </div>
            </section>

            {/* 第１２条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１２条（機密保持）
              </h2>
              <div className="space-y-4 pl-4">
                <p>
                  １：利用者は、本サービスを通じて取得した機密情報（ユーザー又はクライアントの情報、個人情報を含みますが、これらに限りません。）を秘密として保持し、本サービスの目的以外に利用し、第三者に開示してはなりません。
                </p>
                <p>
                  ２：利用者は、前項に違反して発生した紛争については、自らの責任と費用負担にて、解決するものとし、当社が対応した場合、当社が負担した費用（弁護士費用を含みますが、これらに限りません。）を負担するものとし、当社の請求に対し、直ちに支払うものとします。
                </p>
              </div>
            </section>

            {/* 第１３条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１３条（個人情報）
              </h2>
              <p className="pl-4">
                当社は、会員の個人情報の取り扱いについては、個人情報保護法及び当社の定める個人情報の保護の取扱いに関する定めに従うものとします。
              </p>
            </section>

            {/* 第１４条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１４条（情報の利用）
              </h2>
              <div className="space-y-4 pl-4">
                <p>
                  １：当社は、本サービスの管理運営、障害対応、販売促進等のために、本サービスにより取得した情報を閲覧、利用することができるものとします。
                </p>
                <p>
                  ２：当社は、前項の情報を、個人が特定できないように加工したうえで、本サービスの販売促進等のために、統計データとして第三者に開示することができるものとします。
                </p>
              </div>
            </section>

            {/* 第１５条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１５条（反社会的勢力の排除）
              </h2>
              <div className="space-y-4 pl-4">
                <p>１：利用者は、当社に対し、以下の事項を表明し、保証します。</p>
                <div className="pl-4 space-y-2">
                  <p>
                    ①自ら又は関係者が反社会的勢力（暴力団、暴力団員、暴力団員でなくなった時から５年を経過しない者、暴力団準構成員、暴力団関係企業、総会屋等、社会運動等標ぼうゴロ又は特殊知能暴力集団等、その他これらに準ずる者）に該当しないこと。
                  </p>
                  <p>②暴力的行為、詐術、脅迫行為、業務妨害行為等の行為を行わないこと。</p>
                </div>
                <p>
                  ２：当社は、利用者が前項の１つにでも該当する場合、何ら通知をすることなく、直ちに、提供された情報の削除、当該会員のサービスの利用停止、会員の登録抹消又は本サービスの利用契約の解除をすることができ、これらの措置に対し、何らの責任も負いません。会員は、これらの措置に対し、いかなる異議も申し立てることができません。
                </p>
              </div>
            </section>

            {/* 第１６条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１６条（損害賠償責任）
              </h2>
              <p className="pl-4">
                利用者が、本規約に違反して、当社又は第三者に損害を与えた場合、その損害を賠償する責任を負います。
              </p>
            </section>

            {/* 第１７条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１７条（本サービスの変更）
              </h2>
              <div className="space-y-4 pl-4">
                <p>
                  １：当社は、合理的理由がある場合、何ら通知することなく、本サービスの変更をすることができ、利用者は、変更後の本サービスを利用した時点で、本サービスへの変更を承諾したものとみなします。また、本サービスを終了する場合も同様とします。
                </p>
                <p>
                  ２：当社は、前項の変更又は終了により生じた利用者の損害を賠償する責任を負わないものとします。
                </p>
              </div>
            </section>

            {/* 第１８条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１８条（本規約の変更）
              </h2>
              <div className="space-y-4 pl-4">
                <p>
                  １：当社は、合理的理由がある場合、何ら通知することなく、本規約を変更、削除、修正することができ、変更後の本規約を開示します。利用者は、当社が本規約の変更を開示し、かつ、本規約の変更の開示後に本サービスを利用した時点で、本規約の変更に承諾したものとみなします。
                </p>
                <p>
                  ２：当社は、前項の変更により生じた利用者の損害を賠償する責任を負わないものとします。
                </p>
              </div>
            </section>

            {/* 第１９条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第１９条（通知）
              </h2>
              <p className="pl-4">
                当社から利用者又は利用者から当社への通知は、当社所定の方法により、行うものとし、当社所定の方法により通知を行った場合、通知不到達の責任を負わないものとします。
              </p>
            </section>

            {/* 第２０条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第２０条（権利義務地位の譲渡）
              </h2>
              <p className="pl-4">
                会員は、本サービスに基づく権利義務又は地位を、当社の承諾なく、譲渡、担保権の設定又はその他の処分をすることができません。
              </p>
            </section>

            {/* 第２１条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第２１条（分離可能性）
              </h2>
              <p className="pl-4">
                本規約の一部が法令等により無効と判断された場合であっても、残部については、継続して効力を有するものとします。
              </p>
            </section>

            {/* 第２２条 */}
            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: TEXT_BLACK }}>
                第２２条（準拠法及び管轄）
              </h2>
              <div className="space-y-4 pl-4">
                <p>１：本規約の準拠法は、日本法とします。</p>
                <p>２：本規約に関するいかなる紛争も、東京地方裁判所を第一審の専属管轄裁判所とします。</p>
              </div>
            </section>

            <div className="text-center mt-12 pt-8 border-t border-gray-300">
              <p className="text-gray-600">以上</p>
              <p className="text-gray-600 mt-4">令和6年1月1日作成</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block text-white font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:opacity-90 transition-opacity"
              style={{ backgroundColor: PRIMARY_RED }}
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
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
              <Link href="/terms" className="hover:text-white transition-colors text-center">
                利用規約
              </Link>
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
