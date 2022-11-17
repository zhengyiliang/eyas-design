import React, { useState } from 'react';
import { ResizeBox, Typography } from 'eyas-ui';
import { IconDoubleLeft, IconDoubleRight } from '@eyas-design/icons';
import './index.less';

const { Paragraph, Text } = Typography;
const panes = [
  {
    size: 0.2,
    collapsible: {
      prev: true,
    },
  },
  {
    size: 0.4,
    min: '50px',
  },
  {
    resizable: false,
    collapsible: {
      prev: {
        // 自定义伸缩杆向前快速收缩触发器
        icon: <IconDoubleLeft />,
        onClick: (_, collapsed, status, activeIndex) => {
          console.log('快速收缩：', collapsed, status, activeIndex);
        },
      },
      next: {
        icon: <IconDoubleRight />,
        onClick: (_, collapsed, status, activeIndex) => {
          console.log('快速收缩：', collapsed, status, activeIndex);
        },
      },
    },
    // 自定义伸缩杆
    trigger: (prev, resize, next) => {
      return (
        <div className="resizebox-split-group-demo-trigger">
          {prev}
          {resize}
          {next}
        </div>
      );
    },
  },
  {},
];
const verticalPanes = [
  {
    collapsible: true,
  },
  {
    min: 0.1,
    collapsible: {
      next: true,
    },
  },
  {},
];

const HorizontalSplitGroup = () => {
  const [offsets, setOffsets] = useState([]);
  return (
    <ResizeBox.SplitGroup
      onMoving={(_, sizes) => setOffsets(sizes)}
      className="resizebox-split-group-demo-horizontal"
      panes={panes.map((obj, index) => ({
        content: (
          <div className="resizebox-split-group-demo-content">
            <Paragraph>
              <Paragraph>
                <Text mark>pane {index}</Text>
                <br />
                <Text code>min：{obj.min || 0}</Text>
                <br />
                <Text code>size： {obj.size || 'not set'}</Text>
                <br />
                <Text code>offset：{offsets[index] || 'initial'}</Text>
              </Paragraph>
            </Paragraph>
          </div>
        ),
        ...obj,
      }))}
    />
  );
};

const VerticalSplitGroup = () => {
  return (
    <ResizeBox.SplitGroup
      className="resizebox-split-group-demo-vertical"
      direction="vertical"
      panes={verticalPanes.map((obj, index) => ({
        content: (
          <div className="resizebox-split-group-demo-content">
            <Text mark>pane {index}</Text>
          </div>
        ),
        ...obj,
      }))}
    />
  );
};

function App() {
  return (
    <ResizeBox.SplitGroup
      direction="vertical"
      className="resizebox-split-group-demo"
      panes={[
        {
          content: <HorizontalSplitGroup />,
          size: 0.4,
        },
        {
          content: <VerticalSplitGroup />,
        },
      ]}
    />
  );
}

export default App;
