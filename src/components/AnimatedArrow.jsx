import React from 'react';
import { motion } from 'framer-motion';

const AnimatedArrow = () => {
  const arrowVariants = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 10, opacity: 1, transition: { duration: 0.6, repeat: Infinity, repeatType: 'reverse' } },
  };

  return (
    <motion.div
      className="flex justify-center mt-8"
      initial="initial"
      animate="animate"
      variants={arrowVariants}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 5V19M12 19L6 13M12 19L18 13"
          stroke="#DAC5A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedArrow;