import React from 'react';
import { Dropdown, Menu, Button } from 'eyas-ui';
import { IconDown } from '@eyas-design/icons';
import './index.less';

const dropList = (
  <Menu>
    <Menu.ItemGroup title="Beijing">
      <Menu.Item>Haidian</Menu.Item>
      <Menu.Item>Chaoyang</Menu.Item>
      <Menu.Item>Shunyi</Menu.Item>
    </Menu.ItemGroup>
    <Menu.ItemGroup title="Hebei Province">
      <Menu.Item>Tangshan</Menu.Item>
      <Menu.Item>Baoding</Menu.Item>
    </Menu.ItemGroup>
  </Menu>
);

function App() {
  return (
    <div className="dropdown-demo">
      <Dropdown
        trigger="click"
        position="bl"
        droplist={dropList}
        triggerProps={{ autoAlignPopupWidth: true }}
      >
        <Button type="text">
          Group Menu <IconDown />
        </Button>
      </Dropdown>
    </div>
  );
}

export default App;
