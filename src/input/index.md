---
group:
  title: 数据输入
  order: 3
nav:
  path: /components
---

# 输入框 Input

基本表单组件，并在原生控件基础上进行了功能扩展，可以组合使用。

## 基本用法

通过鼠标或键盘输入内容。

<code src="./__demo__/basics">

## 输入框状态

不同的输入框状态

<code src="./__demo__/status">

## 四种尺寸

输入框定义了四种默认尺寸（`mini`,`small`, `default`, `large`），分别为 24px，28px，32px，36px。

<code src="./__demo__/size">

## 前置、后置标签

指定`addBefore`和`addAfter`在输入框前后添加元素。

<code src="./__demo__/addon">

## 前后缀

通过指定`prefix`和`suffix`来在输入框内添加前缀和后缀。

<code src="./__demo__/prefix_suffix">

## 搜索框

带有搜索按钮的输入框，用于内容检索。

<code src="./__demo__/search">

## 搜索框 Loading

通过 `loading` 属性可以设置搜索框在 `onSearch` 的时候展示 `loading。`

<code src="./__demo__/search_loading">

## 输入框组合

通过鼠标或键盘输入内容。

<code src="./__demo__/group">

## 字数统计

设置 `maxLength` 可以限制最大字数，配合 `showWordLimit` 可以显示字数统计。

设置 `maxLength.errorOnly` 后不会限制用户输入字数，但是超过最大字数会展示错误状态。

值得注意的是，如果配置了 `showWordLimit`，那么你将不能使用 `suffix`。

<code src="./__demo__/max-length">

## 文本域

可以用于多行输入。

<code src="./__demo__/textarea">

## 适应文本高度文本域

指定 `autoSize`，文本域会自动根据输入的文本调整文本域的高度。如果指定`autoSize={{ minRows, maxRows }}`，也能指定最小行数和最大行数。

<code src="./__demo__/textarea_autosize">

## 密码输入

用于密码的输入。

<code src="./__demo__/password">

## API

### Input

**Input 接受所有原生的属性值**

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- | --- |
| allowClear | 允许清空输入框 | `boolean` | `-` |
| disabled | 是否禁用 | `boolean` | `-` |
| error | 是否是错误状态 | `boolean` | `-` |
| readOnly | 是否只读 | `boolean` | `-` |
| showWordLimit | 配合 `maxLength`，显示字数统计 | `boolean` | `-` |
| defaultValue | 默认值 | `string` | `-` |
| placeholder | 输入框提示文字 | `string` | `-` |
| value | 输入框的值，受控模式 | `string` | `-` |
| size | 输入框的尺寸 | `mini \| small \| default \| large` | `default` |
| addAfter | 输入框后添加元素 | `ReactNode` | `-` |
| addBefore | 输入框前添加元素 | `ReactNode` | `-` |
| prefix | 添加前缀文字或者图标 | `ReactNode` | `-` |
| suffix | 添加后缀文字或者图标 | `ReactNode` | `-` |
| afterStyle | 输入框后添加元素的样式 | `object` | `-` |
| beforeStyle | 输入框前添加元素的样式 | `object` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| height | 自定义输入框高度 | `number \| string` | `-` | - |
| maxLength | 输入框最大输入的长度；设置 `errorOnly`为 `true` 后，超过 `maxLength` 会展示 `error` 状态，并不限制用户输入。 | `number \| { length: number; errorOnly?: boolean }` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| onChange | 输入时的回调 | `(value: string, e) => void` | `-` |
| onClear | 点击清除按钮的回调 | `() => void` | `-` |
| onPressEnter | 按下回车键的回调 | `(e) => void` | `-` |

### Input.TextArea

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 允许清空输入框 | `boolean` | `-` |
| disabled | 是否禁用 | `boolean` | `-` |
| error | 是否是错误状态 | `boolean` | `-` |
| defaultValue | 默认值 | `string` | `-` |
| placeholder | 输入框提示文字 | `string` | `-` |
| value | 值 | `string` | `-` |
| autoSize | 是否自动调整输入框的高度 | `boolean \| { minRows?: number; maxRows?: number }` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| maxLength | 输入框最大输入的长度；设置 `errorOnly`为 `true` 后，超过 `maxLength` 会展示 `error` 状态，并不限制用户输入。 | `number \| { length: number; errorOnly?: boolean }` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| wrapperStyle | 开启字数统计之后，会在 `textarea` 标签外包一层 `div`，`wrapperStyle` 用来配置这个 `div` 的样式。 | `CSSProperties` | `-` |
| onChange | 输入时的回调 | `(value: string, e) => void` | `-` |
| onClear | 点击清除按钮的回调 | `() => void` | `-` |
| onPressEnter | 按下回车键的回调 | `(e) => void` | `-` |

### Input.Group

| 参数名    | 描述             | 类型                 | 默认值 |
| --------- | ---------------- | -------------------- | ------ |
| compact   | 是否使用紧凑模式 | `boolean`            | `-`    |
| className | 节点类名         | `string \| string[]` | `-`    |
| style     | 节点样式         | `CSSProperties`      | `-`    |

### Input.Search

包含 Input 组件所有参数

| 参数名       | 描述               | 类型                      | 默认值 |
| ------------ | ------------------ | ------------------------- | ------ |
| loading      | 搜索时展示加载状态 | `boolean`                 | `-`    |
| searchButton | 搜索按钮           | `boolean \| ReactNode`    | `-`    |
| onSearch     | 点击搜索按钮的回调 | `(value: string) => void` | `-`    |

### Input.Password

包含 Input 组件所有参数

| 参数名             | 描述                           | 类型                            | 默认值 |
| ------------------ | ------------------------------ | ------------------------------- | ------ |
| defaultVisibility  | 初始是否显示                   | `boolean`                       | `-`    |
| visibility         | 是否显示                       | `boolean`                       | `-`    |
| visibilityToggle   | 是否显示切换密码可见状态的按钮 | `boolean`                       | `-`    |
| onVisibilityChange | visibility 改变时触发          | `(visibility: boolean) => void` | `-`    |

## 方法

| 参数名 |     描述     |    类型    | 默认值 |
| ------ | :----------: | :--------: | -----: |
| focus  |   焦点事件   | `Function` |    `-` |
| blur   | 失去焦点事件 | `Function` |    `-` |

**示例**

```js
<Input ref={(ref) => (this.input = ref)} />;

this.input.focus();
this.input.blur();
```
