---
group:
  title: 布局
nav:
  path: /components
---

# 分割线 Divider

划分内容区域，对模块做分隔。

## 基本用法

对不同章节的文本段落进行分割，默认为水平分割线，可在中间加入文字。

<code src="./__demo__/basics">

## 带有文字的分割线

通过 `orientation` 指定分割线文字的位置。

<code src="./__demo__/orientation">

## 竖直分割线

指定 `type` 为 `vertical` 即可使用竖直分割线。竖直分割线不能带文字。

<code src="./__demo__/vertical">

## API

### Divider

| 参数名      | 描述                         | 类型                      | 默认值       |
| ----------- | ---------------------------- | ------------------------- | ------------ |
| orientation | 分割线文字的位置             | `left \| right \| center` | `center`     |
| type        | 分割线的类型，是水平还是竖直 | `horizontal \| vertical`  | `horizontal` |
| className   | 节点类名                     | `string \| string[]`      | `--`         |
| style       | 节点样式                     | `CSSProperties`           | `--`         |
