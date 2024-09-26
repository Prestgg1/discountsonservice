"use client"
import {motion} from "framer-motion"
import React,{ReactNode} from 'react';

export default function LeftScale({children}:{children:React.ReactNode}){
    return(
        <motion.div
        initial={{ opacity: 0,scale:0.5,x:-100 }}
        whileInView={{opacity:1,scale:1,x:0}}
        viewport={{ once:true }}
        transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    )
}
