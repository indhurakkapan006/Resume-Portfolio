import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-400 leading-relaxed text-lg">
          Aspiring Full Stack Developer with expertise in the MERN Stack and SQL. Passionate about building scalable web applications, from real-time messaging platforms to complex e-commerce solutions. Proficient in frontend architecture using React/Redux and backend logic with Node.js and MySQL.
        </p>
      </motion.div>
    </section>
  );
}
