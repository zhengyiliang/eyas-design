import React from 'react';
import { Breadcrumb, Space } from 'eyas-ui';
import { IconHome } from '@eyas-design/icons';

const BreadcrumbItem = Breadcrumb.Item;

const App = () => {
  return (
    <Space size={40}>
      <Breadcrumb>
        <BreadcrumbItem>
          <IconHome />
        </BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb style={{ fontSize: 12 }}>
        <BreadcrumbItem>
          <IconHome />
        </BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </Space>
  );
};

export default App;
