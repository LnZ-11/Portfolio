"use client"
import Image from 'next/image';
import {motion} from 'motion/react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiGit } from "react-icons/si";

export default function App() {
  
  interface techStack {
    name: string;
    icon: React.ReactNode;
  }
  
  const techStack: techStack[] = [
    {icon:<SiTypescript className='size-6 mt-0.5 bold'/>, name:"TypeScript"}, {icon:<FaReact className='size-6 mt-0.5 bold'/>, name:"React"}, {icon:<SiNextdotjs className='size-6 mt-0.5 bold'/>, name:'Next.js'}, {icon:<SiTailwindcss className='size-6 mt-0.5 bold'/>, name:'Tailwind CSS'}, 
    {icon:<SiNodedotjs className='size-6 mt-0.5 bold'/>, name:'Node.js'}, {icon:<SiGit className='size-6 mt-0.5 bold'/>, name:'Git'}
  ];

  return(
    <div className='w-full flex flex-col gap-12 md:gap-64 items-center content-center pb-12 md:pb-64'>

  <motion.div 
      initial={{ scale: 0 }} 
      whileInView={{ scale: 1 }} 
      className={"w-11/12 md:w-4/5 text-center content-center md:h-[calc(80vh+120px)]"}
  >
        <div className="w-full md:w-5/6 mx-auto px-4 md:px-8">
          <div className="backdrop-blur-lg bg-black/40 p-12 rounded-2xl md:[box-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] md:border md:border-gray-200 ">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-around items-center">
              <motion.div 
              whileHover={{scale:1.13}} whileTap={{scale:0.95}} 
              className={"w-102 h-102 rounded-2xl overflow-hidden border-4 border-blue-500 mx-auto"}>
                 {/* Round Profile Photo */}
                <Image 
                  src="/Images/profilePic.jpg" 
                  alt="Profile Photo" 
                  width={256} 
                  height={512} 
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <div className="hidden md:block w-1 h-96 bg-gray-700 rounded-full"></div>
            <div className='flex flex-col items-center'>
              {/* Name and Job Title */}
              <motion.h1 whileHover={{scale:1.1}} className={"text-3xl md:text-5xl font-bold my-2 bg-gradient-to-r from-[#8a2be2] to-[#00ff88] bg-clip-text text-transparent"}>Lyes Lattari</motion.h1>
              <motion.h2 whileHover={{scale:1.1}} className={"text-lg md:text-xl text-gray-600 my-4 text-black"}>Front-End <b>ReactJS NextJS</b> developper</motion.h2>
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
          <p className="max-w-xl mx-auto mb-6 text-lg md:text-xl text-gray-200 text-justify">
            <h1 className='text-6xl font-bold'>Dream it</h1>
            <h1 className='text-6xl font-bold bg-gradient-to-r from-[#00ff88] to-[#8a2be2] bg-clip-text text-transparent'>I code it </h1>
            <h1 className='text-6xl font-bold'>It's that simple !</h1>
          </p>
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
        </div>
      </div>
    </div>
  </motion.div>
  <div className='w-11/12 md:w-4/5 flex flex-col gap-4 mx-auto'>
    <h2>who am I ?</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eveniet sapiente, culpa necessitatibus nulla aliquid consectetur quibusdam in suscipit dignissimos provident totam officia aspernatur cumque distinctio perferendis commodi beatae earum?</p>
  </div>
  <motion.div
  className={'w-11/12 md:w-4/5 flex flex-col md:flex-row'}>
            <div className='w-full md:w-2/5 flex flex-col m-auto content-center text-justify'>
              <h2>Why React ?</h2>
              <p>React is a very popular JavaScript library for front end developpement. It is very powerfull and versatile</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ducimus facilis quam asperiores dolorum eum, voluptas temporibus, ullam eius, repellat commodi. Error velit blanditiis corrupti nemo possimus nostrum totam voluptate?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ducimus facilis quam asperiores dolorum eum, voluptas temporibus, ullam eius, repellat commodi. Error velit blanditiis corrupti nemo possimus nostrum totam voluptate?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ducimus facilis quam asperiores dolorum eum, voluptas temporibus, ullam eius, repellat commodi. Error velit blanditiis corrupti nemo possimus nostrum totam voluptate?</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ducimus facilis quam asperiores dolorum eum, voluptas temporibus, ullam eius, repellat commodi. Error velit blanditiis corrupti nemo possimus nostrum totam voluptate?</p>

            </div>
            <div className='w-full md:w-3/5 flex flex-col m-auto content-center text-center'>
            <motion.img  whileInView={{rotate:180,scale:1}} initial={{scale:0}} whileHover={{scale:1.1,rotate:200}} whileTap={{scale:0.95,rotate:180}} src="/Images/reactLogo.svg" alt="React Logo" width={64} height={64} className="w-1/5 h-1/5 m-auto"/>
            </div>
  </motion.div>
  
  </div>

)}