import React from 'react';
import { Switch, Space, Icon } from 'eyas-ui';

const App = () => {
  return (
    <Space size="large">
      <Switch checkedText="ON" uncheckedText="OFF" />
      <Switch checkedText="1" uncheckedText="0" type="round" defaultChecked />
      <Switch
        checkedText={<Icon type="CheckOutlined" />}
        uncheckedText={<Icon type="CloseOutlined" />}
        defaultChecked
      />
    </Space>
  );
};

export default App;
