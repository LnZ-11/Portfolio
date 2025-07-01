import Image from 'next/image';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss, SiGit } from "react-icons/si";

export default function App() {
  
  interface techStack {
    name: string;
    icon: React.ReactNode;
  }
  
  const techStack: techStack[] = [
    {icon:<SiTypescript className='size-4 mt-0.5'/>, name:"TypeScript"}, {icon:<FaReact className='size-4 mt-0.5'/>, name:"React"}, {icon:<SiNextdotjs className='size-4 mt-0.5'/>, name:'Next.js'}, {icon:<SiTailwindcss className='size-4 mt-0.5'/>, name:'Tailwind CSS'}, 
    {icon:<SiNodedotjs className='size-4 mt-0.5'/>, name:'Node.js'}, {icon:<SiGit className='size-4 mt-0.5'/>, name:'Git'}
  ];

  return(
    
      <div className="text-center">
        {/* Round Profile Photo */}
        <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-500">
          <Image 
            src="/Images/profilePic.png" 
            alt="Profile Photo" 
            width={192} 
            height={192} 
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name and Job Title */}
        <h1 className="text-3xl font-bold mb-2 font-[caveat] text-black">Lyes Lattari</h1>
        <h2 className="text-xl text-gray-600 mb-4 font-[caveat] text-black">Full Stack Software Engineer</h2>

        {/* Contact Links */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="mailto:lyes.lattari@example.com" className="text-blue-500 hover:text-blue-700">
            <FaEnvelope size={24} />
          </a>
          <a href="https://wa.me/213542858609" className="text-green-500 hover:text-green-700">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://github.com/LnZ-11" className="text-gray-800 hover:text-gray-600">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-blue-700 hover:text-blue-900">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* About Me */}
        <p className="max-w-xl mx-auto mb-6 text-xl text-gray-700">
          Passionate software engineer with expertise in full-stack web development, 
          creating robust and scalable web applications that solve real-world problems.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-md flex flex-row gap-1 text-center justify-center"
            >
              {tech.icon}
              {tech.name}
            </div>
          ))}
        </div>
      </div>
  )
}