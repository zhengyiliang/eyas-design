import React from 'react';
import { Popover, Button } from 'eyas-ui';
const style = {
  margin: 0,
};

const App = () => {
  return (
    <Popover
      title="Title"
      content={
        <span>
          <p style={style}>Here is the text content</p>
          <p style={style}>Here is the text content</p>
        </span>
      }
    >
      <Button type="primary">Hover</Button>
    </Popover>
  );
};

export default App;
