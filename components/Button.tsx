import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button'
}) => {
  const baseStyle = "px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg hover:shadow-cyan-500/50",
    outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
  };

  return (
    <button 
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};