# Alert 警告

用于页面中展示重要的提示信息。

## 基础用法

基本的警告提示，分为四种类型：`info`、`success`、`warning`、`error`。

<VpDemo>
<template #demo>
<alert-basic />
</template>
<template #code>

```vue
<template>
  <div class="demo-space">
    <n-alert title="Info" type="info">
      这是一条信息提示
    </n-alert>
    <n-alert title="Success" type="success">
      这是一条成功提示
    </n-alert>
    <n-alert title="Warning" type="warning">
      这是一条警告提示
    </n-alert>
    <n-alert title="Error" type="error">
      这是一条错误提示
    </n-alert>
  </div>
</template>

<style scoped>
.demo-space > * + * {
  margin-top: 12px;
}
</style>
```

</template>
</VpDemo>

## API

### Alert Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 警告提示的标题 | `string` | - |
| type | 警告的类型 | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` |
| closable | 是否可关闭 | `boolean` | `false` |
| show-icon | 是否显示图标 | `boolean` | `true` |