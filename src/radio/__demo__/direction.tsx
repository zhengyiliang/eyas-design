import React from 'react';
import { Radio } from 'eyas-ui';

const RadioGroup = Radio.Group;

const App = () => {
  return (
    <div>
      <RadioGroup direction="vertical" defaultValue="a">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio disabled value="d">
          D
        </Radio>
      </RadioGroup>
    </div>
  );
};

export default App;
