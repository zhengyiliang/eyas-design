import React from 'react';
import { useState } from 'react';
import { Menu, Trigger } from 'eyas-ui';
import { IconMessage, IconClose, IconBug, IconBulb } from '@eyas-design/icons';
import './index.less';

const MenuItem = Menu.Item;

function App() {
  const renderMenu = () => {
    return (
      <Menu
        style={{ marginBottom: -4 }}
        mode="popButton"
        tooltipProps={{ position: 'left' }}
        hasCollapseButton
      >
        <MenuItem key="1">
          <IconBug />
          Bugs
        </MenuItem>
        <MenuItem key="2">
          <IconBulb />
          Ideas
        </MenuItem>
      </Menu>
    );
  };

  const [popupVisibleOne, setPopupVisibleOne] = useState(false);
  const [popupVisibleTwo, setPopupVisibleTwo] = useState(false);
  return (
    <div className="menu-demo menu-demo-button">
      <Trigger
        popup={renderMenu}
        trigger={['click', 'hover']}
        clickToClose
        position="top"
        onVisibleChange={(v) => setPopupVisibleOne(v)}
      >
        <div className={`button-trigger ${popupVisibleOne ? 'button-trigger-active' : ''}`}>
          {popupVisibleOne ? <IconClose /> : <IconMessage />}
        </div>
      </Trigger>

      <Trigger
        popup={renderMenu}
        trigger={['click', 'hover']}
        clickToClose
        position="top"
        onVisibleChange={(v) => setPopupVisibleTwo(v)}
      >
        <div className={`button-trigger ${popupVisibleTwo ? 'button-trigger-active' : ''}`}>
          {popupVisibleTwo ? <IconClose /> : <IconMessage />}
        </div>
      </Trigger>
    </div>
  );
}

export default App;
