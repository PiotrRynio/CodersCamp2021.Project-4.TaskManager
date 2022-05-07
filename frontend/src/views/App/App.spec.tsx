import React from 'react';
import { render } from 'test-utils';
import { App } from './App';
import { renderHook, act } from '@testing-library/react-hooks';
import { usePageTitle } from 'providers/PageTitleProvider';
import { PageTitleProvider } from 'providers/PageTitleProvider';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });

  it('should display page title', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <PageTitleProvider>{children}</PageTitleProvider>
    );
    const view = renderHook(() => usePageTitle(), { wrapper });

    act(() => {
      view.result.current.setTitle('Home');
    });
    expect(view.result.current.title).toBe('Home');
  });
});
