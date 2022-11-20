import React from 'react';
import { Input, Space } from 'eyas-ui';

const App = () => {
  return (
    <Space wrap>
      <Input.Password defaultValue="password" style={{ width: 350 }} />
      <Input.Password
        defaultValue="password"
        defaultVisibility={true}
        placeholder="Please enter ..."
        style={{ width: 350 }}
      />
    </Space>
  );
};

export default App;
