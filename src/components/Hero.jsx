import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { scrollToSection } from '../utils/navigation';
// import profile from '../../public/profile.png';


export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'sahim-salem-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <div className="max-w-5xl mx-auto py-20 text-center">
        <div className="mb-8">
          <img
            src="/sahim_casual.JPG"
            alt="Sahim Salem"
            className="w-44 h-44 rounded-full mx-auto border-3 border-white 
              shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300
              bg-gradient-to-b from-blue-100 to-white p-1"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Hi, I'm Sahim Salem
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8">
          Aspiring Software Engineer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition-colors"
          >
            <span>Download Resume</span>
            <FaDownload />
          </button>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="w-full sm:w-auto border border-slate-200 px-6 py-3 rounded-lg hover:border-blue-600 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}