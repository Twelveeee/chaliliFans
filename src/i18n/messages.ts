import type { Locale } from "@/types/content";

export interface Messages {
  siteTitle: string;
  siteSubtitle: string;
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
    faqEmpty: string;
    starterEmpty: string;
  };
}

const dictionary: Record<Locale, Messages> = {
  zh: {
    siteTitle: "茶理理 Chalili",
    siteSubtitle: "声音、故事与热爱在这里汇合",
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
      fanContribute: "Contribute",
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
      submitVia: "一起开发，欢迎访问站点 GitHub 主页：",
      faqEmpty: "暂无常见问题条目",
      starterEmpty: "暂无入坑推荐内容"
    }
  },
  en: {
    siteTitle: "Chalili",
    siteSubtitle: "Where voice, stories, and fandom come together",
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
      submitVia: "Contribute together on the site GitHub homepage:",
      faqEmpty: "No FAQ items yet",
      starterEmpty: "No starter recommendations available"
    }
  },
  ja: {
    siteTitle: "茶理理 Chalili",
    siteSubtitle: "声と物語、そしてファンがつながる場所",
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
      submitVia: "一緒に開発しましょう。サイトのGitHubページはこちら：",
      faqEmpty: "FAQ項目はまだありません",
      starterEmpty: "入門向けのおすすめはまだありません"
    }
  }
};

export function getMessages(locale: Locale): Messages {
  return dictionary[locale];
}
