import React, { useState } from 'react';
import { Slider } from 'eyas-ui';

function App() {
  const [value, setValue] = useState([0, 50]);
  return (
    <div style={{ width: 200 }}>
      <Slider range value={value} onChange={setValue} />
    </div>
  );
}

export default App;
