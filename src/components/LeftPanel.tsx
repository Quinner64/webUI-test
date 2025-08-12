import React from 'react';
import Panel from './Panel';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const LeftPanel: React.FC = () => {
  return (
    <Panel title="Left Panel">
      <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
        <AgGridReact
          rowData={[{ make: 'Toyota', model: 'Celica', price: 35000 }]}
          columnDefs={[{ field: 'make' }, { field: 'model' }, { field: 'price' }]}
        />
      </div>
    </Panel>
  );
};
