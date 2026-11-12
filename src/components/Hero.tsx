import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Hero = () => {
  return (
    <header className="hero-header">
      <h1 className="hero-title">Gabriel Arce</h1>
      <h2 className="hero-subtitle">Full Stack Software Engineer</h2>
      <p className="hero-desc">
        Full Stack Software Engineer with over 5 years of experience building
        high-quality, scalable web and mobile applications. Specialized in the
        JavaScript/TypeScript ecosystem, with a strong focus on modern Frontend
        architectures (React, React Native) and Backend development (Node.js,
        ExpressJS, Java, Spring Boot).
      </p>
      <div className="hero-links">
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: '#222' }}
          whileTap={{ scale: 0.95 }}
          href="https://linkedin.com/in/gabriel-arce97"
          target="_blank"
          rel="noreferrer"
          className="btn-link"
        >
          <FaLinkedin size={20} color="#0077b5" /> LinkedIn
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: '#222' }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/GabrielArce97"
          target="_blank"
          rel="noreferrer"
          className="btn-link"
        >
          <FaGithub size={20} /> GitHub
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: '#222' }}
          whileTap={{ scale: 0.95 }}
          href="mailto:gabriel.arce.blanco@gmail.com"
          className="btn-link"
        >
          <FaEnvelope size={20} color="#ea4335" /> Email
        </motion.a>
      </div>
    </header>
  );
};
