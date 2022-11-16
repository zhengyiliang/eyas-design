import React from 'react';
import { Tooltip, Button } from 'eyas-ui';

function getStyle(top, left) {
  return {
    position: 'absolute',
    width: 80,
    top,
    left,
  };
}

const App = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: 440,
        height: 280,
      }}
    >
      <Tooltip position="tl" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(0, 70)}>TL</Button>
      </Tooltip>
      <Tooltip position="top" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(0, 180)}>Top</Button>
      </Tooltip>
      <Tooltip position="tr" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(0, 290)}>TR</Button>
      </Tooltip>
      <Tooltip position="lt" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(60, 10)}>LT</Button>
      </Tooltip>
      <Tooltip position="left" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(120, 10)}>Left</Button>
      </Tooltip>
      <Tooltip position="lb" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(180, 10)}>LB</Button>
      </Tooltip>
      <Tooltip position="rt" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(60, 350)}>RT</Button>
      </Tooltip>
      <Tooltip position="right" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(120, 350)}>Right</Button>
      </Tooltip>
      <Tooltip position="rb" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(180, 350)}>RB</Button>
      </Tooltip>
      <Tooltip position="bl" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(240, 70)}>BL</Button>
      </Tooltip>
      <Tooltip position="bottom" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(240, 180)}>Bottom</Button>
      </Tooltip>
      <Tooltip position="br" trigger="hover" content="This is a Tooltip">
        <Button style={getStyle(240, 290)}>BR</Button>
      </Tooltip>
    </div>
  );
};

export default App;
