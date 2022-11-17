import React from 'react';
import { Dropdown, Menu, Tooltip, Space } from 'eyas-ui';
import { IconDown } from '@eyas-design/icons';
import './index.less';

const dropList = (
  <Menu>
    <Menu.Item key="1">Save now</Menu.Item>
    <Menu.Item key="2">Save and Publish</Menu.Item>
  </Menu>
);

const App = () => {
  return (
    <Space size="large" className="dropdown-demo">
      <Dropdown.Button type="secondary" droplist={dropList}>
        Publish
      </Dropdown.Button>
      <Dropdown.Button type="secondary" droplist={dropList} disabled>
        Disabled
      </Dropdown.Button>
      <Dropdown.Button type="primary" droplist={dropList} icon={<IconDown />}>
        Publish
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        droplist={dropList}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip content="Tooltip">{leftButton}</Tooltip>,
          React.cloneElement(rightButton, {
            loading: true,
          }),
        ]}
      >
        With Tooltip
      </Dropdown.Button>
    </Space>
  );
};

export default App;
