---
group:
  title: 数据展示
nav:
  path: /components
---

# 气泡卡片 Popover

鼠标悬停、聚焦或点击在某个组件时，弹出的气泡式的卡片浮层。可以对卡片上的元素进行操作。

## 基础用法

鼠标移入或点击，弹出气泡，可对浮层上元素进行操作，承载复杂内容和操作。

```tsx
import React from 'react';
import { Popover, Button } from 'eyas-ui';
const style = {
  margin: 0,
};

const App = () => {
  return (
    <Popover
      title="Title"
      content={
        <span>
          <p style={style}>Here is the text content</p>
          <p style={style}>Here is the text content</p>
        </span>
      }
    >
      <Button type="primary">Hover</Button>
    </Popover>
  );
};

export default App;
```

## 触发方式

通过设置 `trigger`，可以指定不同的触发方式。

```tsx
import React from 'react';
import { Popover, Button, Space } from 'eyas-ui';
const style = {
  margin: 0,
};

const App = () => {
  return (
    <Space size={40}>
      <Popover
        trigger="hover"
        title="Title"
        content={
          <span>
            <p style={style}>Here is the text content</p>
            <p style={style}>Here is the text content</p>
          </span>
        }
      >
        <Button>Hover</Button>
      </Popover>
      <Popover
        trigger="click"
        title="Title"
        content={
          <span>
            <p style={style}>Here is the text content</p>
            <p style={style}>Here is the text content</p>
          </span>
        }
      >
        <Button>Click</Button>
      </Popover>
      <Popover
        trigger="focus"
        title="Title"
        content={
          <span>
            <p style={style}>Here is the text content</p>
            <p style={style}>Here is the text content</p>
          </span>
        }
      >
        <Button>Focus</Button>
      </Popover>
    </Space>
  );
};

export default App;
```

## 位置

`Popover` 支持 12 个不同的方位。分别为：`上左` `上` `上右` `下左` `下` `下右` `左上` `左` `左下` `右上` `右` `右下`。

```tsx
import React from 'react';
import { Popover, Button } from 'eyas-ui';
const style = {
  margin: 0,
};

function getStyle(top, left) {
  return {
    position: 'absolute',
    width: 80,
    top,
    left,
  };
}

const content = (
  <span>
    <p style={style}>Here is the text content</p>
    <p style={style}>Here is the text content</p>
  </span>
);

const App = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: 440,
        height: 280,
      }}
    >
      <Popover position="tl" title="Title" content={content}>
        <Button style={getStyle(0, 70)}>TL</Button>
      </Popover>
      <Popover position="top" title="Title" content={content}>
        <Button style={getStyle(0, 180)}>Top</Button>
      </Popover>
      <Popover position="tr" title="Title" content={content}>
        <Button style={getStyle(0, 290)}>TR</Button>
      </Popover>
      <Popover position="lt" title="Title" content={content}>
        <Button style={getStyle(60, 10)}>LT</Button>
      </Popover>
      <Popover position="left" title="Title" content={content}>
        <Button style={getStyle(120, 10)}>Left</Button>
      </Popover>
      <Popover position="lb" title="Title" content={content}>
        <Button style={getStyle(180, 10)}>LB</Button>
      </Popover>
      <Popover position="rt" title="Title" content={content}>
        <Button style={getStyle(60, 350)}>RT</Button>
      </Popover>
      <Popover position="right" title="Title" content={content}>
        <Button style={getStyle(120, 350)}>Right</Button>
      </Popover>
      <Popover position="rb" title="Title" content={content}>
        <Button style={getStyle(180, 350)}>RB</Button>
      </Popover>
      <Popover position="bl" title="Title" content={content}>
        <Button style={getStyle(240, 70)}>BL</Button>
      </Popover>
      <Popover position="bottom" title="Title" content={content}>
        <Button style={getStyle(240, 180)}>Bottom</Button>
      </Popover>
      <Popover position="br" title="Title" content={content}>
        <Button style={getStyle(240, 290)}>BR</Button>
      </Popover>
    </div>
  );
};

export default App;
```

## 浮层内关闭

控制浮层显示。

```tsx
import React from 'react';
import { Popover, Button, Space } from 'eyas-ui';

const style = {
  margin: 0,
};

function App() {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  return (
    <Space size={40}>
      <Popover
        title="Title"
        popupVisible={visible}
        onVisibleChange={setVisible}
        content={
          <span>
            <p style={style}>Here is the text content</p>
            <p style={style}>Here is the text content</p>
            <p style={{ ...style, textAlign: 'right', marginTop: 4 }}>
              <Button type="text" onClick={() => setVisible(false)}>
                Close
              </Button>
            </p>
          </span>
        }
      >
        <Button type="primary">Hover</Button>
      </Popover>
      <Popover
        title="Title"
        popupVisible={visible2} // button 触发 mouseenter的时候会调用该方法。更多的用法可以查看Trigger组件。
        onVisibleChange={(visible) => {
          if (visible) {
            setVisible2(true);
          }
        }}
        content={
          <span>
            <p style={style}>Here is the text content</p>
            <p style={style}>Here is the text content</p>
            <p style={{ ...style, textAlign: 'right', marginTop: 4 }}>
              <Button type="text" onClick={() => setVisible2(false)}>
                Close
              </Button>
            </p>
          </span>
        }
      >
        <Button type="primary">Will not close when moved out</Button>
      </Popover>
    </Space>
  );
}

export default App;
```

## API

**Popover**

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| blurToHide | 是否在失去焦点的时候关闭弹出框 | `boolean` | `true` |
| defaultPopupVisible | 默认的弹出框状态 | `boolean` | `--` |
| disabled | 是否禁用 | `boolean` | `--` |
| popupHoverStay | 鼠标移入弹出框的话，弹出框会保留而不销毁 | `boolean` | `true` |
| popupVisible | 弹出框是打开还是关闭状态 | `boolean` | `--` |
| unmountOnExit | 是否在隐藏的时候销毁 DOM 结构 | `boolean` | `true` |
| childrenPrefix | 会在打开状态给元素加上一个类，格式为 `${childrenPrefix}-open`。 | `string` | `--` |
| color | 弹出层背景色 | `string` | `--` |
| position | 弹出框的方位，有 12 个方位可供选择 | `top \| tl \| tr \| bottom \| bl \| br \| left \| lt \| lb \| right \| rt \| rb` | `top` |
| trigger | 触发方式 | `click \| hover \| focus` | `hover` |
| content | 弹出的内容 | `ReactNode` | `--` |
| title | 标题 | `ReactNode` | `--` |
| className | 节点类名 | `string \| string[]` | `--` |
| style | 节点样式 | `CSSProperties` | `--` |
| triggerProps | 可以接受所有 `Trigger` 组件的参数 | `Partial<TriggerProps>` | `--` |
| getPopupContainer | 弹出框挂载的节点 | `(node: HTMLElement) => Element` | `--` |
| onVisibleChange | 显示或隐藏时触发的回调 | `(visible: boolean) => void` | `--` |
