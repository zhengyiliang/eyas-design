---
group:
  title: 数据输入
nav:
  path: /components
---

# 选择器 Select

当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项。

## 基础用法

基础选择器。

<code src="./__demo__/basic">

## 允许清除

支持清除按钮。

<code src="./__demo__/clear">

## 多选模式

指定 `mode=multiple`，即可使用多选。通过 `maxTagCount` 设置最多显示的标签个数，通过 `renderTag` 属性自定义标签的渲染方式，实现更复杂的定制。

<code src="./__demo__/multiple">

## 带有前置标签

通过 `addBefore` 设置前置标签

<code src="./__demo__/addbefore">

## 允许创建

指定 `allowCreate` 为 `true`，即可创建选项中不存在的条目。

<code src="./__demo__/allow-create">

## 搜索

指定`showSearch=true`，可以对展开的选项进行搜索，配合 `filterOption` 可以自定义搜索。搜索框聚焦时默认会清空已输入的内容，通过指定 `showSearch={ retainInputValue: true }` 来保留内容。

<code src="./__demo__/show-search">

## 远程搜索

定 `showSearch`，并且结合 `filterOption` 和 `onSearch`，可以使用远程搜索功能。

<code src="./__demo__/async-data">

## 自定义弹出框宽度

这个例子展示了弹出框可以根据内容自动调节宽度，最小宽度为输入框的宽度。 `triggerProps.autoAlignPopupWidth` 参数为弹出框宽度跟输入框保持一致。 `triggerProps.autoAlignPopupMinWidth` 参数为弹出框最小宽度跟输入框保持一致。可以自由组合。

<code src="./__demo__/custom-popup-width">

## 不同尺寸

通过 `size` 选择 `Select` 的尺寸`（mini, small, default, large`），高度分别对应`24px`、`28px`、`32px`、`36px`。

<code src="./__demo__/size">

## 定制回显内容

使用 `renderFormat` 可以定制回显内容。

**注意：在如远程加载选项数据的场景下，value 中对应的选项可能在某些时刻并不存在，需要判断若 option 不存在则返回 value 作为显示的内容。**

<code src="./__demo__/render-format">

## 分组

使用 `Select.Group` 对下拉菜单选项进行编组。

<code src="./__demo__/group">

## 指定可选项

通过传入`options`指定可选项。

<code src="./__demo__/options">

## 滚动加载选项

当动态加载时，可通过`onPopupScroll`来监听滚动事件

<code src="./__demo__/on-popup-scroll">

## 自动分词

设置 `tokenSeparators` 可以使用自动分词功能。试试复制 `Beijing,Shanghai,Shenzhen|Nanjing/Xi'an|Hangzhou` 到输入框里。只在 multiple 模式下可用。

<code src="./__demo__/token-separators">

## 自定义触发节点

设置 `triggerElement` 可以自定义触发下拉框的节点。当自定义了触发节点时，由于内部绑定的键盘处理事件失效，所以快捷键操作将不可用，需要通过组件引用的 `hotkeyHandler` 进行额外处理。

<code src="./__demo__/custom-trigger">

## 扩展菜单

使用 `dropdownRender` 对下拉菜单进行自由扩展。

<code src="./__demo__/dropdown-render">

## 无边框

使用 `bordered = false`，可以使用无边框的选择器。

<code src="./__demo__/no-border">

## 自定义标签样式

指定 `renderTag` 来自定义标签节点。

<code src="./__demo__/render-tag">

## 联动

省市联动示例。

<code src="./__demo__/relative">

## 隐藏已选择项

在下拉列表中隐藏已选择的项。

<code src="./__demo__/hide-selected-option">

## 大数据

`Select` 使用了虚拟滚动技术，在大量数据的情况也能保证性能。

<code src="./__demo__/virtual-list">

**当指定了 `triggerProps.autoAlignPopupWidth = false` 且 `Option.label` 为非文本类型时，由于无法在选项列表首次渲染时获取选项的最大宽度，虚拟滚动会被自动关闭。**

## 拖拽排序

多选时，指定 `dragToSort` 属性以允许对已输入的值进行拖拽排序。

<code src="./__demo__/draggable">

## API

