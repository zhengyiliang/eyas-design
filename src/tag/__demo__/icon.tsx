import React from 'react';
import { Tag, Space } from 'eyas-ui';
import { IconGitlab, IconTwitter, IconGithub, IconFacebook } from '@eyas-design/icons';

const App = () => {
  return (
    <Space size="large">
      <Tag color="gray" icon={<IconGithub />}>
        Github
      </Tag>
      <Tag color="orangered" icon={<IconGitlab />}>
        Gitlab
      </Tag>
      <Tag color="blue" icon={<IconTwitter />}>
        Twitter
      </Tag>
      <Tag color="eyasblue" icon={<IconFacebook />}>
        Facebook
      </Tag>
    </Space>
  );
};

export default App;
