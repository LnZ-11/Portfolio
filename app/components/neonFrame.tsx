"use client"
import {motion} from 'motion/react';
import React from 'react';

interface NeonFrameProps {
    children?: React.ReactNode;
}

export default function NeonFrame({ children }: NeonFrameProps) {
    return(
    <div className='w-full flex flex-col gap-24 md:gap-35  items-center content-center pb-12 '>
        <motion.div 
        viewport={{ once: true }}
        initial={{ scale: 0 }} 
        whileInView={{ scale: 1 }} 
        className={"w-full md:w-4/5 flex flex-col md:flex-row items-center justify-center gap-4 md:h-[90vh] rounded-2xl"}
        >
            <div className="w-full md:w-5/6 mx-auto px-4 md:px-8 ">
                <div className="backdrop-blur-lg bg-black/40 p-12 rounded-2xl md:[box-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] md:border md:border-gray-200 md:h-[65vh]">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-around items-center">
                        {children}
                    </div>
                </div>
                </div>
        </motion.div>
    </div>
    )
}