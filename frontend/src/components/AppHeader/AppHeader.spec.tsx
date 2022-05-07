import React from 'react';
import { render } from 'test-utils';
import { screen } from '@testing-library/react';
import { AppHeader } from './AppHeader';

describe('AppHeader', () => {
  it('displays page title', () => {
    render(<AppHeader pageTitle="Home" />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
