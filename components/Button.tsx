import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseStyle = "px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold inline-flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base whitespace-nowrap relative overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg hover:shadow-cyan-500/50",
    outline: "border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
  };

  return (
    <motion.button 
      type={type}
      className={`${baseStyle} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: disabled ? 1 : 1.1,
        y: disabled ? 0 : -5,
        boxShadow: variant === 'primary' && !disabled ? "0 20px 40px rgba(6, 182, 212, 0.6), 0 0 50px rgba(6, 182, 212, 0.4)" : undefined
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Shimmer effect per il variant primary */}
      {variant === 'primary' && !disabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'linear',
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};