import React from 'react';
import { Menu } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const TopPanel: React.FC = () => {
  const handleAddPanel = () => {
    // Placeholder for add panel logic
    console.log('Add new panel');
  };

  return (
    <Menu mode="horizontal" theme="dark" style={{ width: '100%' }}>
      <Menu.Item key="add" icon={<PlusOutlined />} onClick={handleAddPanel}>
        Add Panel
      </Menu.Item>
    </Menu>
  );
};

export default TopPanel;

