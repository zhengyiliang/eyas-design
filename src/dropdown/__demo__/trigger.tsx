import React from 'react';
import { Dropdown, Menu, Button, Space } from 'eyas-ui';
import { IconDown } from '@eyas-design/icons';
import './index.less';

const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
  </Menu>
);

function App() {
  return (
    <Space size="large" className="dropdown-demo">
      <Dropdown droplist={dropList} position="br">
        <Button type="text">
          Hover
          <IconDown />
        </Button>
      </Dropdown>
      <Dropdown droplist={dropList} trigger="click" position="br">
        <Button type="text">
          Click
          <IconDown />
        </Button>
      </Dropdown>
    </Space>
  );
}

export default App;
