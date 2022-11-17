import React from 'react';
import { Dropdown, Menu, Button, Message } from 'eyas-ui';
import { IconDown } from '@eyas-design/icons';
import './index.less';

const dropList = (
  <Menu onClickMenuItem={(key) => Message.info(`You clicked ${key}`)}>
    <Menu.Item key="Beijing">Beijing</Menu.Item>
    <Menu.Item key="Shanghai">Shanghai</Menu.Item>
    <Menu.Item key="Guangzhou">Guangzhou</Menu.Item>
  </Menu>
);

function App() {
  return (
    <div className="dropdown-demo">
      <Dropdown droplist={dropList} position="bl" triggerProps={{ autoAlignPopupWidth: true }}>
        <Button type="text">
          Hover me and click an item <IconDown />
        </Button>
      </Dropdown>
    </div>
  );
}

export default App;
