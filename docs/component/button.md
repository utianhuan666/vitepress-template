# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

<VpDemo>
<template #demo>
<button-basic />
</template>
<template #code>

```vue
<template>
  <div class="demo-space">
    <n-button>默认按钮</n-button>
    <n-button type="primary">主要按钮</n-button>
    <n-button type="info">信息按钮</n-button>
    <n-button type="success">成功按钮</n-button>
    <n-button type="warning">警告按钮</n-button>
    <n-button type="error">危险按钮</n-button>
  </div>
</template>

<style scoped>
.demo-space > * + * {
  margin-left: 12px;
}
</style>
```

</template>
</VpDemo>

## 按钮尺寸

按钮有大、中、小三种尺寸。

<VpDemo>
<template #demo>
<button-size />
</template>
<template #code>

```vue
<template>
  <div class="demo-space">
    <n-button size="large" type="primary">大型按钮</n-button>
    <n-button size="medium" type="primary">中等按钮</n-button>
    <n-button size="small" type="primary">小型按钮</n-button>
  </div>
</template>

<style scoped>
.demo-space > * + * {
  margin-left: 12px;
}
</style>
```

</template>
</VpDemo>

## API

### Button Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型 | `'default' \| 'primary' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'default'` |
| size | 按钮大小 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否加载中 | `boolean` | `false` |