import React from 'react';
import { Dropdown, Menu, Grid } from 'eyas-ui';

function App() {
  return (
    <Dropdown
      trigger="contextMenu"
      position="bl"
      droplist={
        <Menu>
          <Menu.Item key="1">Haidian</Menu.Item>
          <Menu.Item key="2">Chaoyang</Menu.Item>
          <Menu.Item key="3">Daxing</Menu.Item>
        </Menu>
      }
    >
      <Grid.Row
        align="center"
        justify="center"
        style={{
          width: 320,
          height: 160,
          backgroundColor: 'var(--color-fill-2)',
          color: 'var(--color-text-1)',
        }}
      >
        <span>Right-click</span>
      </Grid.Row>
    </Dropdown>
  );
}

export default App;
