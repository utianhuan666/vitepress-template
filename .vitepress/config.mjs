import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from './plugins/demo.js'

export default defineConfig({
  title: 'ProComponents',
  description: '基于 Naive UI 的高级组件库',
  
  themeConfig: {
    logo:'/logo.webp',
    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/component/overview' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' },
            { text: '主题定制', link: '/guide/theming' }
          ]
        }
      ],
      '/component/': [
        {
          text: '组件',
          items: [
            { text: '总览', link: '/component/overview' },
            { text: 'Button 按钮', link: '/component/button' },
            { text: 'Alert 警告', link: '/component/alert' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/procomponents-naiveui' }
    ]
  },

  markdown: {
    config(md) {
      md.use(demoBlockPlugin)
    }
  }
})