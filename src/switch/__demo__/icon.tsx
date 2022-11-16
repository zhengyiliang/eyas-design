import React from 'react';
import { Switch, Space, Icon } from 'eyas-ui';

const App = () => {
  return (
    <Space size="large">
      <Switch
        checkedIcon={<Icon type="CheckOutlined" />}
        uncheckedIcon={<Icon type="CloseOutlined" />}
        defaultChecked
      />
      <Switch
        type="round"
        checkedIcon={<Icon type="CheckOutlined" />}
        uncheckedIcon={<Icon type="CloseOutlined" />}
        defaultChecked
      />
      <Switch
        type="line"
        checkedIcon={<Icon type="CheckOutlined" />}
        uncheckedIcon={<Icon type="CloseOutlined" />}
        defaultChecked
      />
    </Space>
  );
};

export default App;
