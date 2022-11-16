---
group:
  title: 数据输入
nav:
  path: /components
---

# 开关 Switch

互斥性的操作控件，用户可打开或关闭某个功能。

## 基础用法

最基础的应用

<code src="./__demo__/basics">

## 不同类型

有三种类型的开关可供选择。

<code src="./__demo__/shape">

## 禁用状态

通过 `disabled` 设置 `Switch` 为禁用状态。

<code src="./__demo__/disabled">

## 不同尺寸的开关

通过指定 `size` 可以得到不同尺寸的开关。

<code src="./__demo__/size">

## 自定义文案

自定义开关打开（关闭）时需要显示的文字或者图标。

<code src="./__demo__/custom">

## 带图标的开关

自定义开关按钮上显示的图标。

<code src="./__demo__/icon">

## 加载中

开关处于加载中状态，不可点击。

<code src="./__demo__/loading">

## API

**Switch**

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 开关是否打开 | `boolean` | `--` |
| defaultChecked | 默认是否选中 | `boolean` | `--` |
| disabled | 是否禁用 | `boolean` | `--` |
| loading | 加载中状态 | `boolean` | `--` |
| size | 开关的尺寸，有 `small` 和 `default` 可供选择 | `small \| default` | `--` |
| type | 三种样式类型 | `circle \| round \|line` | `circle` |
| checkedIcon | 开关打开时，按钮上显示的图标 | `ReactNode` | `--` |
| checkedText | 开关打开时的文案，small 尺寸不生效 | `ReactNode` | `--` |
| uncheckedIcon | 开关关闭时，按钮上显示的图标 | `ReactNode` | `--` |
| uncheckedText | 开关关闭时的文案，small 尺寸不生效 | `ReactNode` | `--` |
| className | 节点类名 | `string \| string[]` | `--` |
| style | 节点样式 | `CSSProperties` | `--` |
| onChange | 点击开关的回调 | `(value: boolean, event) => void` | `--` |
