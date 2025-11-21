export const worksData = [
  {
    id: 1,
    title: "レコ将",
    description: "将棋の対局記録の管理アプリ",
    images: ["images/shogi/0_main.png","images/shogi/1_top.png","images/shogi/2_home.png","images/shogi/3_create.png","images/shogi/4_battle-index.png"],
    technologies: ["Nuxt.js", "TypeScript", "Rails", "CloudFlare"],
    demo: "https://shogi-record.com/",
    detailedDescription: `自分自身が将棋が趣味で、将棋道場に時々行きます。その際、どの段位の方とどんな将棋を指し、結果はどうだったのか、記録をつけるアプリが欲しいと思い、自作しました。
機能面：シンプルで使いやすいUIを意識しつつ、戦術の相性や得意・不得意の分析に繋げられるよう、詳しい項目を入力可能に。
技術面：AI未使用。Nuxtを使ったSPAにしつつ、個人開発でもテストを書いて品質担保し、拡張性を意識。`
  },
  {
    id: 2,
    title: "筋トレモチベトラッカー",
    description: "手軽な筋トレ記録アプリ",
    images: ["images/muscle/0_main.jpg", "images/muscle/1_calender.jpg", "images/muscle/2_create.jpg", "images/muscle/3_mobile.png"],
    technologies: ["v0", "Supabase", "radix-ui"],
    demo: "https://v0-awesome-training.vercel.app/",
    detailedDescription: `フルリモート勤務になり、運動不足を少しでも解消するため、モチベ維持ができる筋トレ記録アプリを制作。22週連続自重トレーニングが続いています。
機能面：手軽さを意識し、運動の種類は手入力、単位も時間のみのシンプルさ。継続を連続日数・週数にすることでモチベ維持に繋げる。
技術面：一切自分でコードを書かず、v0 へのプロンプトのみで実現。Supabase の無料枠を使いデータを永続化。`
  },
  {
    id: 3,
    title: "ポートフォリオ",
    description: "エンジニアとしての自己紹介",
    images: ["images/portfolio/0_main.png", "images/portfolio/1_skills.jpg", "images/portfolio/2_philosophy.jpg"],
    technologies: ["Bolt.new", "React", "Tailwind CSS", "Github Pages"],
    github: "https://github.com/tea-19-dev/engineer-portfolio",
    detailedDescription: `v0 以外のAIローコードツールを試したく、Boltで制作。トークンの無料枠が少ないため、手直しもしています。
機能面：統一されたデザインで見やすさを意識しつつ、業務に入った際のイメージが持ちやすいよう仕事のスタンスを記載。
技術面：維持費がかからないよう、問い合わせは外部ツールを使い、Github Pages でホスティング。コンテンツを更新しやすいよう、データはJSON管理`
  }
];
