import { Layout, Github } from 'lucide-react';
import { motion } from 'framer-motion'; // 1. Import motion

const featuredProjects = [
  {
    title: "Fuel Buying Website",
    desc: "A responsive fuel delivery platform allowing users to purchase fuel online and track orders efficiently.",
    tags: ["React", "Node.js", "Database"],
    links: { demo: "https://fuel-delivery-system.onrender.com", source: "https://github.com/indhurakkapan006/fuel-delivery-system" }
  },
  {
    title: "E-Commerce Website",
    desc: "Full-stack e-commerce solution with product listings, shopping cart, and secure user authentication.",
    tags: ["Full Stack", "Auth", "Payment Flow"],
    links: { demo: "https://e-comerce-website-t88s.onrender.com", source: "https://github.com/indhurakkapan006/E-Comerce-website.git" }
  },
  {
    title: "To-Do List App",
    desc: "Responsive task management application featuring add, delete, and task organization capabilities.",
    tags: ["React", "State Management", "Responsive"],
    links: { demo: "https://todo-app-yvbb.onrender.com/", source: "https://github.com/indhurakkapan006/todo-app.git" }
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 underline decoration-accent underline-offset-8">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredProjects.map((p, i) => (
          /* 2. Changed <div> to <motion.div> and added animation props */
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }} // Start invisible and slightly lower
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
            transition={{ delay: i * 0.1, duration: 0.5 }} // Staggered entry
            viewport={{ once: true }} // Only animate once per session
            className="bg-[#111827] p-8 rounded-3xl border border-white/10 hover:border-accent transition-all group"
          >
            <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {p.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest bg-slate-800 px-2 py-1 rounded text-gray-300">{tag}</span>
              ))}
            </div>
            <div className="flex gap-6 border-t border-white/5 pt-6">
              <a href={p.links.demo} target="_blank" className="flex items-center gap-2 text-sm font-bold hover:text-accent"><Layout size={16}/> Demo</a>
              <a href={p.links.source} target="_blank" className="flex items-center gap-2 text-sm font-bold hover:text-accent"><Github size={16}/> Source</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}