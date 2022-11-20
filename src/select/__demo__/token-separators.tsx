import React from 'react';
import { Select } from 'eyas-ui';
const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Wuhan'];

const App = () => {
  return (
    <Select
      mode="multiple"
      placeholder="Please select"
      tokenSeparators={[',', '|', '/']}
      allowCreate
      allowClear
      style={{ width: 345 }}
    >
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default App;
