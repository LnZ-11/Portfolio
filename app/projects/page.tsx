"use client"

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import {motion} from 'motion/react';
import NeonFrame from '../components/neonFrame';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/LnZ-11/Portfolio'
  },
    {
    title: 'Movie Finder',
    description: 'A small app movie finder linked to IMdb API website built with React and Next.js. focused more on logic and functionality rather than design.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/LnZ-11/projetuseeffect'
  },
];

export default function ProjectsPage() {
  return (
    <div className='w-full flex flex-col items-center content-center pb-12'>
<NeonFrame>
            <div className="flex flex-col gap-8">
              <motion.h1
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#8a2be2] to-[#00ff88] bg-clip-text text-transparent"
                >
                My Projects
              </motion.h1>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div 
                  key={index} 
                  viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration : 1.2}}
                    className="backdrop-blur-lg bg-black/40 border rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                    >
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h3 className="font-medium mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                    key={techIndex} 
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            
              <Link 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-600 transition-colors"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </Link>

            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="https://github.com/LnZ-11" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors inline-flex items-center"
            >
              <FaGithub className="mr-2" /> View Full GitHub Profile
          </motion.div>
          </Link>
        </div>
      </div> 
 </NeonFrame>
</div>
  );
}
