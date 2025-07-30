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
        animate={{ scale: 1 }} 
        className={"w-full lg:w-4/5 flex flex-col lg:flex-row items-center justify-center gap-4 lg:h-[90vh] rounded-2xl"}
        >
            <div className="w-full lg:w-5/6 mx-auto px-4 lg:px-8 ">
                <div className="backdrop-blur-lg bg-black/40 p-12 rounded-2xl lg:[box-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] lg:border lg:border-gray-200 lg:h-[65vh]">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-around text-center items-center">
                        {children}
                    </div>
                </div>
                </div>
        </motion.div>
    </div>
    )
}