# 主题定制

## CSS 变量

文档系统使用 CSS 变量来定义主题样式，你可以通过覆盖这些变量来自定义外观。

### 品牌色

```css
:root {
  --vp-c-brand-1: #409eff;
  --vp-c-brand-2: #66b2ff;
  --vp-c-brand-3: #79bbff;
  --vp-c-brand-soft: rgba(64, 158, 255, 0.14);
}
```

### 背景色

```css
:root {
  --vp-c-bg: #ffffff;
  --vp-c-bg-alt: #f6f8fa;
  --vp-c-bg-elv: #ffffff;
  --vp-c-bg-soft: #f6f8fa;
}
```

### 文字色

```css
:root {
  --vp-c-text-1: #213547;
  --vp-c-text-2: #476582;
  --vp-c-text-3: #7c8b9c;
}
```

## 自定义样式

### 创建自定义样式文件

在 `.vitepress/theme/styles/` 目录下创建自定义样式文件：

```css
/* .vitepress/theme/styles/custom.css */
.custom-container {
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}
```

### 在主题中引入

```typescript
// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import "./styles/custom.css";

export default {
  extends: DefaultTheme,
  // ...
};
```

## 组件定制

### 自定义 Demo 组件

你可以扩展或替换默认的 Demo 组件：

```vue
<!-- .vitepress/theme/components/CustomDemo.vue -->
<template>
  <div class="custom-demo">
    <!-- 自定义 demo 展示逻辑 -->
  </div>
</template>
```

### 注册自定义组件

```typescript
// .vitepress/theme/index.ts
import CustomDemo from "./components/CustomDemo.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("CustomDemo", CustomDemo);
  },
};
```

## 深色模式

文档系统内置了深色模式支持，你可以为深色模式定义专门的样式：

```css
.dark {
  --vp-c-bg: #1b1b1f;
  --vp-c-text-1: rgba(255, 255, 245, 0.86);
  /* 其他深色模式变量 */
}
```

## 响应式设计

使用媒体查询来适配不同屏幕尺寸：

```css
@media (max-width: 768px) {
  .demo-content {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .demo-actions {
    flex-direction: column;
  }
}
```
