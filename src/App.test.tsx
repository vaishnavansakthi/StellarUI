import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders with the correct username', () => {
    render(<App username="John Doe" />);
    // Check if the username is rendered in the header
    expect(screen.getByText('Stellar UI John Doe')).toBeInTheDocument();
  });

  it('renders without a username', () => {
    render(<App />);
    // Check if the header is rendered without a username
    expect(screen.getByText('Stellar UI')).toBeInTheDocument();
  });
});
