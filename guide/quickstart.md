# 快速开始

## 创建组件文档

### 1. 创建 Markdown 文件

在 `component/` 目录下创建组件文档文件：

```markdown
---
title: 按钮 Button
lang: zh-CN
---

# 按钮 Button

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用 `type`、`plain`、`round` 和 `circle` 属性来定义 Button 的样式。

button/basic

:::

## API

### Button 属性

| 属性名 | 说明         | 类型                                                        | 默认值  |
| ------ | ------------ | ----------------------------------------------------------- | ------- |
| type   | 类型         | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |
| size   | 尺寸         | `'large' \| 'default' \| 'small'`                           | default |
| plain  | 是否朴素按钮 | `boolean`                                                   | false   |
```

### 2. 创建示例组件

在 `examples/` 目录下创建对应的示例组件：

```vue
<!-- examples/button/basic.vue -->
<template>
  <div class="demo-button">
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>

<style scoped>
.demo-button .el-button {
  margin-right: 10px;
}
</style>
```

### 3. 配置导航

在 `.vitepress/config.ts` 中添加导航配置：

```typescript
export default defineConfig({
  themeConfig: {
    sidebar: {
      "/component/": [
        {
          text: "基础组件",
          items: [{ text: "按钮 Button", link: "/component/button" }],
        },
      ],
    },
  },
});
```

## 特殊语法

### Demo 容器

使用 `:::demo` 容器来展示组件示例：

```markdown
:::demo 这里是示例描述

button/basic

:::
```

### API 表格

使用 `ApiTable` 组件来展示 API 文档：

```vue
<ApiTable
  title="Button 属性"
  :headers="['属性名', '说明', '类型', '默认值']"
  :data="[
    ['type', '按钮类型', 'string', '—'],
    ['size', '按钮尺寸', 'string', 'default'],
  ]"
/>
```

## 主题定制

参考 [主题定制](./theming.md) 了解如何自定义文档外观。
