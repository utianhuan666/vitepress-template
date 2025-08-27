import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'EasyComponents',
  description: 'NaiveUI 高级组件库',
  
  themeConfig: {
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
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ],
      '/component/': [
        {
          text: '组件',
          items: [
            { text: '概览', link: '/component/overview' },
            { text: 'Alert 警告', link: '/component/alert' },
            { text: 'Button 按钮', link: '/component/button' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
})