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
              frontend foundation from scratch using React, TypeScript, and
              Vite, and integrated GraphQL Code Generator (Codegen) with the
              tech lead to streamline development and enforce end-to-end type
              safety.
            </li>
            <li>
              <strong>Full-Stack Feature Ownership:</strong> Led the end-to-end
              delivery of core platform workflows—including bulk actions, undo
              mechanics, and real-time dashboard filtering and sorting—across
              React, GraphQL APIs, and a Java (Spring Boot) backend.
            </li>
            <li>
              <strong>Data Integrity & Audit History:</strong> Implemented
              transactional edit history (tracking field-level changes with
              rollback and concurrency support), integration activity tracking,
              and strict multi-tenant data isolation across institutions.
            </li>
            <li>
              <strong>Document Processing & Previews:</strong> Improved email
              and attachment processing pipelines (HTML, DOCX, and ZIP files)
              for LLM data extraction, and built sandboxed email/HTML previews
              along with a custom PDF viewer prototype.
            </li>
            <li>
              <strong>Production Tooling & Remediation:</strong> Built guarded
              production data-remediation and AWS S3 repair scripts featuring
              dry runs, preflight checks, and backup/recovery support in
              collaboration with DevOps.
            </li>
            <li>
              <strong>AI-Driven Development & Code Quality:</strong> Worked in
              an AI-oriented workflow using Codex on a daily basis to accelerate
              feature delivery and defect investigations, maintaining high code
              quality, architectural standards, and test coverage with Jest and
              Cypress.
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
