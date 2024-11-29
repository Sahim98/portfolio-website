import React from 'react';
import { scrollToSection } from '../utils/navigation';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100">
      <nav className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="text-xl font-semibold text-slate-900 hover:text-blue-600 transition-colors"
          >
            Sahim Salem
          </a>
          <div className="flex gap-6">
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a 
              href="#achievements" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('achievements');
              }}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Achievements
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}