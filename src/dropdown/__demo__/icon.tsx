import React from 'react';
import { Dropdown, Menu, Button } from 'eyas-ui';
import { IconDown, IconLocation } from '@eyas-design/icons';
import './index.less';

const iconStyle = {
  marginRight: 8,
  fontSize: 16,
  transform: 'translateY(1px)',
};
const dropList = (
  <Menu>
    <Menu.Item key="1">
      <IconLocation style={iconStyle} />
      Beijing
    </Menu.Item>
    <Menu.Item key="2">
      <IconLocation style={iconStyle} />
      Shanghai
    </Menu.Item>
    <Menu.Item key="3">
      <IconLocation style={iconStyle} />
      Guangzhou
    </Menu.Item>
  </Menu>
);

function App() {
  return (
    <div className="dropdown-demo">
      <Dropdown droplist={dropList} trigger="click" position="bl">
        <Button type="text">
          Click me <IconDown />
        </Button>
      </Dropdown>
    </div>
  );
}

export default App;
