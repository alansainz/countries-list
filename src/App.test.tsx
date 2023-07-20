import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('APP', () => {
  test('App is rendered', () => {
    render(<App />);
    const heading = screen.getByText(/Where in the world?/i);
    expect(heading).toBeInTheDocument();
  });
});
