import { motion } from 'framer-motion';
import React from 'react';
import { X } from 'react-feather';
export default function SuccessSnackbar({ message }) {
  const containerVariants = {
    hidden: {
      x: '50%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exited: {
      x: '50%',
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exited"
      className={`bg-success my-3 p-2 d-flex align-items-start justify-content-between`}
    >
      <h5 className="text-white">{message}</h5>
    </motion.div>
  );
}
