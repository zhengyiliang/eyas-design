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

```tsx
import React from 'react';
import { Button, Space } from 'eyas-ui';

export default () => (
  <Space size="large" wrap>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
    <Button type="dashed" hoverable>
      Dashed
    </Button>
    <Button type="outline">Outline</Button>
    <Button type="text">Text</Button>
  </Space>
);
```

## 图标按钮

Button 可以嵌入图表，在只设置图标而没有 children 时，按钮得高宽相等。

```tsx
import React from 'react';
import { Button, Space } from 'eyas-ui';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

export default () => (
  <Space size="large">
    <Button type="primary" icon={<PlusOutlined />} />
    <Button type="primary" icon={<DeleteOutlined />}>
      Delete
    </Button>
  </Space>
);
```

## 按钮形状

Button 有多种形状，`square`-长方形(**默认**)，`circle`-圆形，`round`-全圆角

```tsx
import React from 'react';
import { Button, Space } from 'eyas-ui';
import { PlusOutlined } from '@ant-design/icons';

export default () => (
  <Space size="large">
    <Button type="primary" icon={<PlusOutlined />} />
    <Button shape="circle" type="primary" icon={<PlusOutlined />} />
    <Button shape="round" type="primary">
      Primary
    </Button>
    <Button type="primary">Primary</Button>
  </Space>
);
```

## 按钮尺寸

按钮分为：迷你、小、中、大，四种尺寸。高度分别为：`24px/28px/32px/36px`。推荐及默认为尺寸「中」。可在不同场景及不同业务需求选择适合尺寸。

```tsx
import React from 'react';
import { Button, Space } from 'eyas-ui';

const App = () => {
  return (
    <Space size="large">
      <Button size="mini" type="primary">
        Mini
      </Button>
      <Button size="small" type="primary">
        Small
      </Button>
      <Button size="default" type="primary">
        Default
      </Button>
      <Button size="large" type="primary">
        Large
      </Button>
    </Space>
  );
};

export default App;
```

## 按钮状态

按钮状态分为 警告，危险，成功 三种，可以与按钮类型同时生效，优先级高于按钮类型。

```tsx
import React from 'react';
import { Button, Space } from 'eyas-ui';

const App = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 100px)',
        gridRowGap: 24,
        gridColumnGap: 24,
      }}
    >
      <Button type="primary" status="warning">
        Warning
      </Button>
      <Button status="warning">Warning</Button>
      <Button type="outline" status="warning">
        Warning
      </Button>
      <Button type="text" status="warning">
        Warning
      </Button>

      <Button type="primary" status="danger">
        Danger
      </Button>
      <Button status="danger">Danger</Button>
      <Button type="outline" status="danger">
        Danger
      </Button>
      <Button type="text" status="danger">
        Danger
      </Button>

      <Button type="primary" status="success">
        Success
      </Button>
      <Button status="success">Success</Button>
      <Button type="outline" status="success">
        Success
      </Button>
      <Button type="text" status="success">
        Success
      </Button>
    </div>
  );
};

export default App;
```

## 禁用按钮

按钮的禁用状态。

```tsx
import React from 'react';
import { Button, Space } from 'eyas-ui';

const App = () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <Button disabled type="primary">
          Primary
        </Button>
        <Button disabled type="secondary">
          Secondary
        </Button>
        <Button disabled type="dashed">
          Dashed
        </Button>
        <Button disabled type="outline">
          Outline
        </Button>
        <Button disabled type="text">
          Text
        </Button>
      </Space>
      <Space size="large">
        <Button disabled type="primary" status="danger">
          Primary
        </Button>
        <Button disabled type="secondary" status="danger">
          Secondary
        </Button>
        <Button disabled type="dashed" status="danger">
          Dashed
        </Button>
        <Button disabled type="outline" status="danger">
          Outline
        </Button>
        <Button disabled type="text" status="danger">
          Text
        </Button>
      </Space>
      <Space size="large">
        <Button disabled type="primary" status="warning">
          Primary
        </Button>
        <Button disabled type="secondary" status="warning">
          Secondary
        </Button>
        <Button disabled type="dashed" status="warning">
          Dashed
        </Button>
        <Button disabled type="outline" status="warning">
          Outline
        </Button>
        <Button disabled type="text" status="warning">
          Text
        </Button>
      </Space>
      <Space size="large">
        <Button disabled type="primary" status="success">
          Primary
        </Button>
        <Button disabled type="secondary" status="success">
          Secondary
        </Button>
        <Button disabled type="dashed" status="success">
          Dashed
        </Button>
        <Button disabled type="outline" status="success">
          Outline
        </Button>
        <Button disabled type="text" status="success">
          Text
        </Button>
      </Space>
    </Space>
  );
};

export default App;
```

