import { motion } from 'framer-motion';
import React from 'react';
import { X } from 'react-feather';
export default function ErrorSnackbar({ message, closeFunction }) {
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

  const keys = (typeof message == 'object') ? Object.keys(message) : null

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exited"
      className={`bg-danger my-3 p-2 d-flex align-items-start justify-content-between`}
    >
      
      {(typeof message == 'object') ?
        keys.map((row, keyCont) => 
          (typeof message[row] != 'array') ?
            <div className='my-2' key={`error-container-${keyCont}`}>
              {/* <h4 className="text-uppercase mb-1 text-white">{row}</h4> */}
              {message[row].map((line, rowKey) => <h5 key={`error-list-${rowKey}`} className="mr-3 text-white">{line}</h5>)}
            </div>
          :
            <h5 className="mr-3 text-white">- {row}</h5>
        )
        :
        <h5 className="mr-3 text-white">- {message}</h5>
      }
      <button onClick={closeFunction} className="p-0 bg-transparent border-0 text-white">
        <X className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
