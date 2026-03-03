import type { Locale, LocalizedText } from "@/types/content";

export const locales: Locale[] = ["zh", "en", "ja"];

export function isLocale(input: string | undefined): input is Locale {
  return !!input && locales.includes(input as Locale);
}

export function getText(text: LocalizedText, locale: Locale): string {
  return text[locale] || text.zh || "-";
}

export function mapHtmlLang(locale: Locale): string {
  if (locale === "zh") return "zh-CN";
  if (locale === "ja") return "ja";
  return "en";
}
