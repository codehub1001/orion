import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const circleVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <motion.div
        className="w-12 h-12 rounded-full bg-red-600 mx-2"
        variants={circleVariants}
        animate="animate"
      />
      <motion.div
        className="w-12 h-12 rounded-full bg-red-600 mx-2"
        variants={circleVariants}
        animate="animate"
        transition={{ delay: 0.2, duration: 1.2, repeat: Infinity }}
      />
      <motion.div
        className="w-12 h-12 rounded-full bg-red-600 mx-2"
        variants={circleVariants}
        animate="animate"
        transition={{ delay: 0.4, duration: 1.2, repeat: Infinity }}
      />
    </div>
  );
};

export default Loader;
