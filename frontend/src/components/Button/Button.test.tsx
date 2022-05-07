import React from 'react';
import { AppProviders } from '../../providers/AppProviders';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button with text "Hello"', () => {
  render(
    <AppProviders>
      <Button htmlType="button">Hello</Button>
    </AppProviders>,
  );
  const button = screen.getByRole('button', { name: /hello/i });
  expect(button).toBeInTheDocument();
});
