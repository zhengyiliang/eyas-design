import React, { useState } from 'react';
import { Menu, Slider } from 'eyas-ui';
import { IconApps, IconBug, IconBulb } from '@eyas-design/icons';
import './index.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

function App() {
  const [width, setWidth] = useState(240);
  return (
    <div className="menu-demo" style={{ height: 600 }}>
      <Slider
        style={{ width: 320, marginBottom: 24 }}
        value={width}
        onChange={(value) => setWidth(value)}
        step={10}
        min={160}
        max={400}
      />
      <Menu
        style={{ width: width, height: 'calc(100% - 28px)' }}
        hasCollapseButton
        defaultOpenKeys={['0']}
        defaultSelectedKeys={['0_1']}
      >
        <SubMenu
          key="0"
          title={
            <>
              <IconApps /> Navigation 1
            </>
          }
        >
          <MenuItem key="0_0">Menu 1</MenuItem>
          <MenuItem key="0_1">Menu 2</MenuItem>
          <MenuItem key="0_2" disabled>
            Menu 3
          </MenuItem>
        </SubMenu>
        <SubMenu
          key="1"
          title={
            <>
              <IconBug /> Navigation 2
            </>
          }
        >
          <MenuItem key="1_0">Menu 1</MenuItem>
          <MenuItem key="1_1">Menu 2</MenuItem>
          <MenuItem key="1_2">Menu 3</MenuItem>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <>
              <IconBulb /> Navigation 3
            </>
          }
        >
          <MenuItem key="2_0">Menu 1</MenuItem>
          <MenuItem key="2_1">Menu 2</MenuItem>
          <MenuItem key="2_2">Menu 3</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default App;
