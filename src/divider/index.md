---
group:
  title: 布局
nav:
  path: /components
---

# 分割线 Divider

划分内容区域，对模块做分隔。

## 基本用法

对不同章节的文本段落进行分割，默认为水平分割线，可在中间加入文字。

```tsx
import React from 'react';
import { Divider, Typography } from 'eyas-ui';
import { IconFileImage, IconUser, IconPen } from '@eyas-design/icons';
const { Paragraph, Title } = Typography;

const contentStyle = {
  boxSizing: 'border-box',
  width: 560,
  padding: 24,
  border: '30px solid #eee',
};

const flexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const avatar = {
  width: 40,
  height: 40,
  marginRight: 16,
  borderRadius: '50%',
  fontSize: 16,
  backgroundColor: '#eee',
};

const App = () => {
  return (
    <>
      <div style={contentStyle}>
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
        <Divider />
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
        <Divider
          style={{
            borderBottomStyle: 'dashed',
          }}
        />
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
        <Divider
          style={{
            borderBottomWidth: 2,
            borderBottomStyle: 'dotted',
          }}
        />
        <Paragraph>
          A design is a plan or specification for the construction of an object.
        </Paragraph>
      </div>
      <div style={contentStyle}>
        <div style={flexCenter}>
          <span style={{ ...flexCenter, ...avatar }}>
            <IconFileImage />
          </span>
          <div
            style={{
              flex: 1,
              fontSize: 12,
              lineHeight: '20px',
            }}
          >
            <Title heading={6}>Image</Title>May 4, 2010
          </div>
        </div>
        <Divider
          style={{
            marginBottom: 2,
            fontSize: 16,
            lineHeight: '24px',
          }}
        />
        <div style={flexCenter}>
          <span style={{ ...flexCenter, ...avatar }}>
            <IconUser />
          </span>
          <div
            style={{
              flex: 1,
              fontSize: 12,
              lineHeight: '20px',
            }}
          >
            <Title heading={6}>Avatar</Title>May 4, 2010
          </div>
        </div>
        <Divider
          style={{
            marginBottom: 2,
            fontSize: 16,
            lineHeight: '24px',
          }}
        />
        <div style={flexCenter}>
          <span style={{ ...flexCenter, ...avatar }}>
            <IconPen />
          </span>
          <div
            style={{
              flex: 1,
              fontSize: 12,
              lineHeight: '20px',
            }}
          >
            <Title heading={6}>Icon</Title>May 4, 2010
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
```

## 带有文字的分割线

通过 `orientation` 指定分割线文字的位置。

```tsx
import React from 'react';
import { Divider, Typography } from 'eyas-ui';
const { Paragraph } = Typography;
const orientations = ['left', 'center', 'right'];

const App = () => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: 560,
        padding: 24,
        border: '30px solid #eee',
      }}
    >
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider orientation={orientations[0]}>Text</Divider>
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider orientation={orientations[1]}>Text</Divider>
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider orientation={orientations[2]}>Text</Divider>
    </div>
  );
};

export default App;
```

## 竖直分割线

指定 `type` 为 `vertical` 即可使用竖直分割线。竖直分割线不能带文字。

```tsx
import React from 'react';
import { Divider, Typography } from 'eyas-ui';
const { Text } = Typography;

const App = () => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: 560,
        padding: 24,
        border: '30px solid #eee',
      }}
    >
      <Text>Item 1</Text>
      <Divider type="vertical" />
      <Text>Item 2</Text>
      <Divider type="vertical" />
      <Text>Item 3</Text>
    </div>
  );
};

export default App;
```

## API

**Divider**

| 参数名      | 描述                         | 类型                      | 默认值       |
| ----------- | ---------------------------- | ------------------------- | ------------ |
| orientation | 分割线文字的位置             | `left \| right \| center` | `center`     |
| type        | 分割线的类型，是水平还是竖直 | `horizontal \| vertical`  | `horizontal` |
| className   | 节点类名                     | `string \| string[]`      | `--`         |
| style       | 节点样式                     | `CSSProperties`           | `--`         |
