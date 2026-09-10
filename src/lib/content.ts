import { promises as fs } from "node:fs";
import path from "node:path";
import type {
  BioCredibility,
  BioSourceItem,
  FanFaqItem,
  FanHub,
  FanInfo,
  FanStarterVideo,
  FanSubmission,
  HomeBanner,
  NewsItem,
  Song
} from "@/types/content";

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
  if (song.bilibiliDesc !== undefined) {
    assert(typeof song.bilibiliDesc === "object" && song.bilibiliDesc !== null, `song(${song.id}).bilibiliDesc must be object`);
    assert(typeof song.bilibiliDesc.zh === "string", `song(${song.id}).bilibiliDesc.zh must be string`);
  }
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

function validateFanStarterVideo(item: FanStarterVideo, index: number): void {
  assert(item.title?.zh, `fan_hub.starterVideos[${index}].title.zh is required`);
  assert(typeof item.url === "string", `fan_hub.starterVideos[${index}].url must be string`);
  assert(item.reason?.zh, `fan_hub.starterVideos[${index}].reason.zh is required`);
}

function validateFanFaqItem(item: FanFaqItem, index: number): void {
  assert(item.q?.zh, `fan_hub.faq[${index}].q.zh is required`);
  assert(item.a?.zh, `fan_hub.faq[${index}].a.zh is required`);
}

function validateFanHub(data: FanHub): void {
  assert(data.disclaimer?.zh, "fan_hub.disclaimer.zh is required");
  assert(Array.isArray(data.starterSongs), "fan_hub.starterSongs must be an array");
  data.starterSongs.forEach((id, index) => {
    assert(typeof id === "string", `fan_hub.starterSongs[${index}] must be string`);
  });

  assert(Array.isArray(data.starterVideos), "fan_hub.starterVideos must be an array");
  data.starterVideos.forEach((item, index) => validateFanStarterVideo(item, index));

  assert(Array.isArray(data.faq), "fan_hub.faq must be an array");
  data.faq.forEach((item, index) => validateFanFaqItem(item, index));

  assert(typeof data.contribute === "object" && data.contribute !== null, "fan_hub.contribute is required");
  assert(typeof data.contribute.label === "string", "fan_hub.contribute.label must be string");
  assert(typeof data.contribute.url === "string", "fan_hub.contribute.url must be string");
}

function validateBioSourceItem(item: BioSourceItem, index: number): void {
  assert(typeof item.label === "string", `bio_credibility.sources[${index}].label must be string`);
  assert(typeof item.url === "string", `bio_credibility.sources[${index}].url must be string`);
  if (item.note !== undefined) {
    assert(typeof item.note === "object" && item.note !== null, `bio_credibility.sources[${index}].note must be object`);
    assert(typeof item.note.zh === "string", `bio_credibility.sources[${index}].note.zh must be string`);
  }
}

function validateBioCredibility(data: BioCredibility): void {
  assert(data.disclaimer?.zh, "bio_credibility.disclaimer.zh is required");
  assert(
    typeof data.lastUpdated === "string" && /^\d{4}-\d{2}-\d{2}$/.test(data.lastUpdated),
    "bio_credibility.lastUpdated must be YYYY-MM-DD"
  );
  assert(Array.isArray(data.sources), "bio_credibility.sources must be an array");
  data.sources.forEach((item, index) => validateBioSourceItem(item, index));
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

export async function getFanHub(): Promise<FanHub> {
  const fanHub = await readJson<FanHub>("fan_hub.json");
  validateFanHub(fanHub);
  return fanHub;
}

export async function getFanSubmissions(): Promise<FanSubmission[]> {
  const submissions = await readJson<FanSubmission[]>("fan_submissions.json");
  assert(Array.isArray(submissions), "fan_submissions.json must be an array");
  const ids = new Set<string>();
  const floors = new Set<number>();
  submissions.forEach((item) => {
    assert(item && typeof item === "object", "fan submission must be an object");
    assert(typeof item.id === "string" && item.id.trim(), "fan submission id is required");
    assert(!ids.has(item.id), `fan submission id ${item.id} must be unique`);
    assert(Number.isInteger(item.floor) && item.floor > 0, `fan submission ${item.id} must have a positive integer floor`);
    assert(!floors.has(item.floor), `fan submission floor ${item.floor} must be unique`);
    ids.add(item.id);
    floors.add(item.floor);
    assert(typeof item.author === "string" && item.author.trim(), `fan submission ${item.id} author is required`);
    assert(typeof item.content === "string" && item.content.trim(), `fan submission ${item.id} content is required`);
    assert(Array.isArray(item.images) && item.images.length > 0, `fan submission ${item.id} images are required`);
    item.images.forEach((image) => {
      assert(image && typeof image === "object", `fan submission ${item.id} image must be an object`);
      assert(typeof image.src === "string" && /^\/assets\/fans_upload\/[a-z0-9-]+\.webp$/.test(image.src), `fan submission ${item.id} image must use a local WebP`);
      assert(typeof image.alt?.zh === "string" && image.alt.zh.trim(), `fan submission ${item.id} image alt is required`);
      assert(Number.isInteger(image.width) && image.width > 0, `fan submission ${item.id} image width must be positive`);
      assert(Number.isInteger(image.height) && image.height > 0, `fan submission ${item.id} image height must be positive`);
    });
  });
  return submissions.sort((a, b) => b.floor - a.floor);
}

export async function getBioCredibility(): Promise<BioCredibility> {
  const bioCredibility = await readJson<BioCredibility>("bio_credibility.json");
  validateBioCredibility(bioCredibility);
  return bioCredibility;
}

export async function getHomeBanners(): Promise<HomeBanner[]> {
  const banners = await readJson<HomeBanner[]>("home_banners.json");
  assert(Array.isArray(banners), "home_banners.json must be an array");
  banners.forEach(validateHomeBanner);
  return banners;
}
