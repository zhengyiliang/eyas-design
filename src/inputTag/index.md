---
group:
  title: 数据输入
nav:
  path: /components
---

# 标签输入框 InputTag

标签输入。

## 基本用法

基本用法

<code src="./__demo__/basic">

## 不同尺寸

通过设置 `size` 来指定大小。

<code src="./__demo__/size">

## 获取选项的文本

可以通过设置 `labelInValue=true` 获取选项的 label 值

<code src="./__demo__/labelInValue">

## 校验与格式化输入

通过 `validate` 校验输入。此外，可以返回**非布尔类型**来将用户输入的字符串为特定的 `value` 格式。

<code src="./__demo__/validate">

## 失焦时保存

设置 `saveOnBlur` 在失焦时自动将正在输入的文本保存为标签。

<code src="./__demo__/save-on-blur">

## 自定义标签节点

指定 `renderTag` 来自定义标签节点。

<code src="./__demo__/render-tag">

## 拖拽排序

指定 `dragToSort` 属性以允许对已输入的值进行拖拽排序。

<code src="./__demo__/draggable">
