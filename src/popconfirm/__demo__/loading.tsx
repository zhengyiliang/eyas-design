import React from 'react';
import { Popconfirm, Message, Button } from 'eyas-ui';

function delayClose() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
      Message.info({
        content: 'ok',
      });
    }, 2000);
  });
}

const App = () => {
  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onOk={delayClose}
      onCancel={() => {
        Message.error({
          content: 'cancel',
        });
      }}
      focusLock
    >
      <Button style={{ marginRight: 20 }}>Async close</Button>
    </Popconfirm>
  );
};

export default App;
