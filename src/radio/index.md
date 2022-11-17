---
group:
  title: 数据输入
nav:
  path: /components
---

## 基础用法

基础单选框。

<code src="./__demo__/basic">

## 单选框组

单选组的用法。有两种用法，可以通过 `children` 的方式或者 `options` 数组的方式。

<code src="./__demo__/radio_group">

## 竖直单选组

设置 `direction="vertical"` 可以展示竖直的单选组。

<code src="./__demo__/direction">

## 带图标的单选框

单选框可以与图标进行组合。

<code src="./__demo__/icon">

## 按钮类型

指定 `type=button`，单选框会展示为按钮样式。

<code src="./__demo__/radio_button">

## 不同尺寸

按钮类型的单选框分为 4 个尺寸，分别为 `mini`, `small`, `default`, `large`

<code src="./__demo__/size">

## 自定义节点内容

可以通过传入函数类型的 children 来自定义渲染单选节点。

<code src="./__demo__/custom_render">

## API

### Radio

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 是否选中（受控模式） | `boolean` | `-` |
| defaultChecked | 初始是否选中 | `boolean` | `-` |
| disabled | 是否禁用 | `boolean` | `-` |
| className | 节点类名 | `string \| string[] ` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| value | 控件的 `value` | `T` | `-` |
| onChange | 值变化的回调 | `(checked: boolean, event: ChangeEvent) => void` | `-` |

### Radio.Group

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | `Radio` 的 name | `string` | `-` |
| direction | 方向 | `vertical \| horizontal` | `horizontal` |
| size | 按钮类型的单选框尺寸（只在按钮类型下生效） | `small \| default \| large \| mini` | `-` |
| type | 单选的类型，是单选还是按钮 | `radio \| button` | `radio` |
| className | 节点类名 | `string \| string[]` | `-` |
| defaultValue | 默认选中的值 | `any` | `-` |
| options | 以数组配置的形式来设置单选组 | `(string \| number \| { label: ReactNode; value: any; disabled?: boolean })[]` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| value | 选中的值（受控模式） | `any` | `-` |
| onChange | 点击单选的回调 | `(value: any, event: ChangeEvent) => void` | `-` |
