// src/components/Button/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../../components';

describe('Button Component', () => {
  it('renders with the correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('fires the onClick event when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);

    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire the onClick event when disabled', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} disabled />);

    const button = screen.getByText('Click Me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('applies the primary variant class by default', () => {
    render(<Button label="Primary Button" onClick={() => {}} />);
    const button = screen.getByText('Primary Button');
    expect(button).toHaveClass('button button-text');
  });

  it('applies the disabled class when disabled', () => {
    render(<Button label="Disabled Button" onClick={() => {}} disabled />);
    const button = screen.getByText('Disabled Button');
    expect(button).toHaveClass('button disabled');
    expect(button).toBeDisabled();
  });
});
