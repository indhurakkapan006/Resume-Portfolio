import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Self-Driven Full Stack Projects",
    description: "Built multiple MERN stack applications focusing on real-world use cases",
    details: [
      "Gained hands-on experience in REST APIs, authentication, and database design",
      "Developed scalable backend services with Node.js and Express.js",
      "Implemented responsive frontend interfaces using React and Redux",
      "Optimized performance through efficient database queries and state management"
    ],
    icon: <Briefcase size={18} />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 underline decoration-accent underline-offset-8">Experience</h2>
      <div className="grid md:grid-cols-1 gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6 bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-accent/50 transition-colors"
          >
            <div className="p-4 bg-accent/20 rounded-full text-accent flex-shrink-0 h-fit">
              {exp.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>
              <ul className="space-y-2">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
