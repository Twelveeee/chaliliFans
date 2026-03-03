import { promises as fs } from "node:fs";
import path from "node:path";
import type { FanInfo, HomeBanner, NewsItem, Song } from "@/types/content";

const dataDir = path.join(process.cwd(), "public", "data");

async function readJson<T>(fileName: string): Promise<T> {
  const filePath = path.join(dataDir, fileName);
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(`[content validation] ${message}`);
  }
}

function validateSong(song: Song): void {
  assert(song.id, "song.id is required");
  assert(song.title?.zh, `song(${song.id}).title.zh is required`);
  assert(typeof song.description?.zh === "string", `song(${song.id}).description.zh must be string`);
  assert(typeof song.artist === "string", `song(${song.id}).artist must be string`);
  assert(typeof song.lyricist === "string", `song(${song.id}).lyricist must be string`);
  assert(typeof song.composer === "string", `song(${song.id}).composer must be string`);
  assert(typeof song.arranger === "string", `song(${song.id}).arranger must be string`);
  assert(typeof song.producer === "string", `song(${song.id}).producer must be string`);
  assert(song.cover, `song(${song.id}).cover is required`);
  assert(typeof song.platformLinks === "object", `song(${song.id}).platformLinks is required`);
  if (song.platformLinks.bilibili !== undefined) {
    assert(typeof song.platformLinks.bilibili === "string", `song(${song.id}).platformLinks.bilibili must be string`);
  }
}

function validateNews(item: NewsItem): void {
  assert(item.id, "news.id is required");
  assert(item.date, `news(${item.id}).date is required`);
  assert(item.title?.zh, `news(${item.id}).title.zh is required`);
  assert(item.content?.zh, `news(${item.id}).content.zh is required`);
}

function validateFanInfo(info: FanInfo): void {
  assert(info.groupName, "fan.groupName is required");
  assert(info.qqGroupId, "fan.qqGroupId is required");
  assert(info.intro?.zh, "fan.intro.zh is required");
}

function validateHomeBanner(banner: HomeBanner): void {
  assert(banner.id, "homeBanner.id is required");
  assert(banner.title?.zh, `homeBanner(${banner.id}).title.zh is required`);
  assert(banner.subtitle?.zh, `homeBanner(${banner.id}).subtitle.zh is required`);
  assert(banner.image, `homeBanner(${banner.id}).image is required`);
  assert(typeof banner.order === "number", `homeBanner(${banner.id}).order must be number`);
  assert(typeof banner.active === "boolean", `homeBanner(${banner.id}).active is required`);
}

export async function getSongs(): Promise<Song[]> {
  const songs = await readJson<Song[]>("songs.json");
  assert(Array.isArray(songs), "songs.json must be an array");
  songs.forEach(validateSong);
  return songs;
}

export async function getNews(): Promise<NewsItem[]> {
  const news = await readJson<NewsItem[]>("news.json");
  assert(Array.isArray(news), "news.json must be an array");
  news.forEach(validateNews);
  return news;
}

export async function getFanInfo(): Promise<FanInfo> {
  const fanInfo = await readJson<FanInfo>("fan.json");
  validateFanInfo(fanInfo);
  return fanInfo;
}

export async function getHomeBanners(): Promise<HomeBanner[]> {
  const banners = await readJson<HomeBanner[]>("home_banners.json");
  assert(Array.isArray(banners), "home_banners.json must be an array");
  banners.forEach(validateHomeBanner);
  return banners;
}
