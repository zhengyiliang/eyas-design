import React, { useState } from 'react';
import { Select } from 'eyas-ui';
import './index.less';

const Option = Select.Option;
const OPTIONS = new Array(10).fill(null).map((_, index) => `Option ${index + 1}`);

function App() {
  const [options, setOptions] = useState(OPTIONS);
  return (
    <>
      <Select
        placeholder="Please select"
        style={{ width: 345, marginRight: 20 }}
        mode="multiple"
        onChange={(value) => setOptions(OPTIONS.filter((option) => value.indexOf(option) === -1))}
      >
        {options.map((option, index) => (
          <Option wrapperClassName="select-demo-hide-option-checkbox" key={index} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </>
  );
}

export default App;
