"use client"
import {motion} from "framer-motion"
import React from 'react';

export default function FadeIn({children}:{children:React.ReactNode}){
    return(
        <motion.div
        initial={{ opacity: 0,y:20 }}
        whileInView={{opacity:1,y:0}}
        viewport={{ once:true }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col justify-center items-center"
        >
            {children}
        </motion.div>
    )
}
