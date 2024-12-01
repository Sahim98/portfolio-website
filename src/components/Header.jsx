import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { scrollToSection } from '../utils/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100">
      <nav className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="text-xl font-semibold text-slate-900 hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Sahim Salem
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <NavLinks handleNavClick={handleNavClick} />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <NavLinks handleNavClick={handleNavClick} isMobile />
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks({ handleNavClick, isMobile }) {
  const linkClass = `relative text-slate-600 hover:text-blue-600 transition-all duration-300 ${
    isMobile ? 'block py-2 hover:pl-2' : 'after:content-[""] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full'
  }`;

  return (
    <>
      <a 
        href="#about" 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('about');
        }}
        className={linkClass}
      >
        About
      </a>
      <a 
        href="#achievements" 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('achievements');
        }}
        className={linkClass}
      >
        Achievements
      </a>
      <a 
        href="#projects" 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('projects');
        }}
        className={linkClass}
      >
        Projects
      </a>
      <a 
        href="#contact" 
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('contact');
        }}
        className={linkClass}
      >
        Contact
      </a>
    </>
  );
}