import React from 'react';
import Panel from './Panel';
import { Menu } from 'antd';

const TopPanel: React.FC = () => {
  return (
    <Panel title="Top Panel">
      <Menu mode="horizontal">
        <Menu.Item key="add">Add Panel</Menu.Item>
      </Menu>
    </Panel>
  );
};

export default TopPanel;
