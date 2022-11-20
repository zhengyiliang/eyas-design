import React from 'react';
import { Select, Typography } from 'eyas-ui';
const Option = Select.Option;
const options = new Array(10000).fill(null).map((value, index) => `Item ${index}`);

const App = () => {
  return (
    <>
      <Typography.Title heading={6}>10000 items</Typography.Title>
      <Select
        mode="multiple"
        allowCreate
        placeholder="Select a tag"
        allowClear
        style={{ width: 345 }}
      >
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default App;
