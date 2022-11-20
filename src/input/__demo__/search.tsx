import React from 'react';
import { Input, Space } from 'eyas-ui';
const InputSearch = Input.Search;

const App = () => {
  return (
    <Space wrap>
      <InputSearch allowClear placeholder="Enter keyword to search" style={{ width: 350 }} />
      <InputSearch
        searchButton
        defaultValue="Search content"
        placeholder="Enter keyword to search"
        style={{ width: 350 }}
      />
      <InputSearch
        searchButton="Search"
        defaultValue="Search content"
        placeholder="Enter keyword to search"
        style={{ width: 350 }}
      />
    </Space>
  );
};

export default App;
