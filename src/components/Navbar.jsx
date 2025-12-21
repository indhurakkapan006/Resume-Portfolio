import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-accent italic">Esakkimuthu.R</h1>
      <div className="flex gap-6 items-center">
        <a href="https://github.com/indhurakkapan006" target="_blank" className="hover:text-accent transition-all hover:scale-110"><Github /></a>
        <a href="https://www.linkedin.com/in/esakkimuthu-neweye/" target="_blank" className="hover:text-accent transition-all hover:scale-110"><Linkedin /></a>
        <a href="mailto:indhurakkapan006@gmail.com" className="hover:text-accent transition-all hover:scale-110"><Mail /></a>
        <a href="/ESAKKIMUTHU%20R%20-%20Resume.pdf" target="_blank" download className="hover:text-accent transition-all hover:scale-110" title="Download Resume">
          <FileText />
        </a>
      </div>
    </nav>
  );
}