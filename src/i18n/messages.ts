import type { Locale } from "@/types/content";

export interface Messages {
  siteTitle: string;
  siteSubtitle: string;
  seoDescriptions: Record<"home" | "bio" | "music" | "news" | "video" | "fan", string>;
  nav: {
    home: string;
    bio: string;
    music: string;
    video: string;
    fan: string;
    news: string;
  };
  cta: {
    watchVideo: string;
    toDetail: string;
    backHome: string;
    netease: string;
    qq: string;
    bilibili: string;
  };
  sections: {
    hero: string;
    bio: string;
    video: string;
    fan: string;
    music: string;
    news: string;
    recentSongs: string;
    fanDisclaimer: string;
    fanStarter: string;
    fanFaq: string;
    fanContribute: string;
    fanSubmissions: string;
    bioSources: string;
  };
  countdown: {
    title: string;
    sinceLabel: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    noData: string;
  };
  common: {
    businessEmail: string;
    noLink: string;
    qqGroup: string;
    releaseDate: string;
    tags: string;
    longBioTitle: string;
    switchLanguage: string;
    openExternal: string;
    sortBy: string;
    sortNewest: string;
    sortOldest: string;
    sortTitle: string;
    songIntro: string;
    artist: string;
    lyricist: string;
    composer: string;
    arranger: string;
    producer: string;
    lastUpdated: string;
    source: string;
    fanMadeNotice: string;
    submitVia: string;
    submittedBy: string;
    faqEmpty: string;
    starterEmpty: string;
  };
}

const dictionary: Record<Locale, Messages> = {
  zh: {
    siteTitle: "茶理理 Chalili",
    siteSubtitle: "声音、故事与热爱在这里汇合",
    seoDescriptions: {
      home: "Chalili Fans 茶理理粉丝站，收录茶理理歌曲、作品信息、最新动态和粉丝投稿，发现她的音乐与故事。",
      bio: "了解茶理理 Chalili 的个人简介、音乐经历与代表作品，查阅粉丝整理的资料和来源。",
      music: "浏览茶理理 Chalili 的歌曲列表、发布时间和作品介绍，查看歌曲详情及 Bilibili、网易云等平台链接。",
      news: "查看茶理理 Chalili 的新歌发布与作品动态，阅读相关介绍并访问原始发布链接。",
      video: "从 Chalili Fans 前往茶理理的 Bilibili 主页，观看音乐作品与视频投稿。",
      fan: "茶理理粉丝交流区：查看粉丝投稿与收藏分享、QQ群信息，以及向 Chalili Fans 投稿的邮箱和常见问题。"
    },
    nav: {
      home: "首页",
      bio: "简介",
      music: "音乐",
      video: "视频",
      fan: "粉丝",
      news: "动态"
    },
    cta: {
      watchVideo: "前往 Bilibili",
      toDetail: "查看详情",
      backHome: "返回首页",
      netease: "网易云音乐",
      qq: "QQ音乐",
      bilibili: "Bilibili"
    },
    sections: {
      hero: "焦点内容",
      bio: "个人简介",
      video: "视频入口",
      fan: "粉丝区",
      music: "音乐",
      news: "最新动态",
      recentSongs: "最近歌曲",
      fanDisclaimer: "声明",
      fanStarter: "入坑指南",
      fanFaq: "常见问题",
      fanContribute: "投稿方式",
      fanSubmissions: "粉丝投稿",
      bioSources: "资料来源与声明"
    },
    countdown: {
      title: "茶理理已经多久没有发歌了",
      sinceLabel: "最近发歌：",
      days: "天",
      hours: "时",
      minutes: "分",
      seconds: "秒",
      noData: "暂无可用的发歌日期数据"
    },
    common: {
      businessEmail: "商务合作",
      noLink: "暂无外链",
      qqGroup: "QQ群号",
      releaseDate: "发布日期",
      tags: "标签",
      longBioTitle: "个人见解",
      switchLanguage: "切换语言",
      openExternal: "打开外部链接",
      sortBy: "排序",
      sortNewest: "最新优先",
      sortOldest: "最早优先",
      sortTitle: "按标题",
      songIntro: "歌曲简介",
      artist: "歌手",
      lyricist: "作词",
      composer: "作曲",
      arranger: "编曲",
      producer: "制作人",
      lastUpdated: "最后更新",
      source: "来源",
      fanMadeNotice: "粉丝站声明",
      submitVia: "请发送投稿文案、图片和希望展示的昵称至邮箱，审核整理后发布。",
      submittedBy: "投稿：",
      faqEmpty: "暂无常见问题条目",
      starterEmpty: "暂无入坑推荐内容"
    }
  },
  en: {
    siteTitle: "Chalili",
    siteSubtitle: "Where voice, stories, and fandom come together",
    seoDescriptions: {
      home: "Chalili Fans is a fan-made guide to Chalili’s songs, releases, latest updates, and fan submissions. Explore her music and stories.",
      bio: "Learn about Chalili’s background, music journey, and notable works through fan-curated information and sources.",
      music: "Explore Chalili’s songs, release dates, and descriptions, with details and listening links to Bilibili, NetEase Music, and more.",
      news: "Catch up on Chalili’s song releases and music updates, with descriptions and links to the original announcements.",
      video: "Visit Chalili’s Bilibili profile from Chalili Fans to watch her music and video uploads.",
      fan: "Explore Chalili fan submissions and collections, find the QQ fan group, and learn how to contribute to Chalili Fans by email."
    },
    nav: {
      home: "Home",
      bio: "Bio",
      music: "Music",
      video: "Video",
      fan: "Fan",
      news: "News"
    },
    cta: {
      watchVideo: "Open Bilibili",
      toDetail: "Details",
      backHome: "Back to Home",
      netease: "NetEase Music",
      qq: "QQ Music",
      bilibili: "Bilibili"
    },
    sections: {
      hero: "Featured",
      bio: "Biography",
      video: "Video",
      fan: "Fan",
      music: "Music",
      news: "Latest Updates",
      recentSongs: "Recent Songs",
      fanDisclaimer: "Disclaimer",
      fanStarter: "Getting Started",
      fanFaq: "FAQ",
      fanContribute: "Contribute",
      fanSubmissions: "Fan Submissions",
      bioSources: "Sources & Notice"
    },
    countdown: {
      title: "How long has Chalili not released a song?",
      sinceLabel: "Latest release:",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      noData: "No valid release date data available"
    },
    common: {
      businessEmail: "Business",
      noLink: "No external links",
      qqGroup: "QQ Group",
      releaseDate: "Release Date",
      tags: "Tags",
      longBioTitle: "Insights",
      switchLanguage: "Language",
      openExternal: "Open external link",
      sortBy: "Sort",
      sortNewest: "Newest first",
      sortOldest: "Oldest first",
      sortTitle: "By title",
      songIntro: "Description",
      artist: "Artist",
      lyricist: "Lyricist",
      composer: "Composer",
      arranger: "Arranger",
      producer: "Producer",
      lastUpdated: "Last Updated",
      source: "Source",
      fanMadeNotice: "Fan Site Notice",
      submitVia: "Email your text, images, and preferred display name. Submissions will be reviewed and prepared before publication.",
      submittedBy: "Submitted by: ",
      faqEmpty: "No FAQ items yet",
      starterEmpty: "No starter recommendations available"
    }
  },
  ja: {
    siteTitle: "茶理理 Chalili",
    siteSubtitle: "声と物語、そしてファンがつながる場所",
    seoDescriptions: {
      home: "Chalili Fans は茶理理の楽曲・作品情報・最新ニュース・ファン投稿を紹介するファンサイトです。音楽と物語をお楽しみください。",
      bio: "茶理理 Chalili のプロフィール、音楽活動、代表作品を、ファンが整理した資料と出典から紹介します。",
      music: "茶理理 Chalili の楽曲一覧、公開日、作品紹介を掲載。詳細ページから Bilibili や NetEase Music などの配信先へアクセスできます。",
      news: "茶理理 Chalili の新曲公開や音楽活動の最新情報を、作品紹介や公開元へのリンクとともに掲載しています。",
      video: "Chalili Fans から茶理理の Bilibili プロフィールへ。音楽作品や投稿動画をご覧いただけます。",
      fan: "茶理理のファン投稿やコレクション、QQファングループ情報を紹介。メールでの投稿方法とよくある質問も掲載しています。"
    },
    nav: {
      home: "ホーム",
      bio: "プロフィール",
      music: "音楽",
      video: "動画",
      fan: "ファン",
      news: "ニュース"
    },
    cta: {
      watchVideo: "Bilibiliへ",
      toDetail: "詳細を見る",
      backHome: "トップへ戻る",
      netease: "NetEase Music",
      qq: "QQ Music",
      bilibili: "Bilibili"
    },
    sections: {
      hero: "注目コンテンツ",
      bio: "プロフィール",
      video: "動画",
      fan: "ファン",
      music: "音楽",
      news: "最新情報",
      recentSongs: "最近の楽曲",
      fanDisclaimer: "免責事項",
      fanStarter: "入門ガイド",
      fanFaq: "よくある質問",
      fanContribute: "投稿・協力",
      fanSubmissions: "ファン投稿",
      bioSources: "出典と注記"
    },
    countdown: {
      title: "茶理理は最後の新曲公開からどれくらい経った？",
      sinceLabel: "最新の公開曲：",
      days: "日",
      hours: "時間",
      minutes: "分",
      seconds: "秒",
      noData: "有効な公開日データがありません"
    },
    common: {
      businessEmail: "ビジネス連絡",
      noLink: "外部リンクなし",
      qqGroup: "QQグループ",
      releaseDate: "リリース日",
      tags: "タグ",
      longBioTitle: "インサイト",
      switchLanguage: "言語",
      openExternal: "外部リンクを開く",
      sortBy: "並び替え",
      sortNewest: "新しい順",
      sortOldest: "古い順",
      sortTitle: "タイトル順",
      songIntro: "楽曲紹介",
      artist: "歌手",
      lyricist: "作詞",
      composer: "作曲",
      arranger: "編曲",
      producer: "プロデューサー",
      lastUpdated: "最終更新",
      source: "出典",
      fanMadeNotice: "ファンサイト注記",
      submitVia: "投稿本文・画像・掲載希望のニックネームをメールでお送りください。内容を確認・整理したうえで掲載します。",
      submittedBy: "投稿者：",
      faqEmpty: "FAQ項目はまだありません",
      starterEmpty: "入門向けのおすすめはまだありません"
    }
  }
};

export function getMessages(locale: Locale): Messages {
  return dictionary[locale];
}
