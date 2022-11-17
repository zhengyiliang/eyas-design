import { useState } from 'react';
import { InputNumber } from 'eyas-ui';

function App() {
  const [value, setValue] = useState(12000);
  return (
    <InputNumber
      style={{ width: 160, margin: '10px 24px 10px 0' }}
      min={0}
      max={1000000000}
      step={1000}
      value={value}
      onChange={setValue}
      prefix="¥"
      formatter={(value) => `${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')}
      parser={(value) => value.replace(/,/g, '')}
    />
  );
}

export default App;
