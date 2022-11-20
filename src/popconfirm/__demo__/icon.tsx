import React from 'react';
import { Popconfirm, Message, Button, Space } from 'eyas-ui';
import { IconFaceSmileFill } from '@eyas-design/icons';

const App = () => {
  return (
    <Space size={24}>
      <Popconfirm
        focusLock
        title="Are you sure you want to delete?"
        icon={<IconFaceSmileFill style={{ color: '#0057fe' }} />}
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
      <Popconfirm
        icon={null}
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
    </Space>
  );
};

export default App;
