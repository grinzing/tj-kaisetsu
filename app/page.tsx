import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "盗薬次楽 - エンディング解説",
  description: "周遊型イマーシブサスペンス『盗薬次楽』のエンディング解説",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <header className="mb-16 text-center">
          <h1 className="mb-6 font-serif text-4xl font-light tracking-wider text-slate-800 md:text-5xl">盗薬次楽 解説</h1>
          <div className="mx-auto mb-8 h-px w-24 bg-slate-300"></div>
        </header>

        <section className="mx-auto mb-20 max-w-3xl space-y-12 font-serif leading-relaxed tracking-wide">
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">はじめに</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              この度は、周遊型イマーシブサスペンス『盗薬次楽』にご参加いただき、誠にありがとうございました。
            </p>
            <p className="mb-4">
              本公演は、去る5月26日をもちまして、予定されていたすべての公演を終了いたしました。
            </p>
            <p className="mb-4">
              延べ2,601名の皆様にご参加いただき、追加公演を含む全日程においてチケットは完売。予想をはるかに上回る反響をいただきました。
            </p>
            <p className="mb-4">
              これもひとえに、「怪しげなアルバイト」という不穏な誘い文句にも関わらず、勇気を持ってこの物語に飛び込んでくださった皆様のご支援の賜物です。
            </p>
            <p className="mb-4">
              製作一同、心より御礼申し上げます。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <p className="mb-4">
              さて、本公演はマルチエンディング形式で構成されておりました。
            </p>
            <p className="mb-4">
              エンディング後『解説ページ』に到達した方を除き、参加者の約70％の参加者の皆様は物語の真相に確信を持てないまま物語を終えていることと思います。
            </p>
            <p className="mb-4">
              そこで本ページでは、物語の解説として、本作に登場した団体や登場人物たちの背景についてご紹介いたします。大きなネタバレを含みますので、治験の再募集への応募（再演の可能性がわずかにございます ）を検討されている方は、ご注意ください。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">物語としてのあなたの立場</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              あなたは、大金欲しさに"怪しげなアルバイト"へと足を踏み入れた一人……のはずでしたが、実のところ、物語はあなたが今日このアルバイトにやってくるよりも、少し前から始まっていたのです。
            </p>
            <p className="mb-4">
              今回の治験は、「オブリビオン」と呼ばれる薬品の、非合法な臨床実験でした。
            </p>
            <p className="mb-4">
              この薬は、服用者から特定期間の記憶を消し去る、いわば記憶を盗む薬です。
            </p>
            <p className="mb-4">
              そして実は、あなたはすでに一度この治験に参加しており、その際の記憶を「オブリビオン」によって失っていたのです。
            </p>
            <p className="mb-4">
              センター裏でカルテを発見した際、当日の日付のものとともに、一週間前のカルテが置いてあったのはそのためです。あなたの治験参加は「初回」ではなく、「少なくとも二度目以降」だったのです。
            </p>
            <p className="mb-4">
              また、「オブリビオン」はまだ開発段階にある薬であり、極めて重篤な副作用を伴います。
            </p>
            <p className="mb-4">
              それは3回以上服薬すると、昏睡状態に陥るというものです。
            </p>
            <p className="mb-4">
              （公演中にたびたび言及された『池袋連続昏睡事件』の真相は、この治験に複数回参加した被験者たちが副作用により昏睡したことに他なりません）
            </p>
            <p className="mb-4">
              （ここに事件の切り抜き）
            </p>
            <p className="mb-4">
              つまりあなたは、公演に参加した時すでに、もしこの日の投薬の記憶を失い、三度治験に参加すれば、次こそ昏睡状態に陥る。そんな危険な、いわばリーチの状態にあったのです。
            </p>
            <p className="mb-4">
              記憶を失う運命にあるあなたが、その未来を回避する唯一の手段こそ、ジャーナリスト・神永の告発に協力し、治験センター自体を社会から葬り去ることでした。
            </p>
            <p className="mb-4">
              これが、物語からプレイヤーであるあなたに密かに課された「本当の目標」だったのです。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">盗薬成功条件</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              さて、この物語のエンディングは３種類ございます。
            </p>
            <p className="mb-4">
              神永の告発が証拠不十分により失敗する。『盗薬失敗ルート』
            </p>
            <p className="mb-4">
              告発を行いセンター長の大黒は逮捕されるも、証拠が足りずクロノミライメディカルの闇までは暴けない。『盗薬失敗・真相到達ルート』
            </p>
            <p className="mb-4">
              神永のもとに全ての証拠が揃い、クロノミライメディカルの闇までもが暴かれる。『盗薬成功ルート』です。
            </p>
            <p className="mb-4">
              全日程においての統計では、『盗薬失敗ルート』『盗薬失敗・真相到達ルート』の合計が72％。『盗薬成功ルート』が28%の到達率でした。
            </p>
            <p className="mb-4">
              では、どのようにすれば、神永の告発を成功させられるのか。条件は次のとおりです。
            </p>
            <p className="mb-4">
              <strong>1. センター裏探索の際にLINEで提示された全ての物品を、神永へと手渡す。</strong>
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>
                薬の名前などが記載された詳細な書類： 剤名、剤型などが記された紙です。
                （画像データ）
              </li>
              <li>
                あなたの診療カルテ（２枚）： 当日の日付と、１週間前の日付のものが重ねておいてありました。2枚合わせて盗む必要があります。
                <img
                  src="/images/_DSC2376.jpg"
                  alt="診療カルテの画像"
                  width={400}
                  height={300}
                  className="my-6 rounded-lg w-full max-w-sm mx-auto"
                />
              </li>
              <li>
                薬の原材料： 植物が保管されていた個室にあった小さなカプセルのうち、『ツカサミグサ』とラベルが貼られていたものだけが対象です。それ以外のものは原材料として不適格です。
              </li>
              <li>
                薬本体： 薬本体はセンター裏には保管されていません。ただし、全ての参加者が神永に会う際には実態として所持しており、ゲーム開始の段階で必ず体に取り込んでいるものでした。
                何が薬本体だったのかは、解説終わりの『その他のアイテムについて』をご参照ください。
              </li>
            </ul>
            <p className="mb-4">
              <strong>2. 上記全てを神永に手渡すと、『USBメモリ型盗聴器』が渡される。（条件を満たせていない場合、『ボールペン型盗聴器』が渡されています）</strong>
            </p>
            <img
              src="/images/_DSC2808.jpg"
              alt="USBメモリ型盗聴器の画像"
              width={400}
              height={300}
              className="my-6 rounded-lg w-full max-w-sm mx-auto"
            />
            <p className="mb-4">
              <strong>3. USBメモリを持って、大黒から報酬を受け取る前に、大黒の口から「薬を作った」旨の発言を引き出す。</strong>
            </p>
            <p className="mb-4">
              以上３点を満たせた場合のみ、盗薬成功となります。神永は薬に関する全ての情報と、他でもない大黒からの自白を元に、告発を行い、見事成功することになります。
            </p>
            <p className="mb-4">
              この結末に辿り着いた場合のみ、50万円の小切手報酬を受け取ることとなるのでした。
            </p>
            <p className="mb-4">
              それぞれのエンディングは『進行管理アカウント』に以下のメッセージを送ることで確認いただけます。気になる方はぜひご覧ください。
            </p>
            <p className="mb-4">盗薬成功ルート：　やれることはやった</p>
            <p className="mb-4">盗薬失敗、真相到達ルート：　封筒を開いた</p>
            <p className="mb-4">盗薬失敗：　報酬は受け取った</p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">物語、人物の背景</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              ここからは物語の解説となります。
            </p>
            <p className="mb-4">
              なぜ治験センターは『オブリビオン』という危険な薬の治験を強行していたのでしょうか。それは、センター長『大黒』の妄執がきっかけでした。大黒と直に話したあなたなら、大黒が人間の負の記憶を消すことに執着していたことを知っているはずです。
            </p>
            <p className="mb-4">
              ここより先は、大黒が語った部分と、LINEでの調査を組み合わせることで推測できる、登場人物たちの設定についての解説です。
            </p>
            <h3 className="mb-4 text-xl text-indigo-700">大黒　挫折に囚われた男</h3>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <img
                src="/images/_DSC3005.jpg"
                alt="大黒の写真1"
                width={400}
                height={300}
                className="my-6 rounded-lg w-full md:w-1/2"
              />
              <img
                src="/images/_DSC3475.jpg"
                alt="大黒の写真2"
                width={400}
                height={300}
                className="my-6 rounded-lg w-full md:w-1/2"
              />
            </div>
            <p className="mb-4">
              大黒はその名の通り、大黒家という特殊な家系で生まれました。
            </p>
            <p className="mb-4">
              大黒家はクロノミライメディカルを牛耳る黒野家の親戚筋です。また大黒家は親戚筋の中では非常に冷遇されていました。
            </p>
            <p className="mb-4">
              大黒はそんな家系の境遇を変えるため、両親からの期待を一身に背負い、クロノミライメディカル内部の血で血を洗う派閥争いに身を投じていきました。
            </p>
            <p className="mb-4">
              最終的に、大黒はクロノミライメディカル社長の黒野総一郎に叩きのめされます。
            </p>
            <p className="mb-4">
              そして、社内での地位は低くはないものの、これ以上の昇進が望めない主任研究員という立ち位置に抑え込まれました。
            </p>
            <p className="mb-4">
              この時の挫折が大きなトラウマとなり、大黒は人生の夢ともいえる『目標』に挑戦することができなくなってしまいました。
            </p>
            <p className="mb-4">
              この経験が『オブリビオン』開発の契機となります。人々の負の記憶を取り払うことで、誰もが再びまっさらな意思で挑戦できる世界の実現が、彼の新たな夢になりました。
            </p>
            <p className="mb-4">
              この新たな目標が、生来の倫理観の無さと結びつき、今回の治験センターでの実験が強行されたのでした。
            </p>
            <p className="mb-4">
              物語中、大黒は一貫して自分の行いには迷いも罪の意識もなく、治験の参加者にも医療の未来のための貢献として心から感謝をしています。報酬が破格なのは、大黒なりの誠意です。
            </p>
            <p className="mb-4">
              故に、大黒は必ず、あなたがセンターを去る時には「またここでお待ちしております」と声をかけるのでした。
            </p>
            <p className="mb-4">
              植物を育てるのが趣味で、センター内に多数の植物が配置されているのは大黒の指示です。また、斉藤が頻繁に水やりを忘れるので、メモとして貼られていたりもします。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">その他のキャラクターについて</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              物語に登場する他のキャラクターについても触れていきましょう。
            </p>
            <p className="mb-4">
              ここでは公演の最中では明かされにくい設定についても紹介、解説していきます。
            </p>

            <h3 className="mb-4 text-xl text-indigo-700">斉藤　仕事をこなす医者</h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <img
                src="/images/_DSC1760.jpg"
                alt="斉藤医師の写真"
                width={400}
                height={300}
                className="my-6 rounded-lg w-full md:w-1/2 mx-auto"
              />
            </div>
            <p className="mb-4">
              治験の内容については仕事と割り切っていて、倫理的側面については立ち入るつもりはない実用主義者です。良くも悪くも自分以外の事物に無関心であり、人あたりの良さは本人なりの処世術です。
            </p>
            <p className="mb-4">
              プレイヤーが薬の影響を受けることについては気の毒に思いつつも、罪悪感はありません。 作中キャラクターの中では最も虚無的な性格で、趣味も恋人もなく、ただ、辛いものが好きという設定だけがあります。
            </p>
            <img
              src="/images/_DSC1927.jpg"
              alt="斉藤医師の写真"
              width={400}
              height={300}
              className="my-6 rounded-lg w-full md:w-1/2 mx-auto"
            />
            <p className="mb-4">
              辛いものについての話題を出せば、話に乗ってきてくれたかもしれません。
            </p>
            <p className="mb-4">
              カルテを折っていた姿が見られたかもしれません。斉藤は大事な書類を二つ折りにして内側が見えないようにする癖があり、カルテに限らず、裏のスペースにあった書類も幾つかは二つ折りにされています。ややメタ的な示唆ではありますが、斉藤によって二つ折りにされていた紙だけがあなたにとって進行上重要な書類なのでした。
            </p>
            <img
              src="/images/_DSC1966.jpg"
              alt="斉藤医師が書類を折る様子"
              width={400}
              height={300}
              className="my-6 rounded-lg w-full md:w-1/2 mx-auto"
            />

            <h3 className="mb-4 text-xl text-indigo-700">神永　陰謀を追う記者</h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <img
                src="/images/_DSC2254.jpg"
                alt="神永記者の写真"
                width={400}
                height={300}
                className="my-6 rounded-lg w-full md:w-1/2 mx-auto"
              />
            </div>
            <p className="mb-4">
              記者仲間が昏睡事件の被害者になったことで、クロノミライメディカルの調査に乗り出したジャーナリストです。
            </p>
            <p className="mb-4">
              実地で取材に臨む行動派で、あなたと同じように治験に参加した結果、記憶を失ってしまいましたが、手帳に細かくメモを取る癖のおかげで、不可解な治験に疑いをもつことができました。
            </p>
            <p className="mb-4">
              ちなみに、この記者仲間とは、新聞の切り抜き記事の筆者であり、センター裏にも情報のある佐々木理恵のことです。 あなたに各種証拠を盗むようにうながすため、警戒されることもあります。
            </p>
            <p className="mb-4">
              ですが神永には悪意はなく、ただ必死に、藁にも縋るような気持ちでいるだけなのでした。
            </p>
            <p className="mb-4">
              頼めば神永の手帳を見せてもらうこともでき、あなたがこれから体験する治験の内容や、佐藤医師に協力が見込めそうなこと、ペットボトルにささやかな疑問をいだいていたことを知ることができます。ただし、これらを神永本人は忘却しているため、発言としては出てきません。
            </p>

            <h3 className="mb-4 text-xl text-indigo-700">佐藤　葛藤する医師</h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <img
                src="/images/_DSC2436.jpg"
                alt="佐藤医師の写真"
                width={400}
                height={300}
                className="my-6 rounded-lg w-full md:w-1/2 mx-auto"
              />
            </div>
            <p className="mb-4">
              センターの医師の中で唯一、実験に人道的な観点から反対している人物です。しかし、それも心の中に止まっています。というのも、佐藤には重病人の妹がおり、クロノミライメディカル系列の病院に入院しているため、表立って反対を表明することができず、仕方なく従うことしかできないのでした。
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <img
                src="/images/_DSC3824.jpg"
                alt="佐藤医師の写真"
                width={400}
                height={300}
                className="my-6 rounded-lg w-full md:w-1/2 mx-auto"
              />
              <img
                src="/images/_DSC3850.jpg"
                alt="佐藤医師の写真"
                width={400}
                height={300}
                className="my-6 rounded-lg w-full md:w-1/2 mx-auto"
              />
            </div>
            <p className="mb-4">
              やや威圧的で冷たい印象の人物ですが、心根は非常に優しく、佐藤が席を外した際にロッカーなどを確認すると、家族の写真を大切に保管していることが分かります。
            </p>
            <p className="mb-4">
              あなたが自身の立場をしっかりと表明し、協力を求めれば、非常に重要な情報を教えてくれることさえあるのでした。
            </p>

            <h3 className="mb-4 text-xl text-indigo-700">清水　ブラックバイトギャンブラー</h3>
            <p className="mb-4">
              あなたとほぼ同じ──『金が欲しい』という動機で働いているベテラン闇バイターです。
            </p>
            <p className="mb-4">
              センターの職員ではなく、別の組織からリクルートされてきた労働力です。
            </p>
            <p className="mb-4">
              表向き公表していないセンターへの案内を担当しており、万が一捜査の手が伸びてきた場合には切り捨てられる儚い存在です。受付とセンターが物理的にも遠く離れているのも、これが理由です。 
            </p>
            <p className="mb-4">
              常に闇バイトで稼いでいますが、ギャンブル狂いでいつも金欠、直近は仮想通貨に手を出し、トランプ相場で全ての財産を失いました。
            </p>
            <p className="mb-4">
              このクロノミライメディカル受付バイトは、時給1万円で請け負っています。
            </p>
            <p className="mb-4">
              実は、以前にあなたが最初に治験にやってきた時のことを清水は覚えています。
            </p>
            <p className="mb-4">
              ただ、センター側から口止めされているため、何も語りません。
            </p>
            <p className="mb-4">
              ただし送り出す際にポロリと「また、よろしくお願いしますね」とボロを出しています。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">そのほかのアイテムについて</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              公演中に登場した固有名詞についても簡単に触れていきましょう。
            </p>
            <h3 className="mb-4 text-xl text-indigo-700">・オブリビオン</h3>
            <div className="mb-6">
              <img
                src="/images/oblivion.jpg"
                alt="オブリビオンの画像"
                width={400}
                height={300}
                className="my-6 rounded-lg w-full md:w-1/2 mx-auto"
              />
            </div>
            <p className="mb-4">
              薬本体です。斉藤の部屋で投薬された固形の薬……ではありません。固形の薬は、その小袋に書いてあったようになんの薬理効果もないプラセボ薬（糖とデンプンを固めたもの）です。
            </p>
            <p className="mb-4">
              実は、それを飲み下すために注がれていた水こそが、オブリビオンの正体でした。
            </p>
            <p className="mb-4">
              治験センターはペットボトル容器あるいは缶に薬剤を充填し、オリジナルラベルによって成分表：水として怪しまれないようにすることで、万が一の立入調査や、神永のようなジャーナリストの目を欺こうとしていたのです。
            </p>
            <p className="mb-4">
              その上、ペットボトルの状態で被験者に持たせれば、施設内を運動中に追加で投与することでより複雑な試験を行うこともできます。重大な証拠でもあるため、大黒はPARCO内の周遊ルートにペットボトルを捨てるゴミ箱などがないことを確認した上で、報酬を渡す前に必ずこのペットボトルを回収しようとするのでした。
            </p>
            <p className="mb-4">
              ペットボトルに入っていた無色透明な液体こそが、人の記憶を消去する「オブリビオン」である。この事実は、薬の詳細書類をよく読み、「『剤型』：無味無臭透明液体」などの項目に着目することで気づけるようになっています。
            </p>
            <p className="mb-4">
              また、斉藤との会話の中で「治験はプラセボ薬と並行している」という言葉を聞き、ラインにて検索を行った場合には、プラセボ薬の存在を確信し、もし頂剤がプラセボ薬だとしたら、自分に影響を与えている薬とはなんなんなのか、と考えることもできます。
            </p>
            <p className="mb-4">
              この全ての参加者が持っていたこのペットボトルを神永に渡せるかどうかが、結末を変える重要な要素です。
            </p>
            <p className="mb-4">
              （ペットボトルを渡した際の液体の残量はエンディングに影響しません。わずかについた水滴からでも成分は検出される、としています）
            </p>
            <h3 className="mb-4 text-xl text-indigo-700">・ツカサミグサ（司巫草）</h3>
            <p className="mb-4">
              オブリビオンの原料である植物です。
            </p>
            <p className="mb-4">
              黒野家の所有する山、尾身影山にのみ自生しており、人間の脳に影響を与える未知の成分を含んでいます。未だ謎が多く、オブリビオンの原料として試験的に利用されていたほか、クロノミライメディカル全体に大きな利益を与えており、代表の黒野総一郎とグループ全体を躍進させた立役者でもあります。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">そのほかの小ネタについて</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              本シナリオにはその他にも様々な小ネタや、俳優陣のアドリブから生まれた設定がございます。ですが、それらは公演の進行には影響せず、またその設定の数が膨大であることから全てを語ることはできません。
            </p>
            <p className="mb-4">
              ご興味のある方は、ネタバレに配慮いただく必要はございますが、公演に参加された方々同士で共有し、考察を楽しんでいただけますと幸いです。
            </p>
            <p className="mb-4">
              あなたに語られた設定が、また別の物語に現れることもあるかもしれません。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">結びに</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              この物語は、最も到達者の多かったエンディング『盗薬失敗・真相到達ルート』を基準として、次の物語へと進んで参ります。
            </p>
            <p className="mb-4">
              誰かがオブリビオンの盗薬に成功したことによって、神永はクロノミライメディカルの告発に乗り出しました。
            </p>
            <p className="mb-4">
              告発は成功し、大黒は逮捕され、クロノミライメディカルの操業停止は新聞記事にもなりました。
            </p>
            <p className="mb-4">
              しかし、政財界にまで根を張り始めた巨大企業であるクロノミライメディカルを打ち倒すまでには至らないかもしれません。
            </p>
            <p className="mb-4">
              とはいえ、池袋PARCOの地下に現れたセンターが閉鎖、撤去されたことは間違いありません。これ以上、昏睡状態となる人々は生まれることはありません。
            </p>
            <p className="mb-4">
              全てはこの治験に参加した誰か──あなたかも──の注意深い洞察力と判断の賜物です。
            </p>
            <p className="mb-4">以上</p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">スタッフクレジット</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              改めて、この度は周遊型イマーシブサスペンス『盗薬次楽』にご参加いただき誠にありがとうございました。
            </p>
            <p className="mb-4">
              あなたがこの体験を忘れず、記憶に留めていただけたのなら、制作一同これ以上の幸福はございません。
            </p>
            <p className="mb-4">
              また、どこか奇妙で、現実味のない、リアルな物語の中でお会いできましたら幸いです。
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <p>シナリオ・ゲームデザイン：三ヶ崎四五六 / キョウヘイ</p>
              <p>演出・演技指導・キャスティング：SLY</p>
              <p>マジック演出・監修：才藤大芽</p>
              <p>音響：島村幸宏(SRworks)</p>
              <p>美術協力：三ツ木Morris Garden</p>
              <p>デザイナー・ディレクター：MorI</p>
              <p>プロデューサー：平石レゼ</p>
              <p>企画：ウズプロダクション</p>
              <p>製作・主催：株式会社Sally・株式会社パルコ</p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">SNS投稿について</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              本公演は再演の可能性がございます。
            </p>
            <p className="mb-4">
              本解説の内容について（登場人物の名前や設定、出てきたアイテムなど）はネタバレとなるためSNSでの投稿はNGとなります。
            </p>
            <p className="mb-4">
              しかし、以下については投稿を歓迎しております。
            </p>
            <p className="mb-4">
              もし楽しんでいただけましたら　ハッシュタグ　#盗薬次楽　にて発信・拡散にご協力をお願いします。
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>内容のネタバレにならない参加感想（例:楽しかった、ドキドキした、薬を飲んだ、など）</li>
              <li>自身がアートの前で撮った写真</li>
              <li>報酬の封筒・小切手</li>
              <li>治験イベント参加中タグ　表裏</li>
              <li>本解説の告知に合わせ、LINEにてお送りしたメインビジュアル画像</li>
              <li>「参加した治験で行ったセンターが閉鎖した」「もうアルバイトの募集締め切ったらしい」という旨の投稿</li>
            </ul>
          </div>
        </section>

        <footer className="mt-16 text-center">
          <div className="mx-auto mb-6 h-px w-24 bg-slate-300"></div>
          <p className="font-serif text-sm text-slate-500">© 盗薬次楽</p>
        </footer>
      </div>
    </main>
  )
} 