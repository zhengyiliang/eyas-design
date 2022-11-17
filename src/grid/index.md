---
group:
  title: 布局
nav:
  path: /components
---

# 栅格 Grid

栅格可以有效的保证页面的一致性、逻辑性、加强团队协作和统一。

## 基本用法

展示了最基本的 24 等分应用。

<code src="./__demo__/basic">

## 栅格偏移

指定 `offset` 可以对栅格进行平移操作。

<code src="./__demo__/offset">

## 栅格排序

指定 `push` 或者 `pull` 可以对栅格进行排序。

<code src="./__demo__/push_pull">

## 区块间隔

通过在 `Row` 上指定 `gutter` 可以增加栅格的区域间隔。

<code src="./__demo__/gutter">

## 水平布局

通过 `justify` 来进行水平布局。

<code src="./__demo__/justify">

## 垂直布局

通过 align 来进行垂直布局。

<code src="./__demo__/align">

## 排序

通过 `order` 来进行元素排序。

<code src="./__demo__/order">

## 响应式布局

预置六种响应尺寸, 分别为 `xs`, `sm`, `md`, `lg`, `xl`, `xxl`。

<code src="./__demo__/adaptation">

## 其他属性的响应式

`span`, `offset`, `order`, `pull`, `push` 属性可以内嵌到 `xs`, `sm`, `md`, `lg`, `xl`, `xxl` 对象中使用。比如 `xs={8}` 相当于 `xs={{ span: 8 }}`。

<code src="./__demo__/adaptation_object">

## Flex 用法

通过设置 `Col` 组件的 `flex` 属性，可以任意配置 flex 布局。

<code src="./__demo__/flex">

## API

### Row

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| div | 开启这个选项 `<Row>` 和 `<Col>` 都会被当作 div 而不会附带任何 Grid 相关的类和样式 | `boolean` | `-` |
| align | 竖直对齐方式 ( `align-items` ) | `start \| center \| end \| stretch` | `start` |
| justify | 水平对齐方式 (`justify-content`) | `start \| center \| end \| space-around \| space-between` | `start` |
| className | 节点类名 | `string \| string[]` | `-` |
| gutter | 栅格间隔，单位是`px` 栅格间隔。可传入响应式对象写法 { xs: 4, sm: 6, md: 12}，传入数组 [ 水平间距， 垂直间距 ] 来设置两个方向。 | `number \| number[]` | `0` |
| style | 节点样式 | `CSSProperties` | `-` |

### Col

| 参数名    | 描述                                   | 类型                               | 默认值 |
| --------- | -------------------------------------- | ---------------------------------- | ------ |
| offset    | 栅格左侧的间隔格数，间隔内不可以有栅格 | `number`                           | `-`    |
| order     | 对元素进行排序                         | `number`                           | `-`    |
| pull      | 对元素进行排序                         | `number`                           | `-`    |
| push      | 对元素进行排序                         | `number`                           | `-`    |
| span      | 栅格占位格数                           | `number`                           | `24`   |
| className | 节点类名                               | `string \| string[]`               | `-`    |
| flex      | 设置 flex 布局属性                     | `string \| number \| auto \| none` | `-`    |
| lg        | >= 992px 响应式栅格                    | `number \| { [key: string]: any }` | `-`    |
| md        | >= 768px 响应式栅格                    | `number \| { [key: string]: any }` | `-`    |
| sm        | >= 576px 响应式栅格                    | `number \| { [key: string]: any }` | `-`    |
| style     | 节点样式                               | `CSSProperties`                    | `-`    |
| xl        | >= 1200px 响应式栅格                   | `number \| { [key: string]: any }` | `-`    |
| xs        | < 576px 响应式栅格                     | `number \| { [key: string]: any }` | `-`    |
| xxl       | >= 1600px 响应式栅格                   | `number \| { [key: string]: any }` | `-`    |
| xxxl      | >= 2000px 响应式栅格                   | `number \| { [key: string]: any }` | `-`    |
