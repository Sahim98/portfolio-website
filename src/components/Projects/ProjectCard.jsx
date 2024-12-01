import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
          <div className="flex gap-2">
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" 
                 className="text-slate-600 hover:text-blue-600 transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
            )}
            {project.links.website && (
              <a href={project.links.website} target="_blank" rel="noopener noreferrer"
                 className="text-slate-600 hover:text-blue-600 transition-colors">
                <FaGlobe className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-slate-600 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-slate-900 mb-2">Key Features:</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}