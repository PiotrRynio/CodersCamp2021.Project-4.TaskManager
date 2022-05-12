import { AppHeader } from 'components/AppHeader/AppHeader';
import { AppRoutes } from 'routes/AppRoutes';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Layout } from 'antd';
import { SidebarMenu } from 'components/SidebarMenu/SideBarMenu';

import { AppContent, AppFooter } from './App.styled';

const { Sider } = Layout;

export const App = () => {
  const { title } = usePageTitle();
  return (
    <Layout>
      <AppHeader pageTitle={title} />
      <Layout>
        <Sider>
          <SidebarMenu
            items={[
              { label: 'Priority tasks', href: '/', icon: 'ExclamationOutlined' },
              { label: 'Ungrouped', href: '/ungrouped', icon: 'BlockOutlined' },
              { label: 'Projects', href: '/projects', icon: 'ContainerOutlined' },
              { label: 'Statistic', href: '/statistics', icon: 'FundProjectionScreenOutlined' },
            ]}
          />
        </Sider>
        <AppContent>
          <AppRoutes />
        </AppContent>
      </Layout>
      <AppFooter />
    </Layout>
  );
};