### Select

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 允许清除值。 | `boolean` | `-` |
| allowCreate | 是否允许通过输入创建新的选项。 | `boolean` | `-` |
| animation | 是否为内部标签变化添加动画。 | `boolean` | `true` |
| bordered | 是否需要边框 | `boolean` | `true` |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | `boolean` | `true` |
| defaultPopupVisible | 下拉框是否默认打开。 | `boolean` | `-` |
| disabled | 是否为禁用状态。 | `boolean` | `-` |
| dragToSort | 是否可以通过拖拽为 Tag 排序 | `boolean` | `-` |
| error | 是否为错误状态。 | `boolean` | `-` |
| labelInValue | 设置 `onChange` 回调中 `value` 的格式。默认是 string，设置为 true 时候，value 格式为： { label: string, value: string } | `boolean` | `-` |
| loading | 是否为加载状态。 | `boolean` | `-` |
| popupVisible | 控制下拉框是否打开。 | `boolean` | `-` |
| unmountOnExit | 是否在隐藏的时候销毁 DOM 结构 | `boolean` | `true` |
| inputValue | 输入框的值（受控模式） | `string` | `-` |
| placeholder | 选择框默认文字。 | `string` | `-` |
| mode | 是否开启多选模式或标签模式 (**`tags` 推荐使用 `mode: multiple; allowCreate: true` 替代，下一大版本将移除此模式**) | `multiple \| tags` | `-` |
| size | 分别不同尺寸的选择器。对应 `24px`, `28px`, `32px`, `36px` | `mini \| small \| default \| large` | `-` |
| trigger | 触发方式。 | `hover \| click` | `click` |
| addBefore | 选择框前添加元素 | `ReactNode` | `-` |
| clearIcon | `allowClear` 时配置清除按钮的图标。 | `ReactNode` | `-` |
| notFoundContent | 没有数据时显示的内容 | `ReactNode` | `-` |
| prefix | 前缀。 | `ReactNode` | `-` |
| suffixIcon | 自定义选择框后缀图标。 | `ReactNode` | `-` |
| arrowIcon | 自定义箭头图标，设置为 `null` 不显示箭头图标。 | `ReactNode \| null` | `-` |
| className | 节点类名 | `string \| string[]` | `-` |
| defaultValue | 选择框的默认值 | `string \| string[] \| number \| number[] \| LabeledValue ` | `-` |
| dropdownMenuClassName | 下拉列表的类。 | `string \| string[]` | `-` |
| dropdownMenuStyle | 下拉列表的样式。 | `CSSProperties` | `-` |
| options | 指定可选项 | `(\| string\| number\| { label: ReactNode \| string; value: string \| number; disabled?: boolean; extra?: any })[]` | `-` |
| removeIcon | 多选时配置选中项的删除图标。当传入`null`，不显示删除图标。 | `ReactNode \| null` | `-` |
| showSearch | 使单选模式可搜索，传入 `{ retainInputValue: true }` 在搜索框聚焦时保留现有内容传入 `{ retainInputValueWhileSelect: true }` 在多选选择时保留输入框内容。 | `boolean \| { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }` | `-` |
| style | 节点样式 | `CSSProperties` | `-` |
| tokenSeparators | 在多选模式下自动分词的分隔符。 | `string[]` | `-` |
| triggerProps | 可以接受所有 `Trigger` 的 `Props` | `Partial&lt;[TriggerProps](trigger#trigger)&gt;` | `-` |
| value | 选择器的值（受控模式） | `string \| string[] \| number \| number[] \| LabeledValue` | `-` |
| virtualListProps | 传递虚拟滚动属性。 | [AvailableVirtualListProps](#availablevirtuallistprops) | `-` |
| dropdownRender | 自定义弹出内容。 | `(menu: ReactNode) => ReactNode` | `-` |
| filterOption | 是否根据输入的值筛选数据。如果传入函数的话，接收 `inputValue` 和 `option` 两个参数，当 option 符合筛选条件时，返回 `true`，反之返回 `false`。 | `boolean \| ((inputValue: string, option: ReactElement) => boolean)` | `true` |
| getPopupContainer | 弹出框挂载的父节点。 | `(node: HTMLElement) => Element` | `-` |
| maxTagCount | 最多显示多少个 `tag`，仅在多选或标签模式有效。 | `\| number\| {count: number;render?: (invisibleTagCount: number) => ReactNode;}` | `-` |
| onBlur | 失去焦点时的回调 | `(e) => void` | `-` |
| onChange | 点击选择框的回调 | (value, option: [OptionInfo](#optioninfo) \| [OptionInfo](#optioninfo)[]) => void | `-` |
| onClear | 点击清除时触发，参数是当前下拉框的展开状态。 | `(visible: boolean) => void` | `-` |
| onClick | 鼠标点击下拉框时的回调 | `(e) => void ` | `-` |
| onDeselect | 取消选中的时候触发的回调，(只在 `multiple` 模式下触发)。 | (value: string \| number \| [LabeledValue](#labeledvalue), option: [OptionInfo](#optioninfo)) => void | `-` |
| onFocus | 获得焦点时的回调 | `(e) => void` | `-` |
| onInputValueChange | 输入框文本改变的回调。 | (value: string, reason: [InputValueChangeReason](#inputvaluechangereason)) => void | `-` |
| onKeyDown | 键盘输入时的回调 | `(e) => void` | `-` |
| onPaste | 输入框文本粘贴的回调。 | `(e) => void` | `-` |
| onPopupScroll | 下拉框的滚动监听函数，参数为滚动元素。 | `(elem) => void` | `-` |
| onSearch | 搜索时的回调 | (value: string, reason: [InputValueChangeReason](#inputvaluechangereason)) => void | `-` |
| onVisibleChange | 下拉框收起展开时触发 | `(visible: boolean) => void` | `-` |
| renderFormat | 定制回显内容。返回值将会显示在下拉框内。若 `value` 对应的 `Option` 不存在，则第一个参数是 null | (option: [OptionInfo](#optioninfo) \| null, value: string \| number \| [LabeledValue](#labeledvalue)) => ReactNode | `-` |
| renderTag | 自定义标签渲染，`props` 为当前标签属性，`index` 为当前标签的顺序，`values` 为所有标签的值. | (props: {value: any;label: ReactNode;closable: boolean;onClose: (event) => void;},index: number,values: [ObjectValueType](#objectvaluetype)[]) => ReactNode | `-` |
| triggerElement | 自定义触发元素。 | \| ReactNode\| ((params: { value: any; option: [OptionInfo](#optioninfo) \| [OptionInfo](#optioninfo)[] }) => ReactNode) | `-` |

### Select.Option

| 参数名    | 描述                     | 类型                          | 默认值 |
| --------- | ------------------------ | ----------------------------- | ------ |
| disabled  | 是否禁用                 | `boolean`                     | `-`    |
| className | 节点类名                 | `string \| string[]`          | `-`    |
| extra     | 携带任意自定义数据。     | `any`                         | `-`    |
| style     | 节点样式                 | `CSSProperties`               | `-`    |
| value     | 默认根据此属性值进行筛选 | `string \| number` **(必填)** | `-`    |

### Select.OptGroup

| 参数名    | 描述     | 类型                 | 默认值 |
| --------- | -------- | -------------------- | ------ |
| label     | 组名     | `ReactNode`          | `-`    |
| className | 节点类名 | `string \| string[]` | `-`    |
| style     | 节点样式 | `CSSProperties`      | `-`    |

### Select Reference Type

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| activeOptionValue | 处于悬浮态的选项的值 | [OptionProps](select#selectoption)['value'] **(必填)** | `-` |
| getOptionInfoByValue | 根据选项值获得对应的选项信息 | (value: [OptionProps](select#selectoption)['value']) => [OptionInfo](#optioninfo) **(必填)** | `-` |
| dom | DOM 节点 | `HTMLDivElement` **(必填)** | `-` |
| blur | 使选择框失焦 | `() => void` **(必填)** | `-` |
| focus | 使选择框聚焦 | `() => void` **(必填)** | `-` |
| getOptionInfoList | 获得选项信息的列表 | () => [OptionInfo](#optioninfo)[] **(必填)** | `-` |
| hotkeyHandler | 鼠标快捷操作的处理函数 | `(event: KeyboardEvent) => void` **(必填)** | `-` |

### LabeledValue

```js
export type LabeledValue = {
  value: string | number,
  label: ReactNode,
};
```

### OptionInfo

```js
export interface OptionInfo extends PropsWithChildren<OptionProps> {
  child?: ReactElement;
  _valid: boolean;
  _index: number;
  _origin: 'children' | 'options' | 'userCreatedOptions' | 'userCreatingOption';
}
```

### AvailableVirtualListProps

```js
export type AvailableVirtualListProps = Pick<
  VirtualListProps<any>,
  'height' | 'itemHeight' | 'threshold' | 'isStaticItemHeight' | 'scrollOptions',
>;
```

### InputValueChangeReason

```js
// 造成输入框值改变的原因：用户输入、选中选项、选项下拉框收起、触发自动分词
export type InputValueChangeReason =
  | 'manual'
  | 'optionChecked'
  | 'optionListHide'
  | 'tokenSeparator';
```

### ObjectValueType

```js
export type ObjectValueType = {
  value?: any,
  label?: ReactNode,
  closable?: boolean,
};
```

### VirtualListProps

| 参数名 | 描述 | 类型 | 默认值 |
| --- | :-: | :-: | --: |
| height | 可视区高度 (`2.11.0` 开始支持如 `80%` 的 `string` 类型) | `number` | 200 |
| threshold | 自动开启虚拟滚动的元素数量阈值，传入`null`以禁用虚拟滚动。 | `number`\|`null` | 100 |
| isStaticItemHeight | 是否为相同高度的静态元素 | `boolean` | true |
