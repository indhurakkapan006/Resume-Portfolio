import { Mic, Award } from 'lucide-react';
import { motion } from 'framer-motion'; // 1. Import motion for animations

const certs = [
  { 
    title: "6G Wireless Communication", 
    sub: "Symposium Presentation", 
    college: "Erode Sengunthar Engineering College", 
    icon: <Mic size={18}/> 
  },
  { 
    title: "3D Internet", 
    sub: "Symposium Presentation", 
    college: "Annapoorna Engineering College - Sankari", 
    icon: <Mic size={18}/> 
  },
  { 
    title: "Fuel Delivery System", 
    sub: "Symposium Presentation", 
    college: "Inter-college Symposium", 
    icon: <Mic size={18}/> 
  },
  { 
    title: "IoT Workshops", 
    sub: "Technical Events & Workshops", 
    college: "Inter-college Events", 
    icon: <Award size={18}/> 
  }
];

export default function Certifications() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 underline decoration-accent underline-offset-8">Certifications & Achievements</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          /* 2. Changed <div> to <motion.div> with scroll-trigger props */
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} // Slide in from left for even, right for odd
            whileInView={{ opacity: 1, x: 0 }} // Animate to full opacity and center position
            transition={{ duration: 0.6, delay: i * 0.1 }} // Staggered reveal
            viewport={{ once: true }} // Animation triggers only once per scroll
            className="flex items-center gap-6 bg-[#111827] p-6 rounded-2xl border border-white/5 hover:border-accent/50 transition-colors"
          >
            <div className="p-4 bg-accent/20 rounded-full text-accent">{c.icon}</div>
            <div>
              <h4 className="font-bold text-lg text-white">{c.title}</h4>
              <p className="text-accent text-sm font-medium">{c.sub}</p>
              <p className="text-gray-500 text-xs mt-1">{c.college}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}