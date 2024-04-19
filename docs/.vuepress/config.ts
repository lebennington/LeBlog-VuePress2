import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { photoSwipePlugin } from "@vuepress/plugin-photo-swipe";
import { feedPlugin } from "@vuepress/plugin-feed";
// import { readingTimePlugin } from "@vuepress/plugin-reading-time";
// import anchorPlugin from "markdown-it-anchor";
import { removeHtmlExtensionPlugin } from "vuepress-plugin-remove-html-extension";

// const anchorOptions = {
//   level: [1, 2, 3, 4, 5, 6],
//   permalink: anchorPlugin.permalink.headerLink(),
// };

export default defineUserConfig({
  lang: "zh-CN",
  title: "LeBennington's Blog",
  description: "基于 VuePress 2",
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Alt + S",
        },
      },
      maxSuggestions: 50,
      // isSearchable: (page) => page.path !== '/',  // 排除首页
      getExtraFields: (page) => page.frontmatter.tags ?? [], // 允许搜索 Frontmatter 中的 `tags`
      hotKeys: [{ key: "s", alt: true }],
    }),
    // docsearchPlugin({
    //   apiKey: "",
    //   indexName: "",
    //   appId: "",
    // }),
    mdEnhancePlugin({
      gfm: true,
      // figure: true,
      imgLazyload: true,
      hint: true,
      alert: true,
      sub: true,
      sup: true,
      obsidianImgSize: true,
      mark: true,
      katex: true,
    }),
    copyCodePlugin({
      showInMobile: true,
    }),
    photoSwipePlugin({}),
    feedPlugin({
      rss: true,
      devServer: true,
      hostname: "blog.lebennington.com",
      channel: {
        // pubDate: new Date(),
        ttl: 1440,
        author: {
          name: "LeBenningon",
          email: "lebennington@outlook.com",
        },
      },
    }),
    // readingTimePlugin({}),
    removeHtmlExtensionPlugin(),
  ],
  bundler: viteBundler(),
  markdown: {
    // 和 theme.themePlugins.activeHeaderLinks 同步修改
    // anchor: {
    //   level: anchorOptions.level,
    //   permalink: anchorOptions.permalink,
    // },
    code: {
      lineNumbers: 5,
    },
  },
  theme: defaultTheme({
    hostname: "lebennington.com",
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "归档",
        link: "/archive/",
      },
      {
        text: "联系我",
        children: [
          {
            text: "你还真有这个想法？",
            link: "",
          },
          // {
          //   text: "微博",
          //   link: "https://weibo.com/u/3924104690",
          // },
          {
            text: "Email",
            link: "mailto:lebennington@outlook.com",
          },
          {
            text: "Instagram",
            link: "https://www.instagram.com/lebennington",
          },
          // {
          //   text: 'Active on /foo/',
          //   link: '/not-foo/',
          //   // 该元素在当前路由路径是 /foo/ 开头时激活
          //   // 支持正则表达式
          //   activeMatch: '^/foo/',
          // },
        ],
      },
    ],
    sidebar: {
      "/zotero/": [
        {
          text: "Zotero 使用手册",
          link: "/zotero/",
          // collapsible: true,
          children: ["zotero的安装", "zotero导出笔记"],
        },
      ],
    },
    // sidebar: "auto",
    sidebarDepth: 2,
    // editLink: true,
    // editLinkPattern: ':repo',
    // editLinkText: '编辑此页',

    logo: "/images/logo.ico",
    logoDark: "/images/logoDark.ico",

    lastUpdated: true,
    lastUpdatedText: "最近更新",

    themePlugins: {
      mediumZoom: false,
      // activeHeaderLinks: true, //与 plugins.markdown.anchor 同步修改
    },
  }),
});
