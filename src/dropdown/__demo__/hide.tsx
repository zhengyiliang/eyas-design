import React from 'react';
import { useState, useRef } from 'react';
import { Dropdown, Menu, Button, Space } from 'eyas-ui';
import { IconDown } from '@eyas-design/icons';
import './index.less';

function DemoWithPopupVisible() {
  const [popupVisible, setPopupVisible] = useState(false);
  const refMenuItemClicked = useRef(null);
  const dropList = (
    <Menu
      onClickMenuItem={(key) => {
        refMenuItemClicked.current = key;
      }}
    >
      <Menu.Item key="1">Won't close the menu</Menu.Item>
      <Menu.Item key="2">Will close the menu</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown
      droplist={dropList}
      trigger="click"
      position="bl"
      popupVisible={popupVisible}
      onVisibleChange={(visible) => {
        if (refMenuItemClicked.current === null || refMenuItemClicked.current === '2') {
          setPopupVisible(visible);
        }

        refMenuItemClicked.current = null;
      }}
    >
      <Button type="text">
        Click
        <IconDown />
      </Button>
    </Dropdown>
  );
}

function DemoWithOnClickMenuItem() {
  const dropList = (
    <Menu
      onClickMenuItem={(key) => {
        if (key === '1') {
          return false;
        }
      }}
    >
      <Menu.Item key="1">Return false in onClickMenuItem callback</Menu.Item>
      <Menu.Item key="2">Will close the menu</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown droplist={dropList} trigger="click" position="bl">
      <Button type="text">
        Click
        <IconDown />
      </Button>
    </Dropdown>
  );
}

const App = () => {
  return (
    <Space size="large" className="dropdown-demo">
      <DemoWithPopupVisible />
      <DemoWithOnClickMenuItem />
    </Space>
  );
};

export default App;
