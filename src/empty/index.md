---
group:
  title: 数据展示
  order: 2
nav:
  path: /components
---

# 空状态 Empty

指当前场景没有对应的数据内容，呈现出的一种状态。

## 基本用法

`Empty` 空状态组件的基础用法。

<code src="./__demo__/basic">

## 自定义图标和文案

可以通过 `icon` 参数传入自定义图标，`description` 修改显示文案。

<code src="./__demo__/custom_icon">

## 自定义图片

可以通过 `imgSrc` 参数传入图片 Url。

<code src="./__demo__/image">

## API

### Empty

| 参数名      | 描述             | 类型                 | 默认值 |
| ----------- | ---------------- | -------------------- | ------ |
| imgSrc      | 将图标替换为图片 | `string`             | `-`    |
| description | 显示文案         | `ReactNode`          | `-`    |
| icon        | 自定义显示图案   | `ReactNode`          | `-`    |
| className   | 节点类名         | `string \| string[]` | `-`    |
| style       | 节点样式         | `CSSProperties`      | `-`    |
