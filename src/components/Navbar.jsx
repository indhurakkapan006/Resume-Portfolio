import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-accent italic">Esakkimuthu.R</h1>
      <div className="flex gap-6 items-center">
        <a href="#home" className="hover:text-accent transition-all">Home</a>
        <a href="#about" className="hover:text-accent transition-all">About Me</a>
        <a href="#skills" className="hover:text-accent transition-all">Skills</a>
        <a href="#projects" className="hover:text-accent transition-all">Projects</a>
        <a href="#certifications" className="hover:text-accent transition-all">Certifications</a>
        <a href="#contact" className="hover:text-accent transition-all">Contact</a>
      </div>
    </nav>
  );
}