import React from 'react';
import { InputTag, Message, Space } from 'eyas-ui';

const App = () => {
  return (
    <Space>
      <InputTag
        allowClear
        style={{ width: 350 }}
        placeholder="Please input"
        validate={(v) => {
          if (!v || v.length < 3) {
            Message.error('长度必须大于3');
            return false;
          }

          return true;
        }}
      />
      <InputTag
        allowClear
        style={{ width: 350 }}
        placeholder="Format user input"
        validate={(v) => {
          return { word: v };
        }}
        onChange={(value) => {
          Message.info(`Paramster of onChange: ${JSON.stringify(value)}`);
        }}
      />
    </Space>
  );
};

export default App;
