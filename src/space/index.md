---
group:
  title: 布局
  order: 1
nav:
  path: /components
---

# 间距 Space

设置组件之间的间距。

## 基本用法

间距组件的基本用法

<code src="./__demo__/basics.tsx">

## 垂直间距

可以设置垂直方向排列的间距

<code src="./__demo__/vertical.tsx">

## API

**Space**

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| wrap | 环绕类型的间距，用于折行的场景。 | `boolean` | `--` |
| align | 对齐方式 | `start \| end\| center\| baseline\|` | `--` |
| direction | 间距方向 | `vertical \| horizontal ` | `horizontal` |
| split | 设置分隔符 | `ReactNode` | `--` |
| className | 按钮类名 | `string \| string[] ` | `--` |
| style | 按钮样式 | `CSSProperties ` | `--` |
| size | 尺寸 | `mini \| small \| medium \| large \| number` | `small` |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
