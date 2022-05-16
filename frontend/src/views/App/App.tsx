import { AppHeader } from 'components/AppHeader/AppHeader';
import { AppRoutes } from 'routes/AppRoutes';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Layout } from 'antd';
import { Counter } from '../../components/Counter/Counter';

import { AppContent, AppFooter } from './App.styled';

const { Sider } = Layout;

export const App = () => {
  const { title } = usePageTitle();
  return (
    <Layout>
      <AppHeader pageTitle={title} />
      <Layout>
        <Sider />
        <AppContent>
          <Counter />
          <AppRoutes />
        </AppContent>
      </Layout>
      <AppFooter />
    </Layout>
  );
};
