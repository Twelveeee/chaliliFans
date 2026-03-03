export type Locale = "zh" | "en" | "ja";

export interface LocalizedText {
  zh: string;
  en?: string;
  ja?: string;
}

export interface Song {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  artist: string;
  lyricist: string;
  composer: string;
  arranger: string;
  producer: string;
  cover: string;
  releaseDate: string;
  platformLinks: {
    netease?: string;
    qq?: string;
    bilibili?: string;
  };
  neteaseSongId: number | null;
}

export interface NewsItem {
  id: string;
  date: string;
  title: LocalizedText;
  content: LocalizedText;
  link?: string;
}

export interface FanInfo {
  groupName: string;
  qqGroupId: string;
  intro: LocalizedText;
}

export interface HomeBanner {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  image: string;
  link?: string;
  order: number;
  active: boolean;
}
