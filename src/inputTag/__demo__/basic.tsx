import React from 'react';
import { InputTag, Space } from 'eyas-ui';

const App = () => {
  return (
    <div>
      <Space style={{ marginBottom: 20 }}>
        <InputTag allowClear placeholder="Input and press Enter" style={{ width: 350 }} />
        <InputTag allowClear placeholder="Disabled" disabled style={{ width: 350 }} />
      </Space>
      <Space>
        <InputTag allowClear placeholder="Readonly" readOnly style={{ width: 350 }} />
        <InputTag allowClear placeholder="Error" error style={{ width: 350 }} />
      </Space>
    </div>
  );
};

export default App;
