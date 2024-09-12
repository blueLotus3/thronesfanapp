import React from 'react'
import { motion } from 'framer-motion'


// const animations = {
//     initial: {opacity: 0, x: 100},
//     animate: {opacity: 1, x: 0},
//     exit: {opacity: 0, x: -100},
// }



const Animated = () => {
    return (
        // <motion.div
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        //     transition={{ delay: 1.5, duration: 1.5 }}
        // >
        // </motion.div>
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8}}
        >
        </motion.div>
        
    )
}



export default Animated