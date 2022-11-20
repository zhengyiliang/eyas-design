import React from 'react';
import { Select, Space } from 'eyas-ui';
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu', 'Wuhan'];

const App = () => {
  return (
    <Space size="large">
      <Select
        options={options}
        defaultValue="Beijing"
        placeholder="Select city"
        style={{ width: 154 }}
      />

      <Select
        mode="multiple"
        options={options}
        defaultValue={['Beijing', 'Shanghai']}
        placeholder="Please select"
        style={{
          width: 345,
        }}
      />
    </Space>
  );
};

export default App;
