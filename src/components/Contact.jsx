import { motion } from 'framer-motion'; // 1. Import motion for scroll effects
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const contactDetails = [
  {
    icon: <Mail className="text-accent" size={24} />,
    title: "Email",
    value: "indhurakkapan006@gmail.com",
    link: "mailto:indhurakkapan006@gmail.com"
  },
  {
    icon: <Phone className="text-accent" size={24} />,
    title: "Phone",
    value: "9025761401",
    link: "tel:+919025761401"
  },
  {
    icon: <MapPin className="text-accent" size={24} />,
    title: "Location",
    value: "Tenkasi, Tamilnadu",
    link: "https://www.google.com/maps/place/Tenkasi,+Tamil+Nadu"
  }
];

export default function Contact() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 italic">Get In Touch</h2>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {contactDetails.map((detail, i) => (
          <motion.a
            href={detail.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#111827] p-10 rounded-3xl border border-white/5 hover:border-accent transition-all block group"
          >
            <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              {detail.icon}
            </div>
            <h4 className="font-bold mb-2 text-white">{detail.title}</h4>
            <p className="text-gray-400 text-sm">{detail.value}</p>
          </motion.a>
        ))}
      </div>

      {/* Social Links footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center gap-8 text-gray-500"
      >
        <a href="https://github.com/indhurakkapan006" target="_blank" className="hover:text-accent flex items-center gap-2 transition-all">
          <Github size={20} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/esakkimuthu-neweye/" target="_blank" className="hover:text-accent flex items-center gap-2 transition-all">
          <Linkedin size={20} /> LinkedIn
        </a>
      </motion.div>
    </section>
  );
}