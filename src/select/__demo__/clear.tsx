import React from 'react';
import { Select } from 'eyas-ui';
const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Disabled'];

const App = () => {
  return (
    <Select placeholder="Please select" style={{ width: 154 }} allowClear>
      {options.map((option, index) => (
        <Option key={option} disabled={index === 3} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default App;
