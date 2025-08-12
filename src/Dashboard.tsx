import React from 'react';
import { Layout } from 'antd';
import TopPanel from './components/TopPanel';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

const { Header, Content, Sider } = Layout;

const Dashboard: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0 }}>
        <TopPanel />
      </Header>
      <Layout>
        <Sider width="50%" style={{ padding: '10px' }}>
          <LeftPanel />
        </Sider>
        <Content style={{ padding: '10px' }}>
          <RightPanel />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

