# Chalili Fans Site

一个基于 Astro 的茶理理粉丝站静态网站项目，支持多语言（`zh / en / ja`）和数据驱动内容维护。

## Demo

[https://chalilifans.12dev.us/](https://chalilifans.12dev.us/)

## 当前功能

- 多语言路由与页面：
  - 首页：轮播、最近歌曲、未发歌倒计时、动态
  - 简介页
  - 音乐列表页
  - 歌曲详情页
  - 动态页
  - 粉丝页
- 根路径 `/` 默认跳转到中文站 `/zh/`，可在顶部菜单切换 English 或日本語
- 构建时自动生成站点地图和 robots.txt，页面包含 canonical、多语言 hreflang 及社交分享元数据
- 首页“未发歌时长倒计时”（按 Asia/Shanghai 计算，实时更新）
- 数据源基于 `public/data/*.json`，构建时进行基础校验
- 页脚包含艺人外链与站点源码链接（GitHub）

## 技术栈

- Astro 5
- TypeScript
- 纯 CSS（无额外 UI 框架）

## 目录结构（核心）

```text
src/
  components/          # 页面组件（轮播、歌曲、倒计时、动态等）
  pages/               # 路由页面
    index.astro        # 根路径跳转到中文站
    [locale]/...       # 多语言页面
  lib/content.ts       # JSON 数据读取与校验
  i18n/messages.ts     # 多语言文案
public/
  data/
    songs.json
    news.json
    fan.json
    home_banners.json
```

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址为 [http://localhost:4321](http://localhost:4321)。

## 构建与预览

```bash
npm run build
npm run preview
```

构建产物输出到 `dist/`。

## 数据维护说明

- `public/data/songs.json`
- `public/data/news.json`
- `public/data/fan.json`
- `public/data/home_banners.json`


## 路由概览

- `/`：默认跳转到 `/zh/`
- `/{locale}`：首页
- `/{locale}/bio`
- `/{locale}/music`
- `/{locale}/music/{songId}`
- `/{locale}/news`
- `/{locale}/video`
- `/{locale}/fan`

`{locale}` 取值：`zh`、`en`、`ja`

SEO 规范地址统一使用尾斜杠，例如 `/zh/`、`/zh/music/song-106/`；路由兼容带或不带尾斜杠的访问，避免现有导航和书签出现 404。

## SEO 与收录

- 正式域名统一由 `astro.config.mjs` 的 `site` 配置；本地预览的 canonical 也指向正式域名。
- `npm run build` 自动生成 `dist/sitemap-index.xml`、`dist/sitemap-0.xml` 和 `dist/robots.txt`。新增歌曲会自动进入站点地图，无需手工维护。
- 每个语言页面声明自身 canonical，并链接到相同内容的中英日版本；`x-default` 指向对应中文页面。
- 根路径在 Cloudflare Pages 通过 `public/_redirects` 返回 301 到 `/zh/`；静态构建同时保留立即跳转的 HTML，供本地预览或其他静态服务使用，无需 JavaScript。
- 404 页面使用 `noindex`；404 和根路径跳转页不进入站点地图，站点地图只包含正式内容页面。
- 验证命令：`npm run build && npm run check:seo`。检查生成页面、规范地址、多语言链接互相引用、站点地图与 robots.txt。
- 站点地图由构建生成，使用 `npm run preview` 可在本地检查；开发服务器不会生成 sitemap XML。

部署后，在 Google Search Console 验证站点所有权，提交 `https://chalilifans.12dev.us/sitemap-index.xml`，并用网址检查工具检查根首页及 `/zh/` 的实时页面、请求编入索引。
Cloudflare 可能附加托管的 robots.txt 内容，部署后应核实线上响应仍包含 Sitemap 地址、未阻止 Googlebot 抓取。代码更新和本地提交不会自动完成 Search Console 验证，也不保证 Google 立即收录。

## 部署（Cloudflare Pages）

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20.19.5+`（本地使用 `22.22.0` 验证）
