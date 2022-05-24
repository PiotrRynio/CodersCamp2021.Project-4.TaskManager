import { ReactNode } from 'react';
import { PageTitleProvider } from './PageTitleProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets';
import { GlobalStyles } from 'assets';
import { store } from 'states/store';
import { Provider as ReduxToolkitProvider } from 'react-redux';
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.css';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxToolkitProvider store={store}>
      <PageTitleProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles theme={theme} />
          {children}
        </ThemeProvider>
      </PageTitleProvider>
    </ReduxToolkitProvider>
  );
};
