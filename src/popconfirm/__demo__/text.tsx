import React from 'react';
import { Popconfirm, Message, Button } from 'eyas-ui';

const App = () => {
  return (
    <div>
      <Popconfirm
        focusLock
        title="Do you want to discard the draft?"
        okText="Discard"
        cancelText="Cancel"
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
        <Button>Discard</Button>
      </Popconfirm>
    </div>
  );
};

export default App;
