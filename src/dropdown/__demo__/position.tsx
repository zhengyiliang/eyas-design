import React from 'react';
import { Dropdown, Menu, Button, Space } from 'eyas-ui';
import './index.less';

const positions = ['bl', 'bottom', 'br', 'tl', 'top', 'tr'];
const descriptions = ['BottomLeft', 'BottomCenter', 'BottomRight', 'TopLeft', 'Top', 'TopRight'];

const App = () => {
  return (
    <Space size="large" className="dropdown-demo">
      {positions.map((position, index) => (
        <Dropdown
          key={index}
          position={position}
          droplist={
            <Menu>
              <Menu.Item key="1">Menu Item 1</Menu.Item>
              <Menu.Item key="2">Menu Item 2</Menu.Item>
              <Menu.Item key="3">Menu Item 3</Menu.Item>
            </Menu>
          }
        >
          <Button type="secondary">{descriptions[index]}</Button>
        </Dropdown>
      ))}
    </Space>
  );
};

export default App;
