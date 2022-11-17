import React from 'react';
import { Message, Button, Space } from 'eyas-ui';

const App = () => {
  return (
    <Space size="large">
      <Button
        onClick={() =>
          Message.info({
            content: 'This is a message!',
            showIcon: true,
            position: 'top',
          })
        }
        type="primary"
      >
        Top
      </Button>
      <Button
        onClick={() =>
          Message.info({
            content: 'This is a message!',
            showIcon: true,
            position: 'bottom',
          })
        }
        type="primary"
      >
        Bottom
      </Button>
    </Space>
  );
};

export default App;
