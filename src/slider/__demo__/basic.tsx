import React, { useState } from 'react';
import { Slider } from 'eyas-ui';

function App() {
  const [value, setValue] = useState(30);
  return <Slider value={value} onChange={setValue} style={{ width: 200 }} />;
}

export default App;
