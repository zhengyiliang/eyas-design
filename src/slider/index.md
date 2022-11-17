---
group:
  title: 数据输入
nav:
  path: /components
---

# 滑动输入条 Slider

滑动型输入器，展示当前值和可选范围。

## 基本用法

基本用法展示。

<code src="./__demo__/basic">

## 基础状态

默认态、禁用态。

<code src="./__demo__/status">

## 设置步长

传入 `step` 设置步长。 默认步长为 1。建议设置值能够被 `max-min` 整除，否则会出现可选最大值小于 `max` 的情况。当设置 `showTicks` 为 `true` 的时候，可显示 step 的刻度线。

<code src="./__demo__/step">

## 范围选择

设置 `range = true` 即可开启范围选择，此时 `value` 为数组。

<code src="./__demo__/range">

## 添加标签文本

可以通过传入 `marks` 添加标签文本。当设置 `onlyMarkValue` 的时候，只可以选择节点值。此时`step`会被忽略。

<code src="./__demo__/marks">

## 显示输入框

当 `showInput` 为 true 时，将显示输入框。当设置 `onlyMarkValue` 为 `true` 时，输入框始终不会显示。

当 `showInput` 传入 `InputNumberProps` 时，`min`、`max`、`step` 属性会以 `SliderProps` 为先。

<code src="./__demo__/input">

## 带有 icon 的滑动输入条

两边带有 icon 表示状态。

<code src="./__demo__/icon">

## 竖直滑动条

设置 `vertical` 为 `true`，将会显示竖直的滑动条

<code src="./__demo__/direction">

## 控制 tooltip 的展示

<code src="./__demo__/tooltip">

## 自定义提示

使用 `formatterTooltip` 可以格式化 Tooltip 的内容。

<code src="./__demo__/format-tooltip">

## 范围刻度可拖拽

通过设置 `range.draggableBar` 为 `true`, 让范围刻度可以拖拽。

<code src="./__demo__/fixed">

## 设置范围

通过 `min` 和 `max` 设置可选范围。

<code src="./__demo__/set-range">

## 反向

设置 `reverse={true}` ，可以交换滑动条的起点和终点。

<code src="./__demo__/reversed">

## 分段输入条

在设置了 `marks` 后，实际上将 `Slider` 分成了多个区间，可以传入 `getIntervalConfig` 对每个区间的宽度和步长进行设置。

**注意：会优先将空间分配给传入了 `width`的区间, 剩下的将会按照区间长度分配剩余的空间。**

<code src="./__demo__/interval">
