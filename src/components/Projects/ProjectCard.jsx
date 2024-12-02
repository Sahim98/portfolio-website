import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-md 
      border border-slate-200/60 overflow-hidden hover:shadow-2xl hover:shadow-blue-200/40 
      hover:border-blue-300/60 transition-all duration-300 hover:-translate-y-1 
      backdrop-blur-sm relative group">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/0 
        via-blue-400/0 to-blue-400/0 group-hover:from-blue-100/10 
        group-hover:via-blue-200/10 group-hover:to-blue-300/10 transition-all duration-300"/>
      
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-slate-900 
            to-blue-900 bg-clip-text text-transparent">{project.title}</h3>
          <div className="flex gap-2">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" 
                 className="text-slate-600 hover:text-blue-600 hover:scale-110 transition-all">
                <FaGithub className="w-6 h-6" />
              </a>
            )}
            {project.links.website && (
              <a href={project.links.website} target="_blank" rel="noopener noreferrer"
                 className="text-slate-600 hover:text-blue-600 hover:scale-110 transition-all">
                <FaGlobe className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-slate-600 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} 
                className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 
                px-3 py-1 rounded-full text-sm font-medium border border-blue-200/50 
                shadow-sm hover:shadow-md hover:scale-105 transition-all">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium bg-gradient-to-r from-slate-900 to-blue-900 
            bg-clip-text text-transparent mb-2">Key Features:</h4>
          <ul className="list-none space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r 
                  from-blue-400 to-cyan-400 shadow-sm shadow-blue-200"></span>
                <span className="text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}