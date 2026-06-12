'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { AnimationContainerProps } from '@/types';

const AnimationContainer = ({
  children,
  customClassName,
  customDelay = 0
}: AnimationContainerProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={customClassName}
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{
        duration: 0.5,
        delay: customDelay,
        ease: [0.32, 0.72, 0, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
