---
group:
  title: 数据展示
nav:
  path: /components
---

# 标签 Tag

用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作。

## 基础用法

标签的基础用法。

<code src="./__demo__/basic">

## 可关闭标签

可设置 `closable` 属性控制标签是否可关闭，可关闭标签可通过 `onClose` 事件执行一些关闭后操作。也可通过 `visible` 属性控制标签的显示隐藏。

<code src="./__demo__/close">

## 可选中

通过参数 `checkable`，可以实现点击选中的效果。

<code src="./__demo__/check">

## 多色标签

我们提供多种预设色彩的标签样式，通过 `color` 设置不同颜色。如果预设值不能满足你的需求，`color` 字段也可以设置自定义色值。

<code src="./__demo__/color">

## 动态编辑标签

可动态添加和删除标签。

<code src="./__demo__/active">

## 不同尺寸

标签分为：小、中、大、巨大，可以在不同场景下选择合适按钮尺寸。推荐及默认尺寸为「中」。

<code src="./__demo__/size">

## 异步关闭

如果 `onClose` 返回一个 `Promise`，可以异步关闭标签，并且在未关闭时展示加载效果。

<code src="./__demo__/close-async">

## 带图标的标签

可通过设置 `icon` 在标签中加入图标。

<code src="./__demo__/icon">

## 带边框的标签

通过参数 `bordered`，可以显示带边框的标签。

<code src="./__demo__/bordered">

## API

### Tag

| 参数名         | 描述                 | 类型                                   | 默认值    |
| -------------- | -------------------- | -------------------------------------- | --------- |
| checkable      | 是否支持选中         | `boolean`                              | `-`       |
| checked        | 是否选中（受控模式） | `boolean`                              | `-`       |
| closable       | 是否可关闭标签       | `boolean`                              | `-`       |
| defaultChecked | 是否默认选中         | `boolean`                              | `-`       |
| visible        | 设置标签显示隐藏     | `boolean`                              | `-`       |
| color          | 设置标签背景颜色     | `string`                               | `-`       |
| size           | 标签尺寸             | `small \| default \| medium \| large`  | `default` |
| closeIcon      | 自定义关闭图标       | `ReactNode`                            | `-`       |
| icon           | 设置图标             | `ReactNode`                            | `-`       |
| bordered       | 是否显示边框         | `Boolean`                              | `-`       |
| className      | 节点类名             | `string \| string[]`                   | `-`       |
| onClose        | 关闭标签回调函数     | `(e) =&gt; Promise&lt;any&gt; \| void` | `-`       |
| style          | 节点样式             | `CSSProperties`                        | `-`       |
| onCheck        | 选中的回调           | `(checked: boolean) => void`           | `-`       |
