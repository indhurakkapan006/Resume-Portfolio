import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: "BE – Electronics and Communication Engineering",
    college: "Sengunthar Engineering College (Autonomous), Tiruchengode",
    year: "2027",
    icon: <GraduationCap size={18}/>
  }
];

export default function Education() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 id="education" className="text-4xl font-bold text-center mb-16 underline decoration-accent underline-offset-8">Education</h2>
      <div className="grid md:grid-cols-1 gap-4">
        {education.map((edu, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 bg-[#111827] p-6 rounded-2xl border border-white/5 hover:border-accent/50 transition-colors"
          >
            <div className="p-4 bg-accent/20 rounded-full text-accent">{edu.icon}</div>
            <div>
              <h4 className="font-bold text-lg text-white">{edu.degree}</h4>
              <p className="text-gray-400 text-sm mt-1">{edu.college}</p>
              <p className="text-accent text-sm font-medium mt-2">Graduation Year: {edu.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
