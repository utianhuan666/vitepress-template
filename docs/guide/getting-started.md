# 快速开始

## 完整引入

```js
import { createApp } from 'vue'
import ProComponents from 'pro-components'
import 'pro-components/dist/style.css'

const app = createApp(App)
app.use(ProComponents)
```

## 按需引入

```js
import { ProTable, ProForm } from 'pro-components'
```

## 使用示例

```vue
<template>
  <pro-table :columns="columns" :data="data" />
</template>

<script setup>
const columns = [
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' }
]

const data = [
  { name: '张三', age: 25 },
  { name: '李四', age: 30 }
]
</script>