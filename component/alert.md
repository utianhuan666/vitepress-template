---
title: Alert 警告
lang: zh-CN
---

# Alert 警告

用于页面中展示重要的提示信息。

## 基础用法

页面中的非浮层元素，不会自动消失。

:::demo Alert 组件提供四种主题，由 `type` 属性指定，默认值为 `info`。

alert/basic

:::

## 主题

Alert 组件提供了两个不同的主题：`light` 和 `dark`。

:::demo 通过设置 `effect` 属性来改变主题，默认为 `light`。

alert/theme

:::

## 带有图标

表示某种状态时提升可读性。

:::demo 通过设置 `show-icon` 属性来显示 Alert 的 icon，这能更有效地向用户展示你的意图。

alert/icon

:::

## Alert API

### Alert 属性

| 属性名      | 说明               | 类型                                          | 默认值 |
| ----------- | ------------------ | --------------------------------------------- | ------ |
| title       | 标题               | `string`                                      | —      |
| type        | 主题               | `'success' \| 'warning' \| 'info' \| 'error'` | info   |
| description | 辅助性文字         | `string`                                      | —      |
| closable    | 是否可关闭         | `boolean`                                     | true   |
| center      | 文字是否居中       | `boolean`                                     | false  |
| close-text  | 关闭按钮自定义文本 | `string`                                      | —      |
| show-icon   | 是否显示图标       | `boolean`                                     | false  |
| effect      | 选择提供的主题     | `'light' \| 'dark'`                           | light  |

### Alert 事件

| 事件名 | 说明                    | 类型         |
| ------ | ----------------------- | ------------ |
| close  | 关闭 Alert 时触发的事件 | `() => void` |

### Alert 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 描述       |
| title   | 标题的内容 |
