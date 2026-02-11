import React from 'react';
import { motion } from 'framer-motion';

interface Text3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glowColor?: string;
}

export const Text3D: React.FC<Text3DProps> = ({
  children,
  className = '',
  depth = 3,
  glowColor = 'rgba(6, 182, 212, 0.5)',
}) => {
  const layers = Array.from({ length: depth }, (_, i) => i);

  return (
    <div className={`relative ${className}`} style={{ transformStyle: 'preserve-3d' }}>
      {layers.map((layer) => (
        <motion.div
          key={layer}
          className="absolute inset-0"
          style={{
            transform: `translateZ(-${layer * 2}px)`,
            opacity: 1 - layer * 0.2,
            color: layer === 0 ? 'inherit' : 'rgba(6, 182, 212, 0.3)',
            textShadow: layer === 0 ? `0 0 20px ${glowColor}, 0 0 40px ${glowColor}` : 'none',
          }}
          initial={{ z: -layer * 2 }}
          animate={{ z: -layer * 2 }}
        >
          {children}
        </motion.div>
      ))}
      <motion.div
        className="relative"
        style={{ zIndex: 10 }}
        whileHover={{
          scale: 1.02,
          textShadow: `0 0 30px ${glowColor}, 0 0 60px ${glowColor}`,
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
