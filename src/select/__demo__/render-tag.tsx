import React from 'react';
import { Select, Tag } from 'eyas-ui';
const options = [
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
  'magenta',
];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  return (
    <Tag
      color={options.indexOf(value) > -1 ? value : 'gray'}
      closable={closable}
      onClose={onClose}
      style={{ margin: '2px 6px 2px 0' }}
    >
      {label}
    </Tag>
  );
}

const App = () => {
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <Select
          style={{ maxWidth: 350, marginRight: 20 }}
          allowClear
          placeholder="Please Select"
          mode={'multiple'}
          defaultValue={options.slice(0, 2)}
          options={options}
          renderTag={tagRender}
        />
      </div>
    </div>
  );
};

export default App;
