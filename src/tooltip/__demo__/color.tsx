import React from 'react';
import { Tooltip, Button } from 'eyas-ui';
const colors = ['#3491FA', '#165DFF', '#722ED1'];

const App = () => {
  return (
    <div>
      {colors.map((color) => {
        return (
          <Tooltip key={color} color={color} content="tooltip text">
            <Button
              style={{
                marginRight: 20,
                background: color,
                color: '#fff',
              }}
            >
              {color}
            </Button>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default App;
