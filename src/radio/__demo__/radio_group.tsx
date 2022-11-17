import React from 'react';
import { Radio } from 'eyas-ui';

const RadioGroup = Radio.Group;

const App = () => {
  return (
    <div>
      <RadioGroup defaultValue="a" style={{ marginBottom: 20 }}>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio disabled value="d">
          D
        </Radio>
      </RadioGroup>
      <br />
      <RadioGroup options={['A', 'B', 'C', 'D']} style={{ marginBottom: 20 }} />
      <br />
      <RadioGroup
        options={[
          {
            label: 'A',
            value: 'a',
          },
          {
            label: 'B',
            value: 'b',
          },
          {
            label: 'C',
            value: 'c',
          },
          {
            label: 'D',
            value: 'd',
            disabled: true,
          },
        ]}
      />
    </div>
  );
};

export default App;
