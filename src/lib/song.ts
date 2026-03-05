import { getText } from "@/lib/i18n";
import type { Locale, LocalizedText, Song } from "@/types/content";

function resolveLocalizedTextValue(text: LocalizedText | undefined, locale: Locale): string {
  if (!text) return "";
  const value = getText(text, locale).trim();
  return value === "-" ? "" : value;
}

export function getSongDisplayDescription(song: Pick<Song, "description" | "bilibiliDesc">, locale: Locale): string {
  const description = resolveLocalizedTextValue(song.description, locale);
  if (description) return description;
  return resolveLocalizedTextValue(song.bilibiliDesc, locale);
}
