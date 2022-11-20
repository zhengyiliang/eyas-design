import React from 'react';
import { Trigger, Button, Skeleton } from 'eyas-ui';
import './index.less';

function Popup() {
  return <Skeleton className="demo-trigger-popup" style={{ width: 300 }} />;
}

function App() {
  return (
    <div
      style={{
        background: 'var(--color-fill-2)',
        padding: 40,
        height: 100,
        overflow: 'auto',
      }}
    >
      <div style={{ height: 200 }}>
        <Trigger trigger="click" position="bottom" popup={() => <Popup />} updateOnScroll>
          <Button type="primary" style={{ marginTop: 80 }}>
            Button
          </Button>
        </Trigger>
      </div>
    </div>
  );
}

export default App;
