import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiGraphql,
  SiFirebase,
  SiJest,
  SiVite,
} from 'react-icons/si';

export const TechStack = () => {
  const techSkills = [
    { name: 'React JS', icon: <FaReact color="#61DAFB" size={18} /> },
    { name: 'React Native', icon: <FaReact color="#61DAFB" size={18} /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={18} /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" size={18} /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" size={18} /> },
    { name: 'ExpressJS', icon: <SiExpress color="#fff" size={18} /> },
    { name: 'GraphQL', icon: <SiGraphql color="#E10098" size={18} /> },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={18} /> },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" size={18} /> },
    { name: 'AWS', icon: <FaAws color="#FF9900" size={18} /> },
    { name: 'Firebase', icon: <SiFirebase color="#FFCA28" size={18} /> },
    { name: 'Jest', icon: <SiJest color="#C21325" size={18} /> },
    { name: 'Vite', icon: <SiVite color="#646CFF" size={18} /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" size={18} /> },
  ];

  return (
    <section className="section-centered">
      <h3 className="section-title section-title-centered">Tech Stack</h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
        }}
        className="tech-grid"
      >
        {techSkills.map((skill) => (
          <motion.span
            key={skill.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              borderColor: '#00D8FF',
              color: '#fff',
            }}
            className="tech-pill"
          >
            {skill.icon}
            {skill.name}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
};
