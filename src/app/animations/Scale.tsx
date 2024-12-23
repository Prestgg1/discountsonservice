"use client"
import {motion} from "framer-motion"
import React from 'react';

export default function Scale({children}:{children:React.ReactNode}){
    return(
        <motion.div
        initial={{ opacity: 0,scale:0.5 }}
        whileInView={{opacity:1,scale:1}}
        viewport={{ once:true }}
        transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    )
}
