---
group:
  title: 其他
nav:
  path: /components
---

# 伸缩框 ResizeBox

伸缩框组件。

## 基础用法

`ResizeBox` 伸缩框组件的基础使用。通过设置 `directions`，可以指定四条边中的哪几条边可以进行伸缩。

<code src="./__demo__/basic">

## 定制伸缩杆内容

可通过属性 `resizeTriggers` 定制各个方向的伸缩杆的内容。

<code src="./__demo__/custom-triggers">

## 受控的高宽

`ResizeBox` 的高宽都支持受控，分别对应属性 `width` 和 `height`，通过 `onChange` 得到拖动中的高宽值。

<code src="./__demo__/control">

## 在布局中使用

Layout 组件中集成了 `ResizeBox` 组件，可以在 Layout 中使用可伸缩的侧边栏。

<code src="./__demo__/layout">

## 面板分割

将一个面板分割成两个可以调整宽度或高度的两部分。用`direction`控制分割方向。

<code src="./__demo__/split">

## 面板分割嵌套

面板分割可以嵌套使用。

<code src="./__demo__/nested_split">

## 多个面板分割

可以通过 `SplitGroup` 进行多个面板分割，同时还支持快速收缩及手动收缩

<code src="./__demo__/splitgroup">

## API

### ResizeBox

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 高度，受控属性 | `number` | `-` |
| width | 宽度，受控属性 | `number` | `-` |
| component | 伸缩框的 html 标签 | `string` | `div` |
| directions | 可以进行伸缩的边，有上、下、左、右可以使用，默认是右方向。 | `Array<left \| right \| top \| bottom>` | `['right']` |
| className | 节点类名 | `string \| string[]` | `-` |
| resizeIcons | 定制伸缩杆的图标，四个方向都支持定制。 | `{top?: ReactNode;bottom?: ReactNode;left?: ReactNode;right?: ReactNode;}` | `{}` |
| resizeTriggers | 定制伸缩杆的内容，四个方向都支持定制。 | `{top?: ReactNode;bottom?: ReactNode;left?: ReactNode;right?: ReactNode;}` | `{}` |
| style | 节点样式 | `CSSProperties` | `-` |
| onMoving | 拖拽中的回调 | `(e: MouseEvent, size: { width: number; height: number }) => void` | `-` |
| onMovingEnd | 拖拽结束之后的回调 | `() => void` | `-` |
| onMovingStart | 开始拖拽之前的回调 | `() => void` | `-` |

### ResizeBox.Split

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁用 | `boolean` | `-` |
| component | 分割框的 html 标签 | `string` | `div` |
| direction | 分割方向分为水平 `horizontal` 和垂直 `vertical`，默认是水平分割 | `horizontal \| vertical \| horizontal-reverse \| vertical-reverse` | `horizontal` |
| icon | 定制伸缩杆的图标 | `ReactNode` | `-` |
| trigger | 定制伸缩杆的内容 | `ReactNode` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| max | 最大阈值 | `number \| string` | `-` |
| min | 最小阈值 | `number \| string` | `-` |
| panes | 面板，[firstPane, secondPane] | `ReactNode[]` **(必填)** | `-` |
| size | 分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px | `number \| string` | `0.5` |
| style | 节点样式 | `CSSProperties` | `-` |
| onMoving | 拖拽中的回调 | `(e: MouseEvent, size: number \| string) => void` | `-` |
| onMovingEnd | 拖拽结束之后的回调 | `() => void ` | `-` |
| onMovingStart | 开始拖拽之前的回调 | `() => void` | `-` |
| onPaneResize | 面板大小变化的回调 | `(paneContainers: HTMLElement[]) => void` | `-` |

### ResizeBox.SplitGroup

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| component | 分割框的 html 标签 | `string` | `div` |
| direction | 分割方向分为水平 `horizontal` 和垂直 `vertical`，默认是水平分割 | `horizontal \| vertical` | `horizontal` |
| icon | 定制伸缩杆的图标 | `ReactNode` | `-` |
| className | 节点类名 | s`tring \| string[]` | `-` |
| panes | 面板 | [SplitGroupPane](resize-box#resizeboxsplitgrouppane)[] **(必填)** | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| onMoving | 拖拽中的回调, `size` 参数是各个面板占的像素值 | `(e: MouseEvent, size: string[], activeIndex: number) => void` | `-` |
| onMovingEnd | 拖拽结束之后的回调 | `(activeIndex: number) => void` | `-` |
| onMovingStart | 开始拖拽之前的回调 | `(activeIndex: number) => void` | `-` |
| onPaneResize | 面板大小变化的回调 | `(paneContainers: HTMLElement[]) => void ` | `-` |

### ResizeBox.SplitGroup.CollapsedConfig

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击快速折叠的回调 | `(e, collapsed, activeIndex, direction: 'prev' \| 'next') => void` | `-` |
| icon | 快速折叠按钮的 icon | `ReactNode` | `-` |

### ResizeBox.SplitGroup.Pane

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 禁用，将不会展示伸缩杆。 | `boolean` | `-` |
| resizable | 是否支持拖拽伸缩 | `boolean` | `true` |
| content | 当前面板的内容 | `ReactNode` **(必填)** | `-` |
| collapsible | 是否支持快速折叠; | `boolean\| {prev?: boolean \| CollapsedConfig;next?: boolean \| CollapsedConfig;}` | `-` |
| max | 最大阈值 | `number \| string` | `-` |
| min | 最小阈值，优先级比 `max`高，并且会影响相邻面板的阈值。 | `number \| string` | `-` |
| size | 分割的大小，可以是 0~1 代表百分比，或具体数值的像素，如 300px | `number \| string` | `-` |
| trigger | 定制伸缩杆内容, 参数分别表示向前快速收缩、拖拽伸缩触发器、向后快速收缩的触发器 | `(prevNode: ReactNode, resizeNode: ReactNode, nextNode: ReactNode) => ReactNode` | `-` |
