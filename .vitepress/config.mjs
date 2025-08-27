import { defineConfig } from "vitepress";
import { demoBlockPlugin } from "./plugins/demo.js";

export default defineConfig({
  title: "EasyComponents",
  description: "基于 Naive UI 的高级组件库",
  themeConfig: {
    logo: "/logo.webp",
    nav: [
      { text: "指南", link: "/guide/installation" },
      { text: "组件", link: "/component/overview" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "安装", link: "/guide/installation" },
            { text: "快速开始", link: "/guide/quickstart" },
            { text: "主题定制", link: "/guide/theming" },
          ],
        },
      ],
      "/component/": [
        {
          text: "组件",
          items: [
            { text: "总览", link: "/component/overview" },
            { text: "Button 按钮", link: "/component/button" },
            { text: "Alert 警告", link: "/component/alert" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/your-username/EasyComponents-naiveui",
      },
    ],
  },

  markdown: {
    config(md) {
      md.use(demoBlockPlugin);
    },
  },
  vite: {
    ssr: {
      noExternal: ["naive-ui"],
    },
    optimizeDeps: {
      include: ["naive-ui", "@vicons/ionicons5"],
    },
    build: {
      chunkSizeWarningLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
  },
});
