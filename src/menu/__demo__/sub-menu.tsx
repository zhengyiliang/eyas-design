import React from 'react';
import { Menu } from 'eyas-ui';
import { IconApps, IconBug, IconBulb } from '@eyas-design/icons';
import './index.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const App = () => {
  return (
    <div className="menu-demo" style={{ height: 600 }}>
      <Menu
        style={{ width: 200, height: '100%' }}
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
          <MenuItemGroup key="2_0" title="Menu Group 1">
            <MenuItem key="2_0_0">Menu 1</MenuItem>
            <MenuItem key="2_0_1">Menu 2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup key="2_1" title="Menu Group 1">
            <MenuItem key="2_1_0">Menu 3</MenuItem>
            <MenuItem key="2_1_1">Menu 4</MenuItem>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default App;
