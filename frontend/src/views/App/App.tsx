import { AppHeader } from 'components/AppHeader/AppHeader';
import { AppRoutes } from 'routes/AppRoutes';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Layout } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { AppContent, AppFooter } from './App.styled';

const { Sider } = Layout;

export const App = () => {
  const { title } = usePageTitle();
  return (
    <Layout>
      <AppHeader pageTitle={title} logo={<LogoutOutlined />} />
      <Layout>
        <Sider />
        <AppContent>
          <AppRoutes />
        </AppContent>
      </Layout>
      <AppFooter />
    </Layout>
  );
};
