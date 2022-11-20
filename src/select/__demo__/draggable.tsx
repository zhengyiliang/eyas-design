import React from 'react';
import { Select } from 'eyas-ui';
const Option = Select.Option;
const options = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'];

const App = () => {
  return (
    <Select
      placeholder="Please select"
      style={{ width: 345 }}
      mode="multiple"
      dragToSort
      defaultValue={options.slice(0, 3)}
    >
      {options.map((option, index) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default App;
