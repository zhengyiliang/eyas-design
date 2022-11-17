---
group:
  title: 数据展示
nav:
  path: /components
---

# 标签页 Tabs

将内容组织同一视图中，一次可查看一个视图内容。查看其他内容可切换选项卡查看。

## 基础用法

最简单的使用。

<code src="./__demo__/basic">

## 带图标的页签

通过自定义的 title, 可以给页签加 icon。

<code src="./__demo__/icon">

## 位置

通过 tabPosition 设置位置。

<code src="./__demo__/position">

## 不同类型

使用 type 属性设置不同类型的页签。

<code src="./__demo__/type">

## 附加

通过 `extra` 可以在页签的右侧添加额外内容。

<code src="./__demo__/extra">

## 动态增减页签

动态增减页签。仅在 `type=card | card-gutter` 的时候生效。

<code src="./__demo__/delete">

## 受控模式

通过 `activeTab` 开启受控模式。

<code src="./__demo__/controled">

## 嵌套使用

组件可以嵌套使用。

<code src="./__demo__/inline">

## 不同尺寸

使用 `size` 属性设置不同尺寸的页签。

<code src="./__demo__/size">

## 自定义选项卡头部

使用 `react-sticky` 实现选项卡头部吸顶效果。

<code src="./__demo__/renderTabbar">

## 可拖拽页签

通过 `react-dnd` 可以实现页签的拖拽。

<!-- <code src="./__demo__/drag"> -->

## 滚动

支持通过滚轮或者触摸板进行滚动操作。

<code src="./__demo__/scroll">

## 滚动偏移位置

支持设置 `scrollPosition` 来改变选中的选项卡的滚动位置

<code src="./__demo__/scrollPosition">

## API

### Tabs

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| destroyOnHide | 是否销毁隐藏标签页的节点, `TabPane` 的该属性优先级高于 `Tabs`。 | `boolean` | `-` |
| editable | 是否允许增减标签。只在 `type` 为 `card` 或 `card-gutter` 时候生效。 | `boolean` | `-` |
| headerPadding | 选项卡头部是否存在水平边距。仅对 `type`等于 `line`、`text`类型的选项卡生效 | `boolean` | `true` |
| justify | 高度撑满容器，只在水平模式下生效。（默认的高度是又撑起的。） | `boolean` | `-` |
| lazyload | 设置为 `true` 时，将不会在组件挂载的时候渲染被隐藏的标签页。 | `boolean` | `true` |
| showAddButton | 是否显示新增按钮（仅在`editable`为`true`时生效） | `boolean` | `true` |
| activeTab | 当前选中的 tab 的 key | `string` | `-` |
| defaultActiveTab | 默认选中的标签选项卡，如不指定默认选择第一个 | `string` | `-` |
| overflow | 标签页较多时候，选择滚动/下拉菜单形式展示 tab | `scroll \| dropdown` | `scroll` |
| scrollPosition | 被选中 tab 的滚动位置，默认 auto 即会将 activeTab 滚动到可见区域，但不会特意做位置调整 | `start \| end \| center \| auto \| number` | `auto` |
| size | 有四个尺寸供选择，分别为`mini`, `small`, `default`, `large` | `mini \| small \| default \| large` | `-` |
| tabPosition | 选项卡位置 | `left \| right \| top \| bottom` | `top` |
| type | 标签选项卡的类型 | `line \| card \| card-gutter \| text \| rounded \| capsule` | `line` |
| addButton | 自定义新增按钮 | `ReactNode` | `-` |
| deleteButton | 自定义删除按钮 | `ReactNode` | `-` |
| extra | 显示在标签页右侧的附加 | `ReactNode` | `-` |
| animation | 是否开启过渡效果 | `boolean \| { tabPane?: boolean; inkBar?: boolean }` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| icons | 图标配置 | `{add?: ReactNode;delete?: ReactNode;}` | `-` |
| scrollAfterEdit | 是否在标签增减后，自动进行滚动调整(`editable`为`true`时生效） | `{delete?: boolean;add?: boolean;}` | `{ add: true, delete: true }` |
| style | 节点样式 | `CSSProperties` | `-` |
| onAddTab | 点击新增 tab 按钮的回调 | `() => void` | `-` |
| onChange | `activeTab` 改变的回调 | `(key: string) => void` | `-` |
| onClickTab | 点击选项卡的回调 | `(key: string) => void` | `-` |
| onDeleteTab | 点击删除按钮的回调 | `(key: string) => void` | `-` |
| renderTabHeader | 自定义选项卡头部 | `(tabProps: TabsProps, DefaultTabHeader: typeof TabHeader) => React.ReactElement` | `-` |
| renderTabTitle | 自定义单个选项卡头部 | `(tabTitle: ReactNode,info: {key: string \| number;isActive: boolean;disabled: boolean;editable: boolean;}) => ReactNode` | `-` |

### Tabs.TabPane

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| closable | 动态增减标签页时是否允许关闭当前标签页 | `boolean` | `-` |
| destroyOnHide | 选项卡隐藏的时候是否销毁标签页内的 DOM 结构，优先级高于 `Tabs` 的 `destroyOnHide` 属性 | `boolean` | `-` |
| disabled | 是否禁用 | `boolean` | `-` |
| title | 选项卡的标题显示 | `string \| ReactNode` **(必填)** | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
