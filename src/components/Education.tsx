import { motion } from 'framer-motion';

export const Education = () => {
  return (
    <section className="section" style={{ paddingBottom: '150px' }}>
      <h3 className="section-title">Education & Continuous Learning</h3>
      <div className="grid-cards">
        <motion.div whileHover={{ y: -5 }} className="card">
          <div className="card-header card-header-sm">
            <div className="card-title-group">
              <h4 className="card-title-sm">
                Bachelor in Software Engineering
              </h4>
              <span className="card-subtitle-sm">ULACIT</span>
            </div>
            <span className="card-date">2018 – 2022</span>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="card">
          <div className="card-header card-header-sm">
            <div className="card-title-group">
              <h4 className="card-title-sm">High School Diploma</h4>
              <span className="card-subtitle-sm">Kamuk School</span>
            </div>
            <span className="card-date">2010 – 2015</span>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="card">
          <h4 className="card-title-sm" style={{ marginBottom: '15px' }}>
            Professional Development
          </h4>
          <ul className="card-list">
            <li style={{ marginBottom: '8px' }}>
              AWS Cloud Practitioner (Course) | Udemy
            </li>
            <li>JavaScript: Understanding the Weird Parts | Udemy</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
