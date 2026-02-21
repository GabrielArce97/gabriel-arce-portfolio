import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <section className="section">
      <h3 className="section-title">Projects</h3>
      <div className="grid-cards">
        <motion.div whileHover={{ y: -10 }} className="card card-flex-col">
          <h4 className="card-title">Portfolio V1</h4>
          <p className="card-list flex-grow" style={{ marginTop: '10px' }}>
            A personal portfolio website built with React, TypeScript, and
            Framer Motion to showcase my resume.
          </p>
          <a href="#" className="card-link">
            View Project &rarr;
          </a>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} className="card card-flex-col">
          <h4 className="card-title">E-Commerce Dashboard</h4>
          <p className="card-list flex-grow" style={{ marginTop: '10px' }}>
            An admin dashboard for managing products and orders, featuring data
            visualization charts.
          </p>
          <a href="#" className="card-link">
            View Project &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};
