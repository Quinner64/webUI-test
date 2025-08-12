import React from 'react';
import { Layout } from 'antd';
import TopPanel from './components/TopPanel';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

const { Header, Content } = Layout;

const Dashboard: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0 }}>
        <TopPanel />
      </Header>
      <Content>
        <Layout>
          <Layout.Sider width="50%" style={{ background: '#fff', borderRight: '1px solid #f0f0f0' }}>
            <LeftPanel />
          </Layout.Sider>
          <Layout.Content style={{ background: '#fff' }}>
            <RightPanel />
          </Layout.Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default Dashboard;


