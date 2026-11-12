import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <section className="section">
      <h3 className="section-title">Projects</h3>
      <div className="grid-cards">
        <motion.div whileHover={{ y: -10 }} className="card card-flex-col">
          <h4 className="card-title">Personal Portfolio</h4>
          <p className="card-list flex-grow" style={{ marginTop: '10px' }}>
            A responsive personal portfolio website built with React,
            TypeScript, Vite, and Framer Motion to showcase my experience,
            skills, and projects.
          </p>
          <a
            href="https://github.com/GabrielArce97/gabriel-arce-portfolio"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            View on GitHub &rarr;
          </a>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} className="card card-flex-col">
          <h4 className="card-title">Dev Translator</h4>
          <p className="card-list flex-grow" style={{ marginTop: '10px' }}>
            An AI-powered code translation tool built with Next.js, Tailwind
            CSS, and Google Gemini AI that translates code logic across
            programming languages with real-time streaming and syntax
            highlighting.
          </p>
          <a
            href="https://github.com/GabrielArce97/dev-translator"
            target="_blank"
            rel="noreferrer"
            className="card-link"
          >
            View on GitHub &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};
