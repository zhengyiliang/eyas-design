import React from 'react';
import { InputTag, Tag } from 'eyas-ui';
const options = ['eyasblue', 'orange', 'lime'];

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
    <InputTag
      allowClear
      placeholder="Please input"
      defaultValue={options}
      renderTag={tagRender}
      style={{ maxWidth: 350 }}
    />
  );
};

export default App;
