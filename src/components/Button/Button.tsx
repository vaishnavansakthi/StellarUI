import React from 'react';
import { ButtonProps } from '../../interface/Button';
import './Button.scss';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, variant = 'text' }) => {
  return (
    <button
      className={`button ${`button-${variant}`} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
