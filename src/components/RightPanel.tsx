import React from 'react';
import { Menu, Input } from 'antd';

const RightPanel: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Menu mode="horizontal" theme="light">
        <Menu.Item key="menu-item-1">Menu Item 1</Menu.Item>
        <Menu.Item key="menu-item-2">Menu Item 2</Menu.Item>
      </Menu>
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, border: '1px solid #f0f0f0', padding: '10px', overflowY: 'auto' }}>
          AI Agent Chat
        </div>
        <Input.Search placeholder="Type your message..." enterButton="Send" style={{ marginTop: '10px' }} />
      </div>
    </div>
  );
};

export default RightPanel;

