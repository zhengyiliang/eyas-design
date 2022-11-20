import React from 'react';
import { Select } from 'eyas-ui';
const Option = Select.Option;
const groups = [
  ['Black tea latte', 'Green tea latte'],
  ['Vanilla Frappuccino', 'Matcha Frappuccino'],
  ['Chocolate milk', 'Banana milk'],
];

const App = () => {
  return (
    <div>
      <Select showSearch allowClear placeholder="Select drink" style={{ width: 154 }}>
        {groups.map((options, index) => {
          return (
            <Select.OptGroup label={`Group-${index}`} key={index}>
              {options.map((option, index) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select.OptGroup>
          );
        })}
      </Select>
    </div>
  );
};

export default App;
