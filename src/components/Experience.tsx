import { motion } from 'framer-motion';

export const Experience = () => {
  return (
    <section className="section">
      <h3 className="section-title">Experience</h3>
      <div className="flex-col-gap">
        <motion.div whileHover={{ y: -5 }} className="card">
          <div className="card-header">
            <div className="card-title-group">
              <h4 className="card-title">Software Engineer</h4>
              <span className="card-subtitle">
                West Monroe | Costa Rica (Remote)
              </span>
            </div>
            <span className="card-date">July 2023 – Present</span>
          </div>
          <ul className="card-list">
            <li>
              <strong>Lamina Project:</strong> Initialized and architected the
              frontend foundation from scratch utilizing Vite and React,
              delivering a highly performant and seamless user experience.
            </li>
            <li>
              Proactively proposed and integrated GraphQL Code Generator
              (Codegen) in collaboration with the tech lead, streamlining the
              development workflow and significantly improving type safety
              across the application.
            </li>
            <li>
              Contributed to end-to-end feature delivery by actively supporting
              backend development processes and assisting with AWS cloud
              implementations to ensure robust and scalable deployments.
            </li>
          </ul>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="card">
          <div className="card-header">
            <div className="card-title-group">
              <h4 className="card-title">Software Developer</h4>
              <span className="card-subtitle">
                First Factory | Cariari, Costa Rica (Remote)
              </span>
            </div>
            <span className="card-date">February 2022 – May 2023</span>
          </div>
          <ul className="card-list">
            <li>
              <strong>Reno Mobile:</strong> Developed a mobile application with
              Google authentication via AWS Amplify, configured push
              notifications for iOS/Android using Firebase, and managed
              TestFlight deployments.
            </li>
            <li>
              <strong>Jersey Mike’s:</strong> Built a React Native mobile
              application for Canada from scratch integrating web views, created
              services to consume the client's API, and achieved high code
              coverage through Unit Tests.
            </li>
            <li>
              <strong>Sorenson:</strong> Resolved critical connection issues
              between the mobile app (React Native) for the deaf community and
              third-party bridge libraries, and implemented new UI features.
            </li>
            <li>
              <strong>S&P Platts:</strong> Developed dynamic components such as
              interactive charts and tables to display indexes, directly
              supporting the client during presentations and deployments.
            </li>
          </ul>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="card">
          <div className="card-header">
            <div className="card-title-group">
              <h4 className="card-title">Full Stack Developer</h4>
              <span className="card-subtitle">
                Costa Rica Software Services | Remote
              </span>
            </div>
            <span className="card-date">January 2020 – February 2022</span>
          </div>
          <ul className="card-list">
            <li>
              <strong>Kaptyn Project (Las Vegas):</strong> Developed
              applications and enhancements for a ride services platform,
              including the administrative app, a reservation widget, the React
              Native mobile app for riders, and a customized solution for
              hotels.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
