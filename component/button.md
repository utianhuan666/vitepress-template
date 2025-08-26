# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用 `type` 属性来定义 Button 的样式。

button/basic

:::

## 禁用状态

按钮不可用状态。

:::demo 你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

button/disabled

:::

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`large`、`small`、`tiny`，通过设置 `size` 属性来配置它们。

button/size

:::

## Button API

### Button Props

| 名称     | 类型                                                                    | 默认值      | 说明             |
| -------- | ----------------------------------------------------------------------- | ----------- | ---------------- |
| type     | `'default' \| 'primary' \| 'info' \| 'success' \| 'warning' \| 'error'` | `'default'` | 按钮的类型       |
| size     | `'large' \| 'medium' \| 'small' \| 'tiny'`                              | `'medium'`  | 按钮的尺寸       |
| disabled | `boolean`                                                               | `false`     | 是否禁用按钮     |
| loading  | `boolean`                                                               | `false`     | 是否显示加载状态 |

### Button Events

| 名称  | 类型                      | 说明           |
| ----- | ------------------------- | -------------- |
| click | `(e: MouseEvent) => void` | 点击按钮时触发 |
