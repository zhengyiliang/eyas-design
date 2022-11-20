import React from 'react';
import { Select, Space } from 'eyas-ui';
const Option = Select.Option;
const options = [];

for (let i = 10; i < 24; i++) {
  options.push(i.toString(36) + i);
}

function App() {
  return (
    <Space size="large">
      <Select allowCreate placeholder="Create an item" allowClear style={{ width: 345 }}>
        {options.map((option) => (
          <Option key={option} value={option} disabled={option === 'b11' ? true : false}>
            {option}
          </Option>
        ))}
      </Select>

      <Select
        allowCreate
        mode="multiple"
        placeholder="Create an item"
        defaultValue={['a10', 'b11']}
        allowClear
        style={{ width: 345 }}
      >
        {options.map((option) => (
          <Option key={option} value={option} disabled={option === 'b11' ? true : false}>
            {option}
          </Option>
        ))}
      </Select>
    </Space>
  );
}

export default App;
