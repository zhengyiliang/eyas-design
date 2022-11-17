---
group:
  title: 其他
nav:
  path: /components
---

# 固钉 Affix

将页面元素钉在可视范围。当内容区域比较长，需要滚动页面时，固钉可以将内容固定在屏幕上。常用于侧边菜单和按钮组合。

## 基本用法

基本用法，不设置固定位置时，当页面滚动元素不可见时，元素固定在页面最顶部。

<code src="./__demo__/basic.tsx">

## 顶部固定

元素向上滚动到距顶部一定距离时固定。 <code src="./__demo__/top.tsx">

## 底部固定

元素向下滚动到距底部一定距离时固定。

<code src="./__demo__/bottom.tsx">

## 固定状态改变回调

当固定状态发生改变时，会触发事件。

<code src="./__demo__/fixChange.tsx">

## 滚动容器

用 `target` 设置需要监听其滚动事件的元素，默认为 `window`。

`target` 指定为非 window 容器时，可能会出现 `target` 外层元素滚动，固钉元素跑出滚动容器的问题。这个时候可以通过传入 `targetContainer` 设置 `target` 外层的滚动元素。`Affix` 会监听该元素的滚动事件来实时更新滚钉元素的位置。也可以在业务代码中自己监听 `target` 外层滚动元素的 `scroll` 事件，并调用 `this.affixRef.updatePosition()` 去更新固钉的位置。

<code src="./__demo__/container.tsx">

## API

### Affix

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | `number` | `-` |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | `number` | `0` |
| affixClassName | 给 `fixed` 的元素设置 className。 | `string \| string[] ` | `-` |
| affixStyle | 给 `fixed` 的元素设置 style，注意不要设置 `position` `top` `width` `height`， 因为这几个属性是在元素 fixed 时候用于定位的。 | `CSSProperties` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| onChange | 固定状态发生改变时触发 | `(affixed: boolean) => void` | `-` |
| target | 滚动容器 | `() => HTMLElement \| null \| Window` | `() => window` |
| targetContainer | `target` 的外层滚动元素。`Affix` 将会监听该元素的滚动事件，并实时更新固钉的位置。主要是为了解决 `target` 属性指定为非 `window` 元素时，如果外层元素滚动，可能会导致固钉跑出容器问题。 | `() => HTMLElement \| null \| Window` | `-` |
