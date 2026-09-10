import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

// Verify the generated site, including dynamic song routes, without a browser.
const origin = "https://chalilifans.12dev.us";
const dist = new URL("../dist/", import.meta.url);
const languages = { "zh-CN": "zh", en: "en", ja: "ja" };
const read = (name) => readFile(new URL(name, dist), "utf8");
const locations = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "g"))].map(([tag]) =>
  Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]))
);

async function htmlFiles(directory = "") {
  const entries = await readdir(new URL(directory, dist), { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const name = `${directory}${entry.name}`;
    return entry.isDirectory() ? htmlFiles(`${name}/`) : name.endsWith(".html") ? [name] : [];
  }));
  return files.flat();
}

const indexURL = `${origin}/sitemap-index.xml`;
const index = locations(await read("sitemap-index.xml"));
assert.ok(index.length > 0, "Sitemap index must reference at least one sitemap");
const sitemapURLs = [];
for (const url of index) {
  assert.equal(new URL(url).origin, origin);
  sitemapURLs.push(...locations(await read(new URL(url).pathname.slice(1))));
}
assert.equal(new Set(sitemapURLs).size, sitemapURLs.length, "Sitemap URLs must be unique");
const expected = new Set();
const pages = new Map();
for (const file of await htmlFiles()) {
  if (file === "index.html") continue; // Root redirects to the Chinese homepage.
  const html = await read(file);
  const links = tags(html, "link");
  const meta = tags(html, "meta");
  if (file === "404.html") {
    assert.ok(meta.some((tag) => tag.name === "robots" && tag.content.includes("noindex")));
    assert.ok(!links.some((tag) => tag.rel === "canonical" || tag.hreflang));
    continue;
  }
  assert.ok(file.endsWith("index.html"), `Unexpected indexable HTML file: ${file}`);
  const url = `${origin}/${file.replace(/index\.html$/, "")}`;
  expected.add(url);
  const canonical = links.filter((tag) => tag.rel === "canonical");
  assert.equal(canonical.length, 1, `${file}: one canonical required`);
  assert.equal(canonical[0].href, url, `${file}: canonical must match its own published URL`);
  assert.ok(!meta.some((tag) => tag.name === "robots" && tag.content.includes("noindex")));
  assert.ok(meta.some((tag) => tag.name === "description" && tag.content.trim().length > 0));
  assert.ok(/<title>[^<]*Chalili Fans[^<]*<\/title>/.test(html));
  assert.ok(meta.some((tag) => tag.property === "og:url" && tag.content === url));
  assert.ok(links.some((tag) => tag.rel === "sitemap" && tag.href === indexURL));
  const alternates = links.filter((tag) => tag.rel === "alternate" && tag.hreflang);
  assert.equal(alternates.length, 4, `${file}: three languages and x-default required`);
  const suffix = file.replace(/^(zh|en|ja)\//, "").replace(/index\.html$/, "");
  for (const [lang, locale] of Object.entries(languages)) {
    assert.ok(alternates.some((tag) => tag.hreflang === lang && tag.href === `${origin}/${locale}/${suffix}`), `${file}: ${lang} equivalent page`);
  }
  assert.ok(alternates.some((tag) => tag.hreflang === "x-default" && tag.href === `${origin}/zh/${suffix}`));
  for (const tag of meta.filter((tag) => tag.property === "og:image")) {
    assert.equal(new URL(tag.content).origin, origin);
    await readFile(new URL(decodeURIComponent(new URL(tag.content).pathname.slice(1)), dist));
  }
  pages.set(url, alternates);
}
assert.deepEqual(new Set(sitemapURLs), expected, "Sitemap must contain all indexable pages and no assets or 404s");
for (const [url, alternates] of pages) {
  for (const alternate of alternates) {
    assert.ok(pages.has(alternate.href), `${url}: alternate target must exist`);
    assert.ok(pages.get(alternate.href).some((tag) => tag.href === url), `${url}: alternate links must be reciprocal`);
  }
}
const robots = await read("robots.txt");
assert.match(robots, /^User-agent: \*$/m);
assert.match(robots, /^Allow: \/$/m);
assert.ok(robots.includes(`Sitemap: ${indexURL}`));
assert.ok(!/^Disallow:\s*\/\s*$/m.test(robots));
const home = await read("index.html");
assert.ok(tags(home, "meta").some((tag) => tag["http-equiv"]?.toLowerCase() === "refresh" && tag.content === "0;url=/zh/"), "Static root must immediately redirect to Chinese");
assert.ok(tags(home, "a").some((tag) => tag.href === "/zh/"), "Static redirect must include a fallback link");
assert.match(await read("_redirects"), /^\/\s+\/zh\/\s+301$/m, "Cloudflare must redirect root on the server");
assert.ok(!expected.has(`${origin}/`), "Redirecting root must not appear in the sitemap");
assert.ok(!home.includes("location.replace") && !home.includes("navigator.language"));
console.log(`SEO checks passed: ${expected.size} indexable pages, canonical URLs, reciprocal hreflang, sitemap, robots, social metadata, default Chinese redirect, and 404 exclusion.`);
