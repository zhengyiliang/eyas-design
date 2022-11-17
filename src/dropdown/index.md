---
group:
  title: 导航
nav:
  path: /components
---

# 下拉菜单 Dropdown

页面上的命令过多时，可将备选命令收纳到向下展开的浮层容器中。

## 基础用法

基础下拉菜单。

<code src="./__demo__/basic">

## 弹出方向

通过 `position` 支持指定 6 种弹出方位，分别是：`top: 向上`, `tl: 左上`, `tr: 右上`, `bottom: 下方`, `bl: 左下(默认)`, `br: 右下`。

<code src="./__demo__/position">

## 其他元素

设置 Menu 禁用项和插入分割线。

<code src="./__demo__/extra-element">

## 触发方式

通过 `trigger` 指定触发方式。

<code src="./__demo__/trigger">

## 触发事件

通过 `Menu.onClickMenuItem` 来为菜单指定点击菜单项时触发的回调函数。

<code src="./__demo__/event">

## 按钮下拉框

使用 `<Dropdown.Button>` 可以使用右边是额外的相关功能菜单的按钮。

<code src="./__demo__/button">

## 多级菜单

带有多级菜单的下拉框。

<code src="./__demo__/sub-menu">

## 隐藏菜单

通过 `popupVisible` 和 `onVisibleChange` 控制下拉框的展开和收起。具体 `onVisibleChange` 的触发时机可查看 Trigger 组件文档。如果 `droplist` 是 `Menu`，可以通过在 `onClickMenuItem` 中返回 `false` 来避免菜单自动隐藏。

<code src="./__demo__/hide">

## 分组菜单

通过 `Menu.ItemGroup` 使用分组。

<code src="./__demo__/item-group">

## 右键菜单

移入区域后，可点击鼠标右键触发。

<code src="./__demo__/right-click">

## 带图标的菜单

菜单项前可以添加图标。

<code src="./__demo__/icon">

## API

### Dropdown

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultPopupVisible | 控制下拉框是否默认打开 | `boolean` | `-` |
| disabled | 是否禁用弹出 | `boolean` | `-` |
| popupVisible | 控制下拉框是否打开（受控模式） | `boolean` | `-` |
| unmountOnExit | 隐藏后是否销毁 DOM 结构 | `boolean` | `true` |
| position | 下拉框的弹出位置 | `top \| tl \| tr \| bottom \| bl \| br` | `bl` |
| trigger | 触发下拉框弹出的方式 | `click \| hover` | `hover` |
| droplist | 下拉框的内容 | `ReactNode` | `-` |
| triggerProps | 弹出框下可接受所有 `Trigger` 组件的 `Props` | `Partial&lt;[TriggerProps]&gt;` | `-` |
| getPopupContainer | 弹出框挂在的父级节点 | `(node: HTMLElement) => Element` | `-` |
| onVisibleChange | 弹出框打开/关闭时会触发 | `(visible: boolean) => void` | `-` |

### Dropdown.Button

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁用。 | `boolean` | `-` |
| unmountOnExit | 隐藏后是否销毁 DOM 结构 | `boolean` | `true` |
| position | 下拉框的弹出位置 | `top \| tl \| tr \| bottom \| bl \| br` | `br` |
| size | 等同于 `Button` 的 size | `mini \| small \| default \| large` | `-` |
| trigger | 触发下拉框弹出的方式 | `click \| hover` | `hover` |
| type | 等同于 `Button` 的 type | `default \| primary \| secondary \| dashed \| outline \| text` | `default` |
| droplist | 下拉框的内容 | `ReactNode` | `-` |
| icon | 右侧显示内容，可以是 icon 或者任意 dom 元素 | `ReactNode` | `<IconMore />` |
| buttonProps | 接收 button 按钮的所有 Props，应用于左侧按钮 | `ButtonProps` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| buttonsRender | 自定义两个按钮的渲染 | `(buttons: ReactNode[]) => ReactNode[]` | `-` |
| onClick | 左侧按钮的点击事件 | `(e: Event) => void` | `-` |
| onVisibleChange | 弹出框打开/关闭时会触发 | `(visible: boolean) => void` | `-` |
