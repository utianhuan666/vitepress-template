# 安装

## 环境要求

- Node.js 18+
- pnpm 8+ (推荐)

## 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

## 开发

```bash
# 启动开发服务器
pnpm dev

# 构建文档
pnpm build

# 预览构建结果
pnpm preview
```

## 项目结构

```
element-docs-system/
├── .vitepress/           # VitePress 配置
│   ├── config.ts         # 主配置文件
│   ├── theme/            # 自定义主题
│   └── config/           # 配置模块
├── guide/                # 指南文档
├── component/            # 组件文档
├── examples/             # 示例代码
└── public/               # 静态资源
```

## 下一步

- [快速开始](./quickstart.md) - 了解如何使用文档系统
- [主题定制](./theming.md) - 自定义文档外观
