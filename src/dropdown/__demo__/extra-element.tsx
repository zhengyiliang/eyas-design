import React from 'react';
import { Dropdown, Menu, Button, Divider } from 'eyas-ui';
import { IconDown } from '@eyas-design/icons';
import './index.less';

const dropList = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
    <Divider style={{ margin: '4px 0' }} />
    <Menu.Item key="4" disabled>
      Shenzhen
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <div className="dropdown-demo">
      <Dropdown droplist={dropList} position="br">
        <Button type="text">
          Hover
          <IconDown />
        </Button>
      </Dropdown>
    </div>
  );
}

export default App;
