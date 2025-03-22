import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubLink: 'https://github.com/yourusername/portfolio'
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
    <div className="text-black">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
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
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors inline-flex items-center"
          >
            <FaGithub className="mr-2" /> View Full GitHub Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
