import { ReactNode } from 'react';
import { PageTitleProvider } from './PageTitleProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets';
import { GlobalStyles } from 'assets';
import 'antd/dist/antd.min.css';
import 'antd/dist/antd.css';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <PageTitleProvider>{children}</PageTitleProvider>
    </ThemeProvider>
  );
};
