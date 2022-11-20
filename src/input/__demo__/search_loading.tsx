import React from 'react';
import { Input, Space } from 'eyas-ui';
const InputSearch = Input.Search;

const App = () => {
  return (
    <Space wrap>
      <InputSearch loading placeholder="Enter keyword to search" style={{ width: 350 }} />
      <InputSearch
        searchButton
        loading
        defaultValue="Search content"
        placeholder="Enter keyword to search"
        style={{ width: 350 }}
      />
      <InputSearch
        searchButton="Search"
        loading
        defaultValue="Search content"
        placeholder="Enter keyword to search"
        style={{ width: 350 }}
      />
    </Space>
  );
};

export default App;
