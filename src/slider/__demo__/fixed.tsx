import React from 'react';
import { Slider } from 'eyas-ui';

function App() {
  return (
    <Slider
      style={{ width: 200 }}
      max={10}
      range={{
        draggableBar: true,
      }}
      defaultValue={[3, 6]}
    />
  );
}

export default App;
