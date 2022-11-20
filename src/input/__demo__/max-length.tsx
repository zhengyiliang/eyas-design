import React from 'react';
import { Input, Space } from 'eyas-ui';

function App() {
  return (
    <Space direction="vertical">
      <Space align="start" size={24}>
        <Input
          maxLength={10}
          showWordLimit
          placeholder="Please enter no more than 10 letters"
          style={{ width: 300 }}
        />
        <Input.TextArea
          maxLength={50}
          showWordLimit
          placeholder="Please enter no more than 50 letters"
          wrapperStyle={{ width: 300 }}
        />
      </Space>

      <Space align="start" size={24}>
        <Input
          maxLength={{ length: 10, errorOnly: true }}
          showWordLimit
          defaultValue="More than 10 letters will be error"
          style={{ width: 300 }}
        />
        <Input.TextArea
          maxLength={{ length: 50, errorOnly: true }}
          showWordLimit
          placeholder="More than 50 letters will be error"
          wrapperStyle={{ width: 300 }}
        />
      </Space>
    </Space>
  );
}

export default App;
