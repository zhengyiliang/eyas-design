import React from 'react';
import { Popconfirm, Message, Button } from 'eyas-ui';

const App = () => {
  return (
    <div>
      <Popconfirm
        focusLock
        title="Are you sure you want to delete?"
        onOk={() => {
          Message.info({
            content: 'ok',
          });
        }}
        onCancel={() => {
          Message.error({
            content: 'cancel',
          });
        }}
      >
        <Button>Delete</Button>
      </Popconfirm>
    </div>
  );
};

export default App;
