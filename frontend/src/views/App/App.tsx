import React from 'react';
import { TodoTaskList } from 'components/TodoTaskList';
import { ListMock } from 'mock-data/TodoTaskList/TodotaskListMock';
import { AppHeader } from 'components/AppHeader/AppHeader';
import { AppRoutes } from 'routes/AppRoutes';
import { usePageTitle } from 'providers/PageTitleProvider';
import { Layout } from 'antd';
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
          <AppRoutes />
        </AppContent>
        <TodoTaskList todoTasks={ListMock.todoTasks} />
      </Layout>
      <AppFooter />
    </Layout>
  );
};
