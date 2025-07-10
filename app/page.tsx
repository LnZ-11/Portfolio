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
  <motion.div 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      className={"w-full"}
  >
        <div className="w-full w-5/6 my-4 mx-auto px-4">
          <div className="backdrop-blur-lg bg-black/40 p-12 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex flex-row gap-8 justify-around items-center">
              <motion.div 
              whileHover={{scale:1.13}} whileTap={{scale:0.95}} 
              className={"w-96 h-96 rounded-2xl overflow-hidden my-8 border-4 border-blue-500"}>
                 {/* Round Profile Photo */}
                <Image 
                  src="/Images/profilePic.png" 
                  alt="Profile Photo" 
                  width={512} 
                  height={512} 
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <div className="w-1 h-96 bg-gray-700 rounded-full"></div>
            <div className='flex flex-col items-center'>
              {/* Name and Job Title */}
              <motion.h1 whileHover={{scale:1.1}} className={"text-5xl font-bold my-2 text-[#0b8a43]"}>Lyes Lattari</motion.h1>
              <motion.h2 whileHover={{scale:1.1}} className={"text-xl text-gray-600 my-4 text-black"}>Front-End <b>ReactJS NextJS</b> developper</motion.h2>
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
          <p className="max-w-xl mx-auto mb-6 text-xl text-gray-200 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit magnam illo architecto ullam accusamus veritatis ipsa enim nemo fuga temporibus obcaecati, qui quaerat dolore laudantium voluptas! Quam quae doloremque quos!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam facilis illo corrupti unde suscipit delectus laboriosam, quod at adipisci neque quibusdam incidunt, esse voluptates. Modi maiores temporibus sunt quis! Temporibus!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, ipsa amet temporibus quos placeat exercitationem quis animi corrupti, reiciendis maiores aperiam culpa. Eius repudiandae dolores ratione ullam enim assumenda eveniet.
          </p>
          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div 
              whileHover={{scale:1.1}} 
              key={index} 
              className={"bg-[#a9f3ca] text-[#0b8a43] px-3 py-1 rounded-full text-xl flex flex-row gap-1 text-center justify-center"}
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
)}