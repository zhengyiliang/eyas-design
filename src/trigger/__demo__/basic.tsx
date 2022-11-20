import React from 'react';
import { Trigger, Button, Tooltip, Input, Skeleton, Typography, Space } from 'eyas-ui';
import './index.less';

function Element(props) {
  return (
    <Typography.Text {...props} style={{ marginRight: 20 }}>
      Hover me
    </Typography.Text>
  );
}

function Popup() {
  return (
    <div className="demo-trigger-popup" style={{ width: 300 }}>
      <Tooltip content="123" defaultPopupVisible>
        <span>123123</span>
      </Tooltip>
      <Skeleton />
    </div>
  );
}

function App() {
  return (
    <Space style={{ width: 1000, overflow: 'auto' }} size={40}>
      <Trigger
        popup={() => <Popup />}
        mouseEnterDelay={400}
        mouseLeaveDelay={400}
        position="bottom"
      >
        <Element />
      </Trigger>
      <Trigger popup={() => <Popup />} trigger="click" position="bottom" classNames="zoomInTop">
        <Button>Click me</Button>
      </Trigger>
      <Trigger popup={() => <Popup />} trigger="focus" position="top" classNames="zoomInBottom">
        <Input style={{ width: 200 }} placeholder="Focus on me" />
      </Trigger>
    </Space>
  );
}

export default App;
