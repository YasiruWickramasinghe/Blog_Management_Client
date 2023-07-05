import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  buttonStyle?: string;
}

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
