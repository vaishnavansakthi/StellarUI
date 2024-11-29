import { render, screen, fireEvent } from '@testing-library/react';
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

  it('calls the onClick function when the button is clicked', () => {
    const logSpy = jest.spyOn(console, 'log'); // Spy on console.log
    render(<App username="John" />);

    const button = screen.getByText('Hello');
    fireEvent.click(button); // Simulate button click

    // Check if the console.log was called with 'clicked'
    expect(logSpy).toHaveBeenCalledWith('clicked');
    logSpy.mockRestore(); // Clean up spy
  });
});
