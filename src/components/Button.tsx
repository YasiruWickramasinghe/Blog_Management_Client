import React from 'react';
import ButtonProps from '../types/buttonTypes';

const Button: React.FC<ButtonProps> = ({ onClick, children, buttonStyle }) => {
  return (
    <>
      <button className={buttonStyle} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
