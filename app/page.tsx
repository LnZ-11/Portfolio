"use client"
import Image from 'next/image';
import { useState } from 'react';
import NeonFrame from './components/neonFrame';
import {motion} from 'motion/react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiGit } from "react-icons/si";
import Hero from './components/hero';
// import ReverseHero from './components/reverseHero';
import Languages from './components/laguages';

export default function App() {

  function scrollTo(smallScreen:number,largeScreen:number){
    if(window.innerWidth < 768
    ){
      window.scrollTo({
        top: smallScreen,
        behavior: 'smooth',
      });
    }else{
      window.scrollTo({
        top: largeScreen,
        behavior: 'smooth',
      });
    }
  }
  interface techStack {
    name: string;
    icon: React.ReactNode;
  }
  const [imageLoaded,setimageLoaded]=useState(false)
  
  const techStack: techStack[] = [
    {icon:<SiTypescript className='size-6 mt-0.5 bold'/>, name:"TypeScript"}, {icon:<FaReact className='size-6 mt-0.5 bold'/>, name:"React"}, {icon:<SiNextdotjs className='size-6 mt-0.5 bold'/>, name:'Next.js'}, {icon:<SiTailwindcss className='size-6 mt-0.5 bold'/>, name:'Tailwind CSS'}, 
    {icon:<SiNodedotjs className='size-6 mt-0.5 bold'/>, name:'Node.js'}, {icon:<SiGit className='size-6 mt-0.5 bold'/>, name:'Git'}, {icon:<Image src="/Images/windsurf-black-wordmark.svg" alt="windsurf" width={120} height={20} className='h-8 mt-0.5 bold'/>, name:''}
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
            <div className='flex flex-col items-center gap-4 md:gap-6 justify-around text-center items-center'>
              {/* Name and Job Title */}
              <motion.h1 whileHover={{scale:1.1}} className={"text-3xl md:text-5xl font-bold title-gradient"}>Lyes Lattari</motion.h1>
              <motion.h2 whileHover={{scale:1.1}} className={"text-lg md:text-xl text-gray-600 text-black"}><b>ReactJS NextJS</b> Front-End developper</motion.h2>
              {/* Contact Links */}
            <div className="flex justify-center space-x-4 ">
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
          <div className="max-w-xl mx-auto font-[Sora] text-lg md:text-xl text-gray-200 text-justify">
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
          <div className='flex md:flex-row flex-col gap-4 md:gap-8 justify-around text-center items-center'>
            <a href="/contact"><button className='btn btn-success btn-lg btn-outline rounded-2xl p-2'>Lets Work Tohether !</button></a>
            <a href="/projects"><button className='btn btn-success btn-lg btn-outline rounded-2xl p-2'>Check my Projects</button></a>
            <button className='btn btn-success btn-lg rounded-2xl p-2' onClick={()=>{scrollTo(1300,1000)}}>My Bio</button>
          </div>
        </div>
        </NeonFrame>
        <div>
          <Hero/>
        </div>
        <div>
          <Languages/>
        </div>
        <div>
          {/* <ReverseHero/> */}
        </div>
        </>
        )}
      </>
  )}
