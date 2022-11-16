import React from 'react';
import { Button, Space } from 'eyas-ui';
import {
  IconDown,
  IconMore,
  IconStar,
  IconRight,
  IconLeft,
  IconMessage,
  IconSettings,
} from '@eyas-design/icons';
const ButtonGroup = Button.Group;

const App = () => {
  return (
    <Space size="large" direction="vertical">
      <Space size="large">
        <ButtonGroup>
          <Button>Publish</Button>
          <Button icon={<IconDown />} />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="secondary">Publish</Button>
          <Button type="secondary" icon={<IconMore />} />
        </ButtonGroup>
      </Space>
      <ButtonGroup>
        <Button type="primary">Publish</Button>
        <Button type="primary" icon={<IconDown />} />
      </ButtonGroup>
      <Space size="large">
        <ButtonGroup>
          <Button type="primary" icon={<IconLeft />} shape="round" style={{ padding: '0 8px' }}>
            Prev
          </Button>
          <Button type="primary" shape="round" style={{ padding: '0 8px' }}>
            Next &nbsp;
            <IconRight />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button type="primary" icon={<IconStar />} />
          <Button type="primary" icon={<IconMessage />} />
          <Button type="primary" icon={<IconSettings />} />
        </ButtonGroup>
        <ButtonGroup>
          <Button type="primary" icon={<IconStar />}>
            Favorite
          </Button>
          <Button type="primary" icon={<IconSettings />}>
            Setting
          </Button>
        </ButtonGroup>
      </Space>
    </Space>
  );
};

export default App;
