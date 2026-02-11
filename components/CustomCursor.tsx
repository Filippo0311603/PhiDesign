import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  // Nascondi su dispositivi touch
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-[10001] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <div className="relative w-8 h-8">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border-2 border-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Inner dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full" />
        </div>
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="fixed pointer-events-none z-[10000] w-32 h-32 rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};
