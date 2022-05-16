import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets';
import { GlobalStyles } from 'assets';
import { PageTitleProvider } from './PageTitleProvider';
import { store } from 'redux';
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
