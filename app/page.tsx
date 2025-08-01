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
          <motion.div
            viewport={{ once: true }}
            initial={{scale:0}} 
            whileInView={{scale:1}} 
            className='w-11/12 md:w-4/5 flex flex-col md:flex-row gap-4 backdrop-blur-lg bg-black/40 p-12 rounded-2xl'
          >
            <div className='flex flex-col gap-4 md:w-3/5 '>
            <h2 className='text-center text-6xl font-bold bg-gradient-to-bl from-purple-700 from-0% via-rose-500 via-25% to-blue-900 to-100% bg-clip-text text-transparent'>who am I ?</h2>
            <p className='text-3xl text-justify'>hi, im lyes  a frontend developer who brings engineering precision to creative web experiences.
                  with a background in automation and mechanical engineering, i approach development with a problem-solver mindset and a sharp eye for detail. my goal? building clean, responsive interfaces that are as intuitive as they are engaging.
                  im always exploring fresh technologies, bold ideas, and smarter ways to connect design with functionality. outside the dev world, i recharge through music  especially the electric guitar, where complexity becomes rhythm and flow becomes expression. for me, its another way to stay creative, curious, and in sync with the world.
            </p>
            </div>
            <div className='flex md:w-2/5 justify-center items-center '>
            <div className="hidden md:block w-1 h-96 bg-gray-700 rounded-full mr-24"></div>
              <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} href="/projects">
                <div className='flex md:flex-row flex-col items-center gap-2 text-center border border-white rounded-2xl p-4 '>
                  <FaLongArrowAltRight/>
                  <p className='underline text-xl'>Check my projects ! </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
          <motion.a whileHover={{scale:1.1}} whileTap={{scale:0.95}} href="/contact">
            <div className='items-center gap-2 text-center rounded-2xl p-4 backdrop-blur-lg bg-black/40 rounded-2xl md:[box-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] md:border md:border-gray-200 '>
              <p className='text-5xl font-bold bg-gradient-to-r from-[#00ff88] to-[#8a2be2] bg-clip-text text-transparent'>
                Let&apos;s work together !
              </p>
            </div>
          </motion.a>
          <div
            className={'w-11/12 md:w-4/5 flex flex-col md:flex-row gap-12'}>
            <div className='w-full md:w-3/5 flex flex-col m-auto content-center text-center'>
            <motion.img viewport={{ once: true }} whileInView={{rotate:180,scale:1}} initial={{scale:0}} whileHover={{scale:1.1,rotate:200}} whileTap={{scale:0.95,rotate:180}} src="/Images/reactLogo.svg" alt="React Logo" width={64} height={64} className="w-1/5 h-1/5 m-auto"/>
            </div>
            <div className='w-full md:w-2/5 text-lg flex flex-col m-auto content-center text-justify'>
              <p className='text-2xl'>
                React is one of the most popular javascript libraries for building dynamic and modern user interfaces.
                Its power lies in its flexibility, component-based structure, and ability to create fast, interactive experiences across web applications. whether its a single-page app or a complex ui, react makes development smooth, scalable, and fun to work with.
              </p>
            </div>  
          </div>
        </>
        )}
      </>
  )}