## 加载中按钮

通过设置`loading`可以让一个按钮处于加载中状态。处于加载中状态的按钮不会触发点击事件。

```tsx
import React, { useState } from 'react';
import { Button, Divider } from 'eyas-ui';
import { PlusOutlined } from '@ant-design/icons';

function App() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  function onClickBtn1() {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
    }, 4000);
  }

  function onClickBtn2() {
    setLoading2(true);
    setTimeout(() => {
      setLoading2(false);
    }, 4000);
  }

  function onClickBtn3() {
    setLoading3(true);
    setTimeout(() => {
      setLoading3(false);
    }, 4000);
  }

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 100px)',
          rowGap: 24,
          columnGap: 24,
          marginLeft: 24,
        }}
      >
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="secondary" loading>
          Loading
        </Button>
        <Button type="dashed" loading>
          Loading
        </Button>
        <Button type="primary" shape="circle" loading />
        <Button type="secondary" shape="circle" loading />
        <Button type="dashed" shape="circle" loading />
      </div>
      <Button type="primary" loading={loading1} onClick={onClickBtn1} style={{ margin: 24 }}>
        Click Me
      </Button>
      <Button type="primary" loading={loading2} onClick={onClickBtn2} style={{ margin: 24 }}>
        {!loading2 && <PlusOutlined />}Click Me
      </Button>
      <Divider>loading fixed width</Divider>
      <Button
        type="primary"
        loadingFixedWidth
        loading={loading3}
        onClick={onClickBtn3}
        style={{ margin: 24 }}
      >
        Search
      </Button>
    </>
  );
}

export default App;
```

## 组合按钮

可用在同级多项操作，以按钮组合方式出现。

```tsx
import React from 'react';
import { Button, Space } from 'eyas-ui';
import {
  LeftOutlined,
  RightOutlined,
  MoreOutlined,
  StarOutlined,
  SettingOutlined,
  MessageOutlined,
  DownOutlined,
} from '@ant-design/icons';
const ButtonGroup = Button.Group;

const App = () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <ButtonGroup>
          <Button>Publish</Button>
          <Button icon={<DownOutlined />} />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="secondary">Publish</Button>
          <Button type="secondary" icon={<MoreOutlined />} />
        </ButtonGroup>
      </Space>
      <ButtonGroup>
        <Button type="primary">Publish</Button>
        <Button type="primary" icon={<DownOutlined />} />
      </ButtonGroup>
      <Space size="large">
        <ButtonGroup>
          <Button type="primary" icon={<LeftOutlined />} shape="round" style={{ padding: '0 8px' }}>
            Prev
          </Button>
          <Button type="primary" shape="round" style={{ padding: '0 8px' }}>
            Next
            <RightOutlined />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="primary" icon={<StarOutlined />} />
          <Button type="primary" icon={<MessageOutlined />} />
          <Button type="primary" icon={<SettingOutlined />} />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="primary" icon={<StarOutlined />}>
            Favorite
          </Button>
          <Button type="primary" icon={<SettingOutlined />}>
            Setting
          </Button>
        </ButtonGroup>
      </Space>
    </Space>
  );
};

export default App;
```

## 长按钮

按钮宽度随着容器宽度进行适配。

```tsx
import React from 'react';
import { Button, Space } from 'eyas-ui';

const App = () => {
  return (
    <Space
      style={{
        width: 360,
        border: '1px solid var(--color-border)',
        borderRadius: 4,
        padding: 20,
      }}
      direction="vertical"
      size="large"
    >
      <Button type="primary" long>
        Primary
      </Button>
      <Button type="secondary" long>
        Secondary
      </Button>
      <Button type="dashed" long>
        Dashed
      </Button>
      <Button type="default" long>
        Default
      </Button>
      <Button type="text" long>
        Text
      </Button>
    </Space>
  );
};

export default App;
```

## API

**Button**

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
