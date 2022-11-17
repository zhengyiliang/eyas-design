import React from 'react';
import { Breadcrumb } from 'eyas-ui';

const BreadcrumbItem = Breadcrumb.Item;

const App = () => {
  return (
    <div>
      <Breadcrumb maxCount="3">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Sub Home</BreadcrumbItem>
        <BreadcrumbItem>All Channel</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default App;
