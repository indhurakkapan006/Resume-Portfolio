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
          I am a Full Stack Developer with experience building web applications using React, Node.js, Express, and MongoDB. I enjoy creating performant, accessible user experiences and learning new technologies. Currently pursuing opportunities to contribute to meaningful projects and grow as an engineer.
        </p>
      </motion.div>
    </section>
  );
}
