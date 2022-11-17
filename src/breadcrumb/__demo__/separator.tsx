import React from 'react';
import { Breadcrumb, Space } from 'eyas-ui';
import { IconRight } from '@eyas-design/icons';
const BreadcrumbItem = Breadcrumb.Item;

const App = () => {
  return (
    <Space size={40}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator={<IconRight />}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator={<span>・</span>}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </Space>
  );
};

export default App;
