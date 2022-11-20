---
group:
  title: 反馈
nav:
  path: /components
---

# 骨架屏 Skeleton

将加载中的数据用灰色占位。

## 基础用法

骨架屏的基本使用

<code src="./__demo__/basic">

## 文本行数和宽度

设置文本行数及文本宽度。

<code src="./__demo__/rows">

## 动画

骨架屏显示动画效果。

<code src="./__demo__/animate">

## API

### Skeleton

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| animation | 是否显示动画效果 | `boolean` | `-` |
| loading | 是否显示子组件。为 `true` 时候显示占位符 | `boolean` | `true` |
| className | 节点类名 | `string \| string[]` | `-` |
| image | 是否显示图片占位 | [SkeletonImageProps](#skeletonimageprops) \| boolean | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| text | 是否显示文本占位 | [SkeletonTextProps](#skeletontextprops) \| boolean | `true` |

### SkeletonImageProps

```js
export interface SkeletonImageProps {
  style?: CSSProperties;
  className?: string;
  /** 图片形状 */
  shape?: 'circle' | 'square';
  /** 图片尺寸 */
  size?: 'small' | 'default' | 'large';
  /** 图片位置 */
  position?: 'left' | 'right';
  prefixCls?: string;
}
```

### SkeletonTextProps

```js
export interface SkeletonTextProps {
  style?: CSSProperties;
  className?: string;
  /** 文本行数 */
  rows?: number;
  /** 文本行宽度 */
  width?: number | string | (string | number)[];
  prefixCls?: string;
}
```
