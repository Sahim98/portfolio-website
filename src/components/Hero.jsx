import React from 'react';
import ResumeButton from './ResumeButton';
import { scrollToSection } from '../utils/navigation';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm Sahim Salem
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Full Stack Developer & Software Engineer
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
          <ResumeButton />
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="border border-slate-200 px-6 py-3 rounded-lg hover:border-blue-600 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}