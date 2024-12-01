import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import SectionTitle from '../SectionTitle';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}