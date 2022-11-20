---
group:
  title: 数据输入
nav:
  path: /components
---

# 复选框 Checkbox

在一组数据中，用户可通过复选框选择一个或多个数据。

## 基础用法

最基本的点击选中操作。

<code src="./__demo__/basic">

## 禁用

禁用复选框。

<code src="./__demo__/disabled">

## 受控

通过 `checked` 属性控制是否选中

<code src="./__demo__/control">

## 复选框组

生成复选框组。设置 `direction="vertical"` 可以展示竖向的复选框组

<code src="./__demo__/group">

## 全选

通过 `indeterminate` 属性可以实现半选效果。

<code src="./__demo__/check_all">

## 布局

可以通过 `children` 传入 `checkbox`，配合 Grid 组件实现灵活的布局。

<code src="./__demo__/group_jsx">

## 自定义节点内容

可以通过传入函数类型的 `children` 来自定义渲染节点内容

<code src="./__demo__/custom_render">

## useCheckbox

使用 `useCheckbox` 快捷管理复选框数据

<code src="./__demo__/useCheckbox">

## API

### Checkbox

`T = string | number`

| 参数名         | 描述                | 类型                                   | 默认值 |
| -------------- | ------------------- | -------------------------------------- | ------ |
| checked        | 是否选中            | `boolean`                              | `-`    |
| defaultChecked | 默认是否选中        | `boolean`                              | `-`    |
| disabled       | 是否禁用            | `boolean`                              | `-`    |
| error          | 错误样式            | `boolean`                              | `-`    |
| indeterminate  | 半选状态            | `boolean`                              | `-`    |
| className      | 节点类名            | `string \| string[]`                   | `-`    |
| style          | 节点样式            | `CSSProperties`                        | `-`    |
| value          | 复选框的 value 属性 | `T`                                    | `-`    |
| onChange       | 点击复选框的回调    | `(checked: boolean, e: Event) => void` | `-`    |

### Checkbox.Group

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 整组失效 | `boolean` | `-` |
| direction | 方向 | `horizontal \| vertical` | `horizontal` |
| className | 节点类名 | `string \| string[]` | `-` |
| defaultValue | 默认选中的选项 | `T[]` | `-` |
| options | 可选项 | `(T \| { label: ReactNode; value: T; disabled?: boolean })[]` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| value | 选中的选项（受控模式） | `T[]` | `-` |
| onChange | 变化时的回调函数 | `(value: T[], e: Event) => void` | `-` |

### `Checkbox.useCheckbox`

```js
/** T = string | number */
const result: ResultType = Checkbox.useCheckbox<T>(values: T[], defaultSelected?: T[]);
```

**ResultType**

| 参数名 | 描述 | 类型 |
| --- | :-: | :-: |
| selected | 当前选中项 | `T[]` |
| setSelected | 只选中传入参数的选项 | `(value: T[]) => void;` |
| setValueSelected | 设置选项的选中状态，第二个参数为要设置的选中状态。 | `(value: T \| T[], selected?: boolean) => void;` |
| selectAll | 选中全部 | `() => void;` |
| unSelectAll | 取消全部选中 | `() => void;` |
| isSelected | 是否选项被选中 | `(value: T) => boolean;` |
| toggle | 切换选项选中状态。不传参数时，会切换所有选项的选中状态 | `(value?: T \| T[]) => void;` |
| isAllSelected | 是否全部选项被选中 | `() => boolean;` |
| isPartialSelected | 是否只有部分选项选中 | `() => boolean;` |
