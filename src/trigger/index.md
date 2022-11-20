---
group:
  title: 其他
nav:
  path: /components
---

# 触发器 Trigger

用于对元素添加 hover, click, focus 等事件，并且弹出下拉框。

## 基础用法

这个例子展示了触发器的最基础的使用。`Trigger` 组件默认是没有弹出框的样式的。以下示例均为官网添加的样式。

<code src="./__demo__/basic">

## 受控用法

这个例子展示了如何完全控制弹出层的展示和隐藏。可以通过 `defaultPopupVisible` 设置默认的展开状态。

<code src="./__demo__/control">

## 多层嵌套

弹出层可以嵌套在另一个弹出层内。

<code src="./__demo__/nest">

## 多个触发方式

通过`trigger`传入数组，可以设置多个触发方式。

<code src="./__demo__/triggers">

## 跟随鼠标显示弹出层

设置 `alignPoint` 属性，可以使弹出层出现在鼠标位置。你可能想要`trigger=click`时候，在范围内点击时，弹出层一直展示，并根据鼠标位置更新弹出层位置，可以查看下一个示例。

<code src="./__demo__/alignPoint">

## 更新位置

<code src="./__demo__/mouse">

## 展示箭头元素

通过 `showArrow` 属性，可以展示默认的箭头元素。也可以通过 arrowProps 进行定制。

<code src="./__demo__/arrow">

## 自动调整位置

自动调整弹出层位置。

<code src="./__demo__/auto">

## 设置弹窗位置偏移量

通过 `popupAlign` 属性，可以设置弹窗在原本位置的基础上进行额外的位置调整。

例如 `position=top`时， 设置 `popupAlign={top: 20}`，弹窗会向上移动 `20px`。设置 `popupAlign={ top: [100, 20] }`，弹窗将会在水平方向移动 `100px`，并向上移动 `20px`。

<code src="./__demo__/popupAlign">

## 滚动容器

通过设置 `updateOnScroll` 监听容器的滚动。

<code src="./__demo__/updateAtScroll">

## API

### Trigger

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| alignPoint | 弹出层跟随鼠标位置 | `boolean` | `-` |
| autoAlignPopupMinWidth | 自动对齐子元素的宽度设置弹出框的最小宽度 | `boolean` | `-` |
| autoAlignPopupWidth | 自动对齐子元素的宽度设置弹出框的宽度 | `boolean` | `-` |
| autoFitPosition | 是否根据空间自动调整弹出框的位置 | `boolean` | `true` |
| autoFixPosition | 当内容发生变化导致内容区域尺寸发生变化，自动进行重新定位。 | `boolean` | `true` |
| blurToHide | 是否在触发节点失去焦点的时候关闭弹出框，仅在 `trigger` 中含有 `focus` 时生效 | `boolean` | `true` |
| clickOutsideToClose | 是否在点击空白处（触发节点和弹出框以外的区域）时关闭弹出层。 关闭时会触发 `onVisibleChange`。 | `boolean` | `true` |
| clickToClose | 是否能通过点击触发节点来关闭弹出框 | `boolean` | `true` |
| containerScrollToClose | 是否在容器滚动时关闭弹出框 | `boolean` | `false` |
| defaultPopupVisible | 默认弹出框开启或关闭 | `boolean` | `-` |
| disabled | 是否禁用 | `boolean` | `-` |
| escToClose | 是否允许按 `ESC` 键关闭弹出框。 | `boolean` | `false` |
| mouseLeaveToClose | 是否在鼠标移出触发节点和弹出层的时候关闭弹出层 | `boolean` | `true` |
| popupHoverStay | 是否在鼠标移出触发节点，移入弹出框时保留弹出框。 | `boolean` | `true` |
| popupVisible | 设置弹出框开启或关闭 | `boolean` | `-` |
| showArrow | 是否展示箭头元素 | `boolean` | `-` |
| unmountOnExit | 隐藏后是否销毁 DOM 结构 | `boolean` | `true` |
| updateOnScroll | 是否在容器滚动时更新弹出框的位置 | `boolean` | `-` |
| focusDelay | focus 触发延时的毫秒数 | `number` | `-` |
| mouseEnterDelay | mouseenter 触发延时的毫秒数 | `number` | `100` |
| mouseLeaveDelay | mouseleave 触发延时的毫秒数 | `number` | `100` |
| childrenPrefix | 设置这个参数后，打开弹出后，children 上会添加一个名为 `${childrenPrefix}-open` 的类。 | `string` | `-` |
| classNames | 动画类名 | `string` | `fadeId` |
| position | 弹出位置，一共有 12 个方位可供选择 | `top\| tl\| tr\| bottom\| bl\| br\| left\| lt\| lb\| right\| rt\| rb` | `bottom` |
| trigger | 触发方式 | `hover\| click\| focus\| contextMenu\| Array<hover \| click \| focus \| contextMenu>` | `hover` |
| arrowProps | 箭头元素的所有 html 参数 | `HTMLAttributes&lt;HTMLDivElement&gt;` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| duration | 动画过渡时间 | `number \| { exit?: number; enter?: number; appear?: number }` | `200` |
| onClickOutside | 点击触发节点和弹出框以外的区域的回调。 | `Function` | `-` |
| popupAlign | 调整弹出框的位置，有四个属性值，`left`, `right`, `top`, `bottom`，分别表示向该方向移动几个像素。 | `{left?: number \| [number, number];right?: number \| [number, number];top?: number \| [number, number];bottom?: number \| [number, number];}` | `{}` |
| popupStyle | 弹出框（内部）的样式 | `CSSProperties` | `-` |
| style | 弹出框（外部）的样式 | `CSSProperties` | `-` |
| getDocument | 在该元素上执行 clickOutside，触发弹出框关闭 | `() => Element` | `() => window.document` |
| getPopupContainer | 设置弹出内容所插入的父元素 | `(node: HTMLElement) => Element ` | `-` |
| onClick | 按钮点击事件（`trigger` 包含 `click` 时生效） | `(popupVisible: boolean) => void` | `-` |
| onVisibleChange | 显示或隐藏时触发的回调 | `(visible: boolean) => void` | `-` |
| popup | 弹出框的内容 | `() => ReactNode` | `-` |

