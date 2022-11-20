import React from 'react';
import { Trigger, Button, Skeleton, Space } from 'eyas-ui';
import './index.less';

function App() {
  return (
    <div style={{ background: 'var(--color-fill-2)', padding: 40 }}>
      <Space size={40}>
        <Trigger
          showArrow
          trigger="click"
          position="bl"
          popup={() => (
            <div className="demo-trigger-popup" style={{ width: 300 }}>
              <Skeleton />
            </div>
          )}
        >
          <Button type="primary">Click Me</Button>
        </Trigger>
        <Trigger
          showArrow
          arrowProps={{
            style: {
              background: 'red',
            },
          }}
          trigger="click"
          position="bl"
          popup={() => (
            <div className="demo-trigger-popup">
              <Skeleton />
            </div>
          )}
        >
          <Button type="primary">Click Me（arrowProps）</Button>
        </Trigger>
      </Space>
    </div>
  );
}

export default App;
