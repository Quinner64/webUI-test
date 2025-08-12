import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import TopPanel from './components/TopPanel';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Panel from './components/Panel';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const GridLayout = WidthProvider(RGL);

const Dashboard: React.FC = () => {
  const layout = [
    { i: 'top', x: 0, y: 0, w: 12, h: 2 },
    { i: 'left', x: 0, y: 2, w: 6, h: 5 },
    { i: 'right', x: 6, y: 2, w: 6, h: 5 },
  ];

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      isDraggable
      isResizable
    >
      <div key="top" style={{ border: '1px solid #ccc' }}>
        <Panel title="Top Panel">
          <TopPanel />
        </Panel>
      </div>
      <div key="left" style={{ border: '1px solid #ccc' }}>
        <LeftPanel />
      </div>
      <div key="right" style={{ border: '1px solid #ccc' }}>
        <RightPanel />
      </div>
    </GridLayout>
  );
};

export default Dashboard;

