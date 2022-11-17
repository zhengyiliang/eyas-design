import React from 'react';
import { Slider } from 'eyas-ui';

function App() {
  function formatTooltip(val) {
    return <span>{val}%</span>;
  }

  return (
    <div style={{ width: 200 }}>
      <Slider defaultValue={20} formatTooltip={formatTooltip} />
    </div>
  );
}

export default App;
