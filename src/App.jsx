import { motion } from 'framer-motion'; // 1. Import motion
import Navbar from './components/Navbar';
import DetailedSkills from './components/DetailedSkills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import About from './components/About';
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      
      {/* Hero / Home Section with Entry Animations */}
      <header id="home" className="pt-48 pb-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }} // Starts slightly higher and invisible
          animate={{ opacity: 1, y: 0 }} // Slides down and fades in immediately
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile image (place your image at public/profile.jpg) */}
          <motion.img
            src="/profile.jpg"
            alt="Esakkimuthu R profile"
            initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.05, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.04, rotate: 2 }}
            className="mx-auto w-40 h-40 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-accent/30 shadow-lg"
          />

          <span className="bg-accent/10 text-accent text-xs font-bold px-4 py-1.5 rounded-full border border-accent/20">
            Available for Hire
          </span>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl md:text-8xl font-black mt-8 mb-6 italic tracking-tighter text-white uppercase"
          >
            R. Esakki Muthu
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Full Stack Developer & ECE Undergraduate building innovative web solutions with React, Node.js, and SQL.
          </motion.p>

          <div className="mt-8 flex justify-center gap-4 items-center">
            <a href="/resume.pdf" download className="bg-accent text-dark px-4 py-2 rounded-md font-semibold hover:opacity-90">Download Resume</a>
            <div className="flex gap-3 text-gray-400">
              <a href="https://github.com/indhurakkapan006" target="_blank" rel="noreferrer" className="hover:text-accent"> <Github /> </a>
              <a href="https://www.linkedin.com/in/esakkimuthu-neweye/" target="_blank" rel="noreferrer" className="hover:text-accent"> <Linkedin /> </a>
              <a href="mailto:indhurakkapan006@gmail.com" className="hover:text-accent"> <Mail /> </a>
            </div>
          </div>

          {/* Scroll Down Indicator Icon */}
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 text-gray-500 flex justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
          </motion.div>
        </motion.div>
      </header>

      {/* About Me Section */}
      <About />

      {/* These components now handle their own scroll animations internally */}
      <DetailedSkills />
      <Projects />
      <Certifications />
      <Contact />

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
        © 2025 R. Esakki Muthu. All Rights Reserved.
      </footer>
    </main>
  );
}

export default App;