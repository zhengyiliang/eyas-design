import React from 'react';
import { Input, Space } from 'eyas-ui';
const TextArea = Input.TextArea;

const App = () => {
  return (
    <Space wrap align="top">
      <TextArea
        placeholder="Please enter ..."
        defaultValue="This is the contents of the textarea. "
        autoSize
        style={{ width: 350 }}
      />
      <TextArea
        placeholder="Please enter ..."
        autoSize={{ minRows: 2, maxRows: 6 }}
        style={{ width: 350 }}
        defaultValue="This is the contents of the textarea. This is the contents of the textarea. This is the contents of the textarea. "
      />
    </Space>
  );
};

export default App;
