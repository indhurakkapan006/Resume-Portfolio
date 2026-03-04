import { motion } from 'framer-motion';

export default function About() {
  const softSkills = [
    { skill: "Problem Solving", desc: "Analytical approach to breaking down complex problems and implementing efficient solutions" },
    { skill: "Debugging", desc: "Proficient in troubleshooting and optimizing code to ensure reliability and performance" },
    { skill: "Teamwork", desc: "Collaborative mindset with experience working across frontend, backend, and design teams" },
    { skill: "Communication", desc: "Clear articulation of technical concepts and seamless coordination with stakeholders" }
  ];

  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed text-lg mb-12">
          Aspiring Full Stack Developer with expertise in the MERN Stack and SQL. Passionate about building scalable web applications, from real-time messaging platforms to complex e-commerce solutions. Proficient in frontend architecture using React/Redux and backend logic with Node.js and MySQL.
        </p>

        <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {softSkills.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111827] p-4 rounded-lg border border-white/5 hover:border-accent/50 transition-colors"
            >
              <h4 className="text-accent font-bold mb-2">{item.skill}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
