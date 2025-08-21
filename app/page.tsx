"use client"
import Image from 'next/image';
import { useState } from 'react';
import NeonFrame from './components/neonFrame';
import {motion} from 'motion/react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaReact,FaLongArrowAltRight } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiGit } from "react-icons/si";

export default function App() {
  
  interface techStack {
    name: string;
    icon: React.ReactNode;
  }
  const [imageLoaded,setimageLoaded]=useState(false)
  
  const techStack: techStack[] = [
    {icon:<SiTypescript className='size-6 mt-0.5 bold'/>, name:"TypeScript"}, {icon:<FaReact className='size-6 mt-0.5 bold'/>, name:"React"}, {icon:<SiNextdotjs className='size-6 mt-0.5 bold'/>, name:'Next.js'}, {icon:<SiTailwindcss className='size-6 mt-0.5 bold'/>, name:'Tailwind CSS'}, 
    {icon:<SiNodedotjs className='size-6 mt-0.5 bold'/>, name:'Node.js'}, {icon:<SiGit className='size-6 mt-0.5 bold'/>, name:'Git'}
  ];

  return(
    <>
    <Image 
    src="/Images/profilePic.jpg" 
    alt="Profile Photo" 
    width={0} 
    height={0} 
    onLoad={() => setimageLoaded(true)}
    className={`${imageLoaded ? 'hidden' : 'absolute'}`}
    />
        { imageLoaded && (
          <>
          <NeonFrame>
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale : 1.05 }} 
              whileTap={{ scale: 1 }} 
              className={"w-102 h-102 rounded-2xl overflow-hidden border-4 border-blue-500 mx-auto"}>
                 {/* Round Profile Photo */}
                <Image 
                  src="/Images/profilePic.jpg" 
                  alt="Profile Photo" 
                  width={256} 
                  height={512} 
                  onLoad={() => setimageLoaded(true)}
                  className="object-cover w-full h-full"
                  />
              </motion.div>
              <div className="hidden md:block w-1 h-96 bg-gray-700 rounded-full"></div>
            <div className='flex flex-col items-center'>
              {/* Name and Job Title */}
              <motion.h1 whileHover={{scale:1.1}} className={"text-3xl md:text-5xl font-bold my-2 bg-gradient-to-r from-[#8a2be2] to-[#00ff88] bg-clip-text text-transparent"}>Lyes Lattari</motion.h1>
              <motion.h2 whileHover={{scale:1.1}} className={"text-lg md:text-xl text-gray-600 my-4 text-black"}><b>ReactJS NextJS</b> Front-End developper</motion.h2>
              {/* Contact Links */}
            <div className="flex justify-center space-x-4 mb-6">
              <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} href="mailto:lyes.lattari@gmail.com" className="text-blue-500 hover:text-blue-700">
                <FaEnvelope size={24} />
              </motion.a>
              <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} href="https://wa.me/213542858609" className="text-green-500 hover:text-green-700">
                <FaWhatsapp size={24} />
              </motion.a>
              <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} href="https://github.com/LnZ-11" className="text-gray-800 hover:text-gray-600">
                <FaGithub size={24} />
              </motion.a>
              <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} href="https://linkedin.com/in/lyes-lattari" className="text-blue-700 hover:text-blue-900">
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          {/* About Me */}
          <div className="max-w-xl mx-auto mb-6 font-[Sora] text-lg md:text-xl text-gray-200 text-justify">
            <h1 className='text-2xl md:text-6xl font-bold'>Dream it</h1>
            <h1 className='text-2xl md:text-6xl font-bold bg-gradient-to-r from-[#00ff88] to-[#8a2be2] bg-clip-text text-transparent'>I code it </h1>
            <h1 className='text-2xl md:text-6xl font-bold'>It&apos;s that simple !</h1>
          </div>
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {techStack.map((tech, index) => (
              <motion.div 
              whileHover={{scale:1.1}} 
              key={index} 
              className={"bg-[#A5A5A5FF] text-[#000000FF] px-2 md:px-3 py-1 rounded-full text-base md:text-xl flex flex-row gap-1 text-center justify-center"}
              >
                {tech.icon}
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
        </NeonFrame>
        </>
        )}
      </>
  )}
