import { Layout, Github } from 'lucide-react';
import { motion } from 'framer-motion'; // 1. Import motion

const featuredProjects = [
  {
    title: "MERN Chat App",
    role: "Full Stack Developer",
    overview: "Architected a bi-directional messaging platform allowing users to join rooms and chat instantly",
    challenges: [
      "Implementing real-time communication with low latency",
      "Managing concurrent user connections and room state",
      "Ensuring message persistence and chat history"
    ],
    solutions: [
      "Integrated Socket.io for WebSocket-based bidirectional messaging",
      "Designed efficient database queries for message retrieval and room management",
      "Implemented event-driven architecture for real-time updates"
    ],
    tags: ["React.js", "Node.js", "Express", "MySQL", "Socket.io"],
    links: { demo: "https://chat-app-one-sage-64.vercel.app", source: "https://github.com/indhurakkapan006/chat-app.git" }
  },
  {
    title: "Fuel Delivery System",
    role: "Full Stack Developer",
    overview: "Developed a comprehensive platform for fuel delivery with client and admin dashboards",
    challenges: [
      "Creating intuitive quote history visualization",
      "Managing user profile data and delivery preferences",
      "Integrating location-based services"
    ],
    solutions: [
      "Built responsive React dashboard with data tables and filters",
      "Implemented secure profile management with validation",
      "Designed user-friendly interface for quote and order tracking"
    ],
    tags: ["React.js", "Node.js", "Express", "MySQL"],
    links: { demo: "https://fuel-delivery-frontend.vercel.app", source: "https://github.com/indhurakkapan006/fuel-delivery-web.git" }
  },
  {
    title: "Ecommerce Project",
    role: "Full Stack Developer",
    overview: "Built a complete e-commerce platform with inventory management and order processing",
    challenges: [
      "Handling complex CRUD operations for multiple entities",
      "Managing inventory stock levels and order workflows",
      "Implementing state management across components"
    ],
    solutions: [
      "Developed RESTful API with modular controller and service layers",
      "Integrated Redux for centralized state management",
      "Implemented transaction-safe inventory updates and order processing"
    ],
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
            <div className="mb-4">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-accent text-sm font-medium mt-1">Role: {p.role}</p>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">{p.overview}</p>
            
            <div className="mb-6">
              <h4 className="text-sm font-bold text-white mb-2">Technical Challenges:</h4>
              <ul className="list-disc list-inside space-y-1">
                {p.challenges.map((challenge, idx) => (
                  <li key={idx} className="text-gray-400 text-sm">{challenge}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-bold text-white mb-2">Solutions Implemented:</h4>
              <ul className="list-disc list-inside space-y-1">
                {p.solutions.map((solution, idx) => (
                  <li key={idx} className="text-gray-400 text-sm">{solution}</li>
                ))}
              </ul>
            </div>
            
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