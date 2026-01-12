import { Layout, Github } from 'lucide-react';
import { motion } from 'framer-motion'; // 1. Import motion

const featuredProjects = [
  {
    title: "MERN Chat App",
    desc: "Architected a bi-directional messaging platform allowing users to join rooms and chat instantly using Socket.io",
    tags: ["React.js", "Node.js", "Express", "MySQL"],
    links: { demo: "https://mern-chat-app-ten-omega.vercel.app", source: "https://github.com/indhurakkapan006/mern-chat-app.git" }
  },
  {
    title: "Fuel Delivery System",
    desc: "Developed a responsive client dashboard for viewing quote history and profile management.",
    tags: ["React.js", "Node.js", "Express", "MySQL"],
    links: { demo: "https://fuel-delivery-system.onrender.com", source: "https://github.com/indhurakkapan006/fuel-delivery-system.git" }
  },
  {
    title: "Ecommerce Project",
    desc: "Developed a RESTful API to handle CRUD operations for inventory management and order processing.",
    tags: ["React.js", "Redux", "Node.js", "MongoDB"],
    links: { demo: "https://shop-frontend-glmh.onrender.com", source: "https://github.com/indhurakkapan006/Ecommerce-project.git" }
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 underline decoration-accent underline-offset-8">Projects</h2>
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