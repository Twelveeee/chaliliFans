# Chalili Fans Site

一个基于 Astro 的茶理理粉丝站静态网站项目，支持多语言（`zh / en / ja`）和数据驱动内容维护。

## 当前功能

- 多语言路由与页面：
  - 首页：轮播、最近歌曲、未发歌倒计时、动态
  - 简介页
  - 音乐列表页
  - 歌曲详情页
  - 动态页
  - 粉丝页
- 根路径 `/` 自动根据浏览器语言跳转到 `/zh`、`/en` 或 `/ja`
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
    index.astro        # 根路径语言跳转
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

- `/`：自动语言跳转
- `/{locale}`：首页
- `/{locale}/bio`
- `/{locale}/music`
- `/{locale}/music/{songId}`
- `/{locale}/news`
- `/{locale}/video`
- `/{locale}/fan`

`{locale}` 取值：`zh`、`en`、`ja`

## 部署（Cloudflare Pages）

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `20+`
