import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { photoSwipePlugin } from "@vuepress/plugin-photo-swipe";
import { feedPlugin } from "@vuepress/plugin-feed";

export default defineUserConfig({
  lang: "zh-CN",
  title: "LeBennington's Archive",
  description: "LeBennington 的第一个 VuePress 博客",
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Alt + S",
        },
      },
      maxSuggestions: 10,
      // isSearchable: (page) => page.path !== '/',  // 排除首页
      getExtraFields: (page) => page.frontmatter.tags ?? [], // 允许搜索 Frontmatter 中的 `tags`
      hotKeys: [{ key: "s", alt: true }],
    }),
    mdEnhancePlugin({
      gfm: true,
      figure: true,
      imgLazyload: true,
      hint: true,
      alert: true,
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
          email: "lebennington@outlokk.com",
        },
        copyright: "",
      },
    }),
  ],
  bundler: viteBundler(),
  markdown: {},
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
    sidebarDepth: 2,

    // editLink: true,
    // editLinkPattern: ':repo',
    // editLinkText: '编辑此页',

    // colorMode: 'auto',
    // colorModeSwitch: true,
    logo: "/images/logo.ico",
    logoDark: "/images/logoDark.ico",

    lastUpdated: true,
    lastUpdatedText: "最近更新",
  }),
});

// const pubDate = new Date();
