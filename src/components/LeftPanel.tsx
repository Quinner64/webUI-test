import React from 'react';
import { Menu } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const LeftPanel: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Menu mode="horizontal" theme="light">
        <Menu.Item key="menu-item-1">Menu Item 1</Menu.Item>
        <Menu.Item key="menu-item-2">Menu Item 2</Menu.Item>
      </Menu>
      <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
        <AgGridReact
          rowData={[{ make: 'Toyota', model: 'Celica', price: 35000 }]}
          columnDefs={[{ field: 'make' }, { field: 'model' }, { field: 'price' }]}
        />
      </div>
    </div>
  );
};

export default LeftPanel;

