import React from 'react';
import { Trigger, Button, Input, Skeleton, Typography } from 'eyas-ui';
import './index.less';

function App() {
  return (
    <Trigger
      popup={() => {
        return (
          <div className="demo-trigger-popup">
            <Trigger
              trigger="click"
              position="right"
              popup={() => (
                <div className="demo-trigger-popup" style={{ width: 300 }}>
                  <Skeleton />
                  <Typography.Text>Two</Typography.Text>

                  <Trigger
                    trigger="focus"
                    blurToHide={false}
                    position="right"
                    popup={() => (
                      <div className="demo-trigger-popup">
                        <Typography.Text>Three</Typography.Text>
                        <Skeleton />
                      </div>
                    )}
                  >
                    <Input placeholder="Focus Me" />
                  </Trigger>
                </div>
              )}
            >
              <Button>Click Me</Button>
            </Trigger>
          </div>
        );
      }}
    >
      <Button>Hover Me</Button>
    </Trigger>
  );
}

export default App;