### `onVisibleChange`的触发时机说明

- `trigger`包含`click`时

  1. 鼠标点击空白处，会触发`onVisibleChange`，隐藏弹出层。设置 `clickOutsideToClose=false` 可以阻止触发。
  2. 鼠标点击触发节点，例如示例中的 `Button`，会触发`onVisibleChange`，隐藏/显示弹出层。在弹出层展示状态下，如果设置 `clickToClose=false`，则再点击触发节点，将不会隐藏弹出层。

  **也可以不设置 onVisibleChange，完全由外部控制是否显示。**

- `trigger`包含`contextMenu`时

  1. 鼠标点击空白处，会触发`onVisibleChange`，隐藏弹出层。设置 `clickOutsideToClose=false` 可以阻止触发。
  2. 在 children 上鼠标点击右键，会触发`onVisibleChange`，显示弹出层。

- `trigger` 包含 `hover` 时

  1. 鼠标从弹出层移出，并未在`mouseLeaveDelay`时间内移入触发节点，会触发`onVisibleChange`，隐藏弹出层。
  2. 鼠标从触发节点移出，并未在`mouseLeaveDelay`时间内移入弹出层，会触发`onVisibleChange`，隐藏弹出层。

  **如果设置了`popupHoverStay=false`，则鼠标无法移入弹出层。在 trigger 包含 hover 时，点击空白处不会隐藏弹窗，因为可能引起 onVisibleChange 被多次触发。可以在 onClickOutside 执行必要的逻辑 **

- `trigger` 包含 `focus` 时

  1. 触发节点失去焦点，就会触发`onVisibleChange`，隐藏弹出层。
  2. 当设置`blurToHide=false`时，点击空白处会触发`onVisibleChange`，隐藏弹出层。设置 `clickOutsideToClose=false` 可以阻止触发。

  **如果不期望失去焦点隐藏弹出层，可设置 `blurToHide=false`**

## 常见问题

1. 设置了 `getPopupContainer` 后，弹出层位置不对？组件默认 `autoFitPosition` 属性为 `true`，也就是说组件会根据弹出层的尺寸，在视口中的位置以及所挂载的父元素来自动调整弹出层的位置。例如设置 `position=top` ，但是上方空间不足，弹出层会被遮住，组件就会根据情况来判断是否将弹出层展示在触发元素的下方。如果设置了 `getPopupContainer`，弹出层的样式属性`left`最小为 0，也就是最小距离父元素的左边界为 0，避免超出父元素，导致被遮挡。
