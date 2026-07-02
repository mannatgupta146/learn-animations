import React from 'react'
import { motion } from 'motion/react'

const App = () => {
  return (
    <div>
      <motion.div 
        initial={{ x: 0, opacity: 0}}
        transition={{duration: 0.8, delay: 0.6, ease: "easeInOut", damping: 0.5}} 
        animate={{ x: 800, opacity: 1 }} 
        className="box">
      </motion.div>
    </div>
  )
}

export default App