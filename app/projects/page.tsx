"use client"

import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import {motion} from 'motion/react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/LnZ-11/Portfolio'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with user authentication and payment integration',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubLink: 'https://github.com/yourusername/ecommerce-project'
  },
  {
    title: 'Machine Learning Classifier',
    description: 'AI-powered image classification tool using deep learning',
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    githubLink: 'https://github.com/yourusername/ml-classifier'
  }
];

export default function ProjectsPage() {
  return (
    <div className='w-full flex flex-col items-center content-center pb-12 md:py-[12vh]'>
      <motion.div 
        viewport={{ once: true }}
        initial={{ scale: 0 }} 
        whileInView={{ scale: 1 }} 
        className={"w-11/12 md:w-4/5 flex flex-col gap-4 m-24 rounded-2xl"}
      >
        <div className="w-full md:w-5/6 mx-auto px-4 md:px-8">
          <div className="backdrop-blur-lg bg-black/40 p-12 rounded-2xl md:[box-shadow:_0_0_10px_white,_0_0_20px_white,_0_0_30px_white] md:border md:border-gray-200">
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
              <p className="text-gray-600 mb-4">{project.description}</p>
              
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
                className="flex items-center text-gray-800 hover:text-blue-600 transition-colors"
              >
                <FaGithub className="mr-2" /> View on GitHub
              </Link>

            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors inline-flex items-center"
            >
            <FaGithub className="mr-2" /> View Full GitHub Profile
          </motion.div>
          <Link 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors"
          >
          </Link>
        </div>
      </div>
    </div>
  </div>
 </motion.div>
</div>
  );
}
