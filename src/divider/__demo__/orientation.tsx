import React from 'react';
import { Divider, Typography } from 'eyas-ui';
const { Paragraph } = Typography;
const orientations = ['left', 'center', 'right'];

const App = () => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        width: 560,
        padding: 24,
        border: '30px solid #eee',
      }}
    >
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider orientation={orientations[0]}>Text</Divider>
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider orientation={orientations[1]}>Text</Divider>
      <Paragraph>A design is a plan or specification for the construction of an object.</Paragraph>
      <Divider orientation={orientations[2]}>Text</Divider>
    </div>
  );
};

export default App;
