import React from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
    fade: { y: 0, x: 0 },
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
    rotateX: direction === 'up' || direction === 'down' ? 20 : 0,
    rotateY: direction === 'left' || direction === 'right' ? 20 : 0,
    scale: 0.95,
  };

  const animate = isInView
    ? {
        opacity: 1,
        y: 0,
        x: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
      }
    : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};
