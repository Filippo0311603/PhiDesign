import React from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  effect?: 'fade' | 'slide' | 'zoom' | 'flip' | 'wipe';
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  children,
  className = '',
  effect = 'slide'
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  const effects = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
    slide: {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
    },
    zoom: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
    },
    flip: {
      initial: { opacity: 0, rotateX: -90 },
      animate: { opacity: 1, rotateX: 0 },
    },
    wipe: {
      initial: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
      animate: { opacity: 1, clipPath: 'inset(0 0% 0 0)' },
    },
  };

  const selectedEffect = effects[effect];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={selectedEffect.initial}
      animate={isInView ? selectedEffect.animate : selectedEffect.initial}
      transition={{
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
};
