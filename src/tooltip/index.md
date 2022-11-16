---
group:
  title: 数据展示
nav:
  path: /components
---

# 文字气泡 Tooltip

鼠标悬停、聚焦或点击在某个组件时，弹出的文字提示。

## 基础用法

鼠标移入，气泡出现，鼠标移出，气泡消失。

<code src="./__demo__/basics">

## 迷你尺寸

适用于小场景或数字气泡样式。

<code src="./__demo__/size">

## 位置

Tooltip 支持 12 个不同的方位。分别为：`上左` `上` `上右` `下左` `下` `下右` `左上` `左` `左下` `右上` `右` `右下`。

<code src="./__demo__/position">

## 受控模式

通过 `popupVisible` 和 `onVisibleChange` 控制下拉框的展开和收起。

<code src="./__demo__/controlled">

## 不同颜色

通过 `color` 属性设置不同背景色的 `tooltip`

<code src="./__demo__/color">

## API

**Tooltip**

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| blurToHide | 是否在失去焦点的时候关闭弹出框 | `boolean` | `true` |
| defaultPopupVisible | 默认的弹出框状态 | `boolean` | `--` |
| disabled | 是否禁用弹出 | `boolean` | `--` |
| mini | 迷你尺寸 | `boolean` | `--` |
| popupHoverStay | 鼠标移入弹出框的话，弹出框会保留而不销毁 | `boolean` | `true` |
| popupVisible | 弹出框是打开还是关闭状态 | `boolean` | `--` |
| unmountOnExit | 是否在隐藏的时候销毁 DOM 结构 | `boolean` | `true` |
| childrenPrefix | 会在打开状态给元素加上一个类，格式为 `${childrenPrefix}-open`。 | `string` | `--` |
| color | 弹出层背景色 | `string` | `--` |
| position | 弹出框的方位，有 12 个方位可供选择 | `top \| tl \| tr \| bottom \| bl \| br \| left \| lt \| lb \| right \| rt \| rb` | `top` |
| trigger | 触发方式 | `click \| hover \| focus` | `hover` |
| content | 弹出的内容 | `ReactNode` | `--` |
| className | 节点类名 | `string \| string[]` | `--` |
| style | 节点样式 | `CSSProperties` | `--` |
| triggerProps | 可以接受所有 `Trigger` 组件的参数 | `Partial<TriggerProps>` | `--` |
| getPopupContainer | 弹出框挂载的节点 | `(node: HTMLElement) => Element` | `--` |
| onVisibleChange | 显示或隐藏时触发的回调 | `(visible: boolean) => void` | `--` |
