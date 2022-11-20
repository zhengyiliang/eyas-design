import React from 'react';
import { Tag, Space } from 'eyas-ui';
const COLORS = [
  'red',
  'orangered',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'eyasblue',
  'purple',
  'pinkpurple',
  'magenta',
  'gray',
];

const App = () => {
  return (
    <Space wrap>
      <Tag bordered>Default</Tag>
      {COLORS.map((color, i) => (
        <Tag key={i} color={color} bordered>
          {color}
        </Tag>
      ))}
    </Space>
  );
};

export default App;
