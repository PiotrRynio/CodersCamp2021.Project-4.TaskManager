import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { AppProviders } from 'providers/AppProviders';
import { PageTitleProvider } from 'providers/PageTitleProvider';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MemoryRouter>
      <AppProviders>
        <PageTitleProvider>{children}</PageTitleProvider>
      </AppProviders>
    </MemoryRouter>
  );
};

const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
