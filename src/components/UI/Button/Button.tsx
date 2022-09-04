/* eslint-disable react/button-has-type */
import React from 'react';
import cl from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children, type, onClick, className,
}) => (
  <button className={[cl.btn, className].join(' ')} onClick={onClick} type={type || 'button'}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: undefined,
  type: 'button',
  className: '',
};

export default Button;
