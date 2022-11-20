---
group:
  title: 通用
  order: 0
nav:
  path: /components
---

# 按钮 Button

按钮是一种命令组件，可发起一个及时操作

## 基本用法

按钮分为 主要按钮、次要按钮、虚线按钮、线行按钮和文本按钮五种

<code src="./__demo__/basics">

## 图标按钮

Button 可以嵌入图表，在只设置图标而没有 children 时，按钮得高宽相等。

<code src="./__demo__/icon">

## 按钮形状

Button 有多种形状，`square`-长方形(**默认**)，`circle`-圆形，`round`-全圆角

<code src="./__demo__/shape">

## 按钮尺寸

按钮分为：迷你、小、中、大，四种尺寸。高度分别为：`24px/28px/32px/36px`。推荐及默认为尺寸「中」。可在不同场景及不同业务需求选择适合尺寸。

<code src="./__demo__/size">

## 按钮状态

按钮状态分为 警告，危险，成功 三种，可以与按钮类型同时生效，优先级高于按钮类型。

<code src="./__demo__/status">

## 禁用按钮

按钮的禁用状态。

<code src="./__demo__/disabled">

## 加载中按钮

通过设置`loading`可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件。

<code src="./__demo__/loading">

## 组合按钮

可用在同级多项操作，以按钮组合方式出现。

<code src="./__demo__/group">

## 长按钮

按钮宽度随着容器宽度进行适配。

<code src="./__demo__/long">

## API

### Button

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | `boolean` | `--` |
| iconOnly | 只有图标，按钮宽高相等。如果指定 `icon` 且没有 children，`iconOnly` 默认为 true | `boolean` | `--` |
| loading | 按钮是否是加载状态 | `boolean` | `--` |
| loadingFixedWidth | 当 loading 的时候，不改变按钮的宽度。 | `boolean` | `--` |
| long | 按钮宽度随容器自适应。 | `boolean` | `--` |
| hoverable | 隐藏 hover 底色和去掉内边距，`type = text`时生效 | `boolean` | `false` |
| href | 添加跳转链接，设置此属性，button 表现跟 a 标签一致 | `string` | `--` |
| target | a 链接的 target 属性，href 存在时生效 | `string` | `--` |
| htmlType | 按钮原生的 html type 类型 | `button \| submit \| reset` | `button` |
| shape | 按钮形状，`circle` - 圆形， `round` - 全圆角， `square` - 长方形 | `circle \| round \| square` | `square` |
| size | 按钮的尺寸 | `mini \| small \| default \| large` | `default` |
| status | 按钮状态 | `warning \| danger \| success \| default` | `default` |
| type | 按钮主要分为六种按钮类型：主要按钮、次级按钮、虚框按钮、文字按钮、线性按钮，`default` 为次级按钮。 | `default \| primary \| secondary \| dashed \| text \| outline` | `default` |
| icon | 设置按钮的图标 | `ReactNode` | `--` |
| anchorProps | a 链接的原生属性，href 存在时生效 | `HTMLProps<HTMLAnchorElement> ` | `--` |
| className | 按钮类名 | `string \| string[] ` | `--` |
| style | 按钮样式 | `CSSProperties ` | `--` |
| onClick | 点击按钮的回调 | `(e: Event) => void ` | `--` |

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
