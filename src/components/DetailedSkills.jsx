import { Layout, Server, Database, Terminal } from 'lucide-react';
import { motion } from 'framer-motion'; // 1. Import motion

const skillCategories = [
  { 
    title: "Frontend", icon: <Layout className="text-accent" />, 
    items: ["React.js", "HTML", "CSS", "Bootstrap", "JavaScript"] 
  },
  { 
    title: "Backend", icon: <Server className="text-accent" />, 
    items: ["Node.js", "Express.js", "Async Programming"] 
  },
  { 
    title: "Database", icon: <Database className="text-accent" />, 
    items: ["SQL Basics", "MongoDB Basics"] 
  },
  { 
    title: "Tools & Others", icon: <Terminal className="text-accent" />, 
    items: ["Git/GitHub", "Excel", "VS Code"] 
  }
];

export default function DetailedSkills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 underline decoration-accent underline-offset-8">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, i) => (
          /* 2. Replace <div> with <motion.div> and add animation props */
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }} // Start slightly smaller and invisible
            whileInView={{ opacity: 1, scale: 1 }} // Zoom in and fade in on scroll
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1 // Stagger the skill cards appearing one by one
            }}
            viewport={{ once: true }} // Only animate the first time the user scrolls down
            className="bg-[#111827] p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-accent transition-colors group"
          >
            <div className="p-4 bg-accent/10 rounded-xl mb-4 group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="text-xl font-bold mb-6">{cat.title}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {cat.items.map(skill => (
                <span key={skill} className="bg-slate-800 text-xs px-3 py-1.5 rounded-md font-medium text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}