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
          <h1 className="mb-6 font-serif text-4xl font-light tracking-wider text-slate-800 md:text-5xl">盗薬次楽</h1>
          <div className="mx-auto mb-8 h-px w-24 bg-slate-300"></div>
          <p className="font-serif text-xl text-slate-600">エンディング解説</p>
        </header>

        <section className="mx-auto mb-20 max-w-3xl space-y-12 font-serif leading-relaxed tracking-wide">
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <p className="mb-8 text-center text-lg text-slate-600">
              この度は周遊型イマーシブサスペンス『盗薬次楽』にご参加いただきありがとうございます。エンディングの読了をもってこの物語は終わりとなります。
            </p>
            <p className="mb-8 text-center text-xl font-medium text-indigo-700">
              エンディング『盗薬成功』に辿り着きました。
            </p>
            <p className="mb-8">
              あなたは正しく証拠を集め、神永の告発を手助けすることができたはずです。
              ここでは、物語の解説として、団体や登場人物たちの背景情報についてご説明いたします。
              どうぞ落ち着ける場所でご覧ください。池袋PARCOのM2Fには、HISカフェもございます。報酬の小切手を提示すれば、表示価格より10%割引ご利用いただけます。※ラストオーダーは18:45です。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">あなたの立場</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">
              　あなたは大金欲しさに怪しいアルバイトにやってきた人物──でしたが、実は、物語はあなたが今日このアルバイトにやってくるより少し早く始まっていました。
            </p>
            <p className="mb-4">
              今回の治験は、『オブリビオン』という薬品の非合法の実験でした。この薬剤は服用から特定期間の記憶を奪い去る働きを持つ、記憶を盗む薬です。あなたは今日より前、すでにこの治験に参加しており、その時の記憶を失っています。センター裏でカルテを回収した際、今日の日付のカルテと一緒に、日付と時間の異なるカルテを見つけたのはそのためです。あなたの治験参加は2回目なのでした。
            </p>
            <p className="mb-4">
              『オブリビオン』開発途中の薬で、非常に重い副作用があります。それは3回以上の服薬で、昏睡状態に陥るというものです。（公演中時折触れられた『池袋連続昏睡事件』は、この治験に複数回参加した人々が被害者となっていた、というのが真相です）
            </p>
            <p>
              つまり、あなたは今日の記憶を忘れて、もう一度治験にやってきてしまうと必ず昏睡状態となるという、いわばリーチがかかった危険な状態なのでした。
              記憶を失う運命にあるあなたが、唯一その危険な未来から逃れられる方法こそ、神永の告発に協力し、治験センター自体を消滅させることなのです。これがこの公演においてプレイヤーが知らぬまに与えられた設定なのでした。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">物語、人物の背景</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-6">
              　では、なぜ治験センターは『オブリビオン』という危険な薬の治験を強行していたのでしょうか。それは、センター長『大黒』の妄執がきっかけでした。大黒と直に話したあなたなら、大黒が人間の負の記憶を消すことに執着していたことを知っているはずです。ここより先は、大黒が語った部分と、LINEでの調査を組み合わせることで推測できる、大黒の設定についての解説です。
            </p>

            <h3 className="mb-4 text-xl text-indigo-700">大黒　挫折に囚われた男</h3>
            <p className="mb-4">
              　まず大黒はその名の通り大黒家の生まれです。大黒家がクロノミライメディカルを牛耳る黒野家の親戚筋であるという情報は、ラインの検索から得ることができます。また大黒家は親戚筋の中では冷遇されていました。
            </p>
            <p className="mb-4">
              　大黒はそんな家系の境遇を変えるため、両親からの期待を一身に背負い、クロノミライメディカル内部の血で血を争う派閥争いに身を投じていきました。
            </p>
            <p className="mb-4">
              　最終的に、大黒はトップの黒野総一郎に叩きのめされ、社内での地位は低くはないものの、これ以上の昇進が望めない主任研究員という立ち位置に抑え込まれました。この時の大きな挫折がトラウマとなり、大黒は人生の夢ともいえる目標に挑戦することができなくなってしまいました。
            </p>
            <p className="mb-4">
              　この経験が『オブリビオン』開発の契機となります。人々の負の記憶を取り払うことで、誰もが再びまっさらな意思で挑戦できる世界の実現が、彼の新たな夢になりました。
            </p>
            <p className="mb-4">
              　この新たな目標が、生来の倫理観の無さと結びつき、今回の治験センターでの実験が強行されたのでした。
            </p>
            <p>
              　物語中、大黒は一貫して自分の行いには迷いも罪の意識もなく、治験の参加者にも心から感謝をしていました。故に、あなたに「またここでお待ちしております」と声をかけるのでした。その結果、あなたが昏睡状態に陥っても、大黒はただ、感謝をするだけでしょう。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">その他のキャラクターについて</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-6">
              　物語に登場する他のキャラクターについても触れていきましょう。ここでは公演の最中では明かされにくい設定についても紹介、解説していきます。
            </p>

            <h3 className="mb-4 text-xl text-indigo-700">斉藤　仕事をこなす医者</h3>
            <p className="mb-6">
              　治験の内容については仕事と割り切っていて、倫理的側面については立ち入るつもりはない実用主義者です。良くも悪くも自分以外の事物に無関心であり、人あたりの良さは本人なりの処世術です。プレイヤーが薬の影響を受けることについては気の毒に思いつつも、罪悪感はありません。
              　作中キャラクターの中では最も虚無的な性格で、趣味も恋人もなく、ただ、辛いものが好きという設定だけがあります。辛いものについての話題を出せば、話に乗ってきてくれるかもしれません。
            </p>

            <h3 className="mb-4 text-xl text-indigo-700">神永　陰謀を追う記者</h3>
            <p className="mb-6">
              　記者仲間が昏睡事件の被害者になったことで、クロノミライメディカルの調査に乗り出したジャーナリストです。実地で取材に臨む行動派で、あなたと同じように治験に参加した結果、記憶を失ってしまいましたが、手帳に細かくメモを取る癖のおかげで、不可解な治験に疑いをもつことができました。ちなみに、この記者仲間とは、センター裏にて情報のある佐々木理恵のことです。
              　あなたに各種証拠を盗むようにうながすため、警戒されることもあります。ですが神永に悪意はなく、ただ必死に、藁にも縋るような気持ちでいるだけなのでした。
            </p>

            <h3 className="mb-4 text-xl text-indigo-700">佐藤　葛藤する医師</h3>
            <p className="mb-6">
              　センターの医師の中で唯一、実験に人道的な観点から反対している人物です。しかし、それも心の中に止まっています。というのも、佐藤には重病人の妹がおり、クロノミライメディカル系列の病院に入院しているため、表立って反対を表明することができず、仕方なく従うことしかできないのでした。
              　やや威圧的で冷たい印象の人物ですが、心根は非常に優しく、佐藤が席を外した際にロッカーなどを確認すると、患者である子供達や家族から受け取ったプレゼントを大切に保管していることが分かります。
              　あなたが自身の立場をしっかりと表明し、協力を求めれば、非常に重要な情報を教えてくれることさえあるのでした。
            </p>

            <h3 className="mb-4 text-xl text-indigo-700">清水　ブラックバイトギャンブラー</h3>
            <p>
              あなたとほぼ同じ──『金が欲しい』という動機で働いているベテラン闇バイターです。センターの職員ではなく、別の組織からリクルートされてきた労働力です。表向き公表していないセンターへの案内を担当しており、万が一捜査の手が伸びてきた場合には切り捨てられる儚い存在です。受付とセンターが物理的にも遠く離れているのも、これが理由です。
              常に闇バイトで稼いでいますが、ギャンブル狂いでいつも金欠、直近は仮想通貨に手を出し、トランプ相場で全ての財産を失いました。
              このクロノミライメディカル受付バイトは、時給1万円で請け負っています。
              実は、以前にあなたが最初に治験にやってきた時のことを清水は覚えています。ただ、センター側から口止めされているため、何も語りません。ただし送り出す際にポロリと「またよろしくお願いしますね」とボロを出しています。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">そのほかのアイテムについて</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-4">　公演中に登場した固有名詞についても簡単に触れていきましょう。</p>

            <h3 className="mb-4 text-xl text-indigo-700">・オブリビオン</h3>
            <p className="mb-6">
              　斉藤によって投薬された固形の薬……ではありません。固形の薬はなんの薬理効果もないプラセボ薬で、それを飲み下すために注がれていた水こそが、オブリビオンの正体でした。これは薬の詳細にある『剤型』無味無臭透明液体、の項目に着目することで気づけるようになっています。このペットボトルを神永に渡せるかどうかが、結末を変える重要な要素です。
            </p>

            <h3 className="mb-4 text-xl text-indigo-700">・ツカサミグサ（司巫草）</h3>
            <p>
              　オブリビオンの原料である植物です。黒野家の所有する山林にのみ自生しており、人間の脳に影響を与える未知の成分を含んでいます。未だ謎が多く、オブリビオンの原料として試験的に利用されていたほか、クロノミライメディカル全体に大きな利益を与えており、代表の黒野総一郎とグループ全体を躍進させた立役者でもあります。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">結びに</h2>
          <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-6">
              あなたがオブリビオンの盗薬に成功したことによって、神永はクロノミライメディカルの告発に乗り出しました。しかし、政財界にまで根を張り始めた巨大企業であるクロノミライメディカルを打ち倒すまでには至らないかもしれません。しかし、池袋PARCOの地下に現れたセンターが撤去されるのは間違いないでしょう。これ以上、昏睡状態となる人々は生まれることはなくなります。全てはあなたの注意深い洞察力と判断の賜物です。
            </p>
            <p className="mb-6">
              ですが、もし何も考えず、盗薬に失敗し、流されるまま物語を見届けていたならば、もう一つの結末をその目で見届けることができるはずです。
              本公演はリピート参加（２度目以降の公演参加）が可能です。公演の内容は変わりませんが、あなた自身の目で、また異なる結末を確認いただけるかもしれません。ただ、与えられた液体を飲み干し、そのゴミを、センター長に引き渡すだけで良いのです。
              リピート参加の際は、初回と同様にチケットを購入の上、公演開始前に受付で、リピート参加である旨をお伝えください。
            </p>
            <div className="my-8 text-center">
              <a
                href="https://escape.id/org/uzu/event/touyakujiraku/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-white px-6 py-3 text-lg font-medium text-black transition-colors hover:bg-slate-100 border border-slate-200"
              >
                チケット購入
              </a>
            </div>
            <p>
              あなたがこの体験を記憶に留めていただけたのなら、制作一同これ以上の幸福はございません。
              改めて、この度は周遊型イマーシブサスペンス『盗薬次楽』にご参加いただき誠にありがとうございました。
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-center text-2xl font-light text-indigo-800">SNS投稿について</h2>
            <div className="mx-auto mb-6 h-px w-16 bg-slate-200"></div>
            <p className="mb-6">
              本公演の内容について（登場人物の名前、出てきた物等）はネタバレとなるため投稿はNGとなります。しかし、以下の物は投稿OKなので、もし楽しんでいただけましたら発信・拡散にご協力をお願いします。
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>内容のネタバレにならない感想（例:楽しかった、ドキドキした、薬を飲んだ、など）</li>
              <li>自身がアートの前で撮った写真</li>
              <li>報酬の封筒・小切手</li>
              <li>治験イベント参加中タグ　表裏</li>
              <li>７Fに貼られているポスター</li>
              <li>盗薬に成功した！（このエンディングを確認したあなたのみ）</li>
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
