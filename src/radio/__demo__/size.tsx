import React from 'react';
import { Radio } from 'eyas-ui';

const RadioGroup = Radio.Group;
const options = [
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
    disabled: true,
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
];

const App = () => {
  return (
    <div>
      <RadioGroup
        options={options}
        size="mini"
        type="button"
        defaultValue="Beijing"
        style={{ marginBottom: 20 }}
      />
      <br />
      <RadioGroup
        options={options}
        size="small"
        type="button"
        defaultValue="Beijing"
        style={{ marginBottom: 20 }}
      />
      <br />
      <RadioGroup
        options={options}
        size="default"
        type="button"
        defaultValue="Beijing"
        style={{ marginBottom: 20 }}
      />
      <br />
      <RadioGroup
        options={options}
        size="large"
        type="button"
        defaultValue="Beijing"
        style={{ marginBottom: 20 }}
      />
    </div>
  );
};

export default App;
