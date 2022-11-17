---
group:
  title: 布局
nav:
  path: /components
---

# 布局 Layout

页面的基础布局框架，常与组件嵌套使用，构建页面整体布局。

## 基础用法

典型的页面布局

<code src="./__demo__/basic">

## 自定义按钮 Icon

通过设置 `Menu.Sider` 的 `trigger` 属性，实现自定义收起按钮的图标。

<code src="./__demo__/icon">

## 自定义收起按钮

设置 `Menu.Sider` 的 `trigger` 属性为 `null` 后，`Sider` 内置的缩起按钮不会显示。此时可自定义收起按钮。

<code src="./__demo__/collapsed">

## 响应式侧边栏

左侧 Sider 可以结合 Menu 设置为展开/收起状态, 设置 `breakpoint` 可触发响应式收缩。

<code src="./__demo__/breakpoint">

## 可伸缩侧边栏

可以用鼠标进行拖拽放大缩小的侧边栏，需要用到的参数：`resizeDirections`。

<code src="./__demo__/resize">

## 伸缩+收起侧边栏

通过 `resizeBoxProps.onMoving`方法， 配置 `width` 和 `collapsed` 可以实现即可以拖拽伸缩杆也可以点击收缩的侧边栏。

这时侧边栏的宽度完全受控于 `width` 的值

<code src="./__demo__/resizeProps">

## API

**Layout**

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| hasSider | 表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动 | `boolean` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |

**Layout.Header**

| 参数名    | 描述     | 类型                 | 默认值 |
| --------- | -------- | -------------------- | ------ |
| className | 节点类名 | `string \| string[]` | `-`    |
| style     | 节点样式 | `CSSProperties`      | `-`    |

**Layout.Footer**

| 参数名    | 描述     | 类型                 | 默认值 |
| --------- | -------- | -------------------- | ------ |
| className | 节点类名 | `string \| string[]` | `-`    |
| style     | 节点样式 | `CSSProperties`      | `-`    |

**Layout.Content**

| 参数名    | 描述     | 类型                 | 默认值 |
| --------- | -------- | -------------------- | ------ |
| className | 节点类名 | `string \| string[]` | `-`    |
| style     | 节点样式 | `CSSProperties`      | `-`    |

**Layout.Sider**

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| collapsed | 当前收起状态 | `boolean` | `-` |
| collapsible | 是否可收起 | `boolean` | `-` |
| defaultCollapsed | 是否默认收起 | `boolean` | `-` |
| reverseArrow | 翻转折叠提示箭头的方向，当 Sider 在右边时可以使用 | `boolean` | `-` |
| collapsedWidth | 收缩宽度，设置为 0 会出现特殊 trigger | `number` | `48` |
| onCollapse | 展开-收起时的回调函数，有点击 trigger 以及响应式反馈两种方式可以触发 | `(collapse: boolean, type: 'clickTrigger' \| 'responsive') => void ` | `-` |
| theme | 主题颜色 | `dark \| light` | `light` |
| trigger | 自定义底部折叠触发器，设置为 null 时隐藏 trigger | `string \| React.ReactNode` | `-` |
| breakpoint | 触发响应式布局的断点 | `xxxl \| xxl \| xl \| lg \| md \| sm \| xs` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| resizeBoxProps | 可以接受 `ResizeBox` 所有参数，在伸缩开启时，可以通过 `resizeBoxProps` 对菜单栏的 `width` 进行受控展示或者与 `collapsed` 联动 | `ResizeBoxProps` | `-` |
| resizeDirections | 可以用 ResizeBox 替换原生的 `aside` 标签，这个参数即 ResizeBox 的 `directions` 参数。详情请看 ResizeBox。 | `string[]` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| width | 宽度 | `number \| string` | `200` |
| onBreakpoint | 触发响应式布局断点时的回调 | `(broken: boolean) => void` | `-` |
