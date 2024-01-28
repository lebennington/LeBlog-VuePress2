import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Alt + S',
        },
      },
      maxSuggestions: 10,
      // isSearchable: (page) => page.path !== '/',  // 排除首页
      getExtraFields: (page) => page.frontmatter.tags ?? [],  // 允许搜索 Frontmatter 中的 `tags`
    }),
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '导航',
        link: '/guide/',
      },
      {
        text: '联系我',
        children: [
          // {
          //   text: 'B站',
          //   link: 'https://space.bilibili.com/15710950'
          // },
          {
            text: '微博',
            link: 'https://weibo.com/u/3924104690'
          },
          {
            text: 'Instagram',
            link: 'https://www.instagram.com/lebennington'
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
      '/guide/': [
        '/guide/',
        // {
        //   text: '导航',
        //   collapsible: true,
        //   children: [
        //     '',
        //     'd'
        //   ],
        // },
      ],
      '/Zotero/': [
        {
          text: 'Zotero 使用手册',
          collapsible: true,
          children: [
            'introduction',
            'Zotero1',
            'Zotero2'
          ],
        },
      ],
    },
    sidebarDepth: 2,

    // editLink: true,
    // editLinkPattern: ':repo',
    // editLinkText: '编辑此页',

    // colorMode: 'auto',
    // colorModeSwitch: true,
    logo: '/images/logo.ico',
    logoDark: '/images/logoDark.ico',

    lastUpdated: true,
    lastUpdatedText: '最近更新',
  }),

  lang: 'zh-CN',
  title: ' LeBennington\'s Archive ',
  description: 'LeBennington 的第一个 VuePress 站点',
})

export interface HotKeyOptions {
  key: 'S';
  alt?: true;
  ctrl?: false;
  shift?: false;
}