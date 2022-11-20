import React from 'react';
import { Checkbox, Button, Space } from 'eyas-ui';

function App() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <Space size={40}>
        <Checkbox checked={checked}>Checkbox</Checkbox>
        <Checkbox checked={checked} disabled>
          disabled Checkbox
        </Checkbox>
      </Space>
      <div style={{ marginTop: 30 }}>
        <Button
          type="primary"
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? 'unCheck' : 'Check'}
        </Button>
      </div>
    </div>
  );
}

export default App;
