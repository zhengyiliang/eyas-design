---
group:
  title: 反馈
nav:
  path: /components
---

# 气泡确认框 Popconfirm

点击元素，弹出气泡式的确认框。

## 基础用法

最基础的用法

<code src="./__demo__/basic">

## 国际化

自定义按钮文字

<code src="./__demo__/text">

## 位置

气泡确认框支持 12 个不同的方位。分别为：`上左`、 `上`、 `上右`、`下左`、 `下`、 `下右`、 `左上`、 `左`、 `左下`、 `右上`、 `右`、 `右下`。

<code src="./__demo__/position">

## 异步关闭

用于异步执行某些操作，等操作完成再关闭弹出框。 **用法**：返回一个 `Promise` 用于异步关闭。

<code src="./__demo__/loading">

## 自定义 icon

自定义图标。

<code src="./__demo__/icon">

## API

### Popconfirm

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 是否自动聚焦弹出框内的可聚焦元素 | `boolean` | `-` |
| defaultPopupVisible | 默认弹出框是打开还是关闭 | `boolean` | `-` |
| disabled | 是否禁用 | `boolean` | `-` |
| focusLock | 是否将焦点锁定在弹出框内 | `boolean` | `-` |
| popupVisible | 弹出框是打开还是关闭。(受控) | `boolean` | `-` |
| unmountOnExit | 是否在隐藏的时候销毁 DOM 节点 | `boolean` | `true` |
| okType | 确认按钮的类型 | `ButtonProps['type']` | `primary` |
| position | 弹出框的方位，有 12 个方位可供选择 | `top\| tl\| tr\| bottom\| bl\| br\| left\| lt\| lb\| right\| rt\| rb` | `top` |
| trigger | 触发方式 | `click \| hover` | `click` |
| cancelText | 取消按钮文字 | `ReactNode` | `-` |
| icon | 标题前的图标 | `ReactNode` | `<IconExclamationCircleFill />` |
| okText | 确认按钮文字 | `ReactNode` | `-` |
| title | 标题 | `ReactNode` | `-` |
| cancelButtonProps | 取消按钮的参数，可接受 `Button` 组件的所有参数 | `ButtonProps` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| okButtonProps | 确定按钮的参数，可接受 `Button` 组件的所有参数 | `ButtonProps` | `-` |
| onOk | 点击确认按钮的回调函数。 | `(e: React.MouseEvent) =&gt; Promise&lt;any&gt; \| void` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| triggerProps | 可以接受所有 Trigger 的参数 | `Partial&lt;TriggerProps&gt;` | `-` |
| getPopupContainer | 弹出挂载的节点 | `(node: HTMLElement) => Element` | `-` |
| onCancel | 点击取消按钮的回调函数。 | `(e: React.MouseEvent) => void` | `-` |
| onVisibleChange | 弹出打开和关闭触发的回调 | `(visible: boolean) => void` | `-` |
