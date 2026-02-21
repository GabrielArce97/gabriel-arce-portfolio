import { FadeSlideSection } from './components/FadeSlideSection';
import './App.css';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
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
import { motion } from 'framer-motion';

function App() {
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
    <div
      style={{
        backgroundColor: '#0A0A0A',
        color: 'white',
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        {/* Hero Section - Animates on page load */}
        <FadeSlideSection>
          <header
            style={{
              minHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: 'clamp(50px, 8vw, 80px) 0',
            }}
          >
            <h1
              style={{
                background: 'linear-gradient(90deg, #00D8FF 0%, #0066FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Gabriel Arce
            </h1>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 5vw, 3rem)',
                margin: '10px 0',
                fontWeight: 400,
                color: '#e0e0e0',
              }}
            >
              Full Stack Software Engineer
            </h2>
            <p
              style={{
                color: '#a0a0a0',
                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                maxWidth: '800px',
                lineHeight: '1.6',
                margin: '20px 0',
              }}
            >
              Full Stack Software Engineer with over 5 years of experience
              building high-quality, scalable web and mobile applications.
              Specialized in the JavaScript/TypeScript ecosystem, with a strong
              focus on modern Frontend architectures (React, React Native) and
              Backend development (Node.js, ExpressJS).
            </p>
            <div
              style={{
                display: 'flex',
                gap: '15px',
                marginTop: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: '#222' }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/gabriel-arce97"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  border: '1px solid #333',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  backgroundColor: '#111',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <FaLinkedin size={20} color="#0077b5" /> LinkedIn
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: '#222' }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/GabrielArce97"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  border: '1px solid #333',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  backgroundColor: '#111',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <FaGithub size={20} />
                GitHub
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: '#222' }}
                whileTap={{ scale: 0.95 }}
                href="mailto:gabriel.arce.blanco@gmail.com"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  border: '1px solid #333',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  backgroundColor: '#111',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <FaEnvelope size={20} color="#ea4335" />
                Email
              </motion.a>
            </div>
          </header>
        </FadeSlideSection>

        {/* Skills Section - Animates on scroll */}
        <FadeSlideSection>
          <section
            style={{ padding: 'clamp(40px, 8vw, 80px) 0', textAlign: 'center' }}
          >
            <h3
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                marginBottom: '30px',
                display: 'inline-block',
                background: 'linear-gradient(90deg, #fff, #888)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Tech Stack
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                justifyContent: 'center',
                maxWidth: '800px',
                margin: '0 auto',
              }}
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
                  style={{
                    backgroundColor: '#1A1A1A',
                    padding: '10px 20px',
                    borderRadius: '50px',
                    border: '1px solid #333',
                    color: '#ccc',
                    fontSize: '0.95rem',
                    cursor: 'default',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  {skill.icon}
                  {skill.name}
                </motion.span>
              ))}
            </motion.div>
          </section>
        </FadeSlideSection>

        <FadeSlideSection>
          <section style={{ padding: 'clamp(40px, 8vw, 80px) 0' }}>
            <h3
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                marginBottom: '40px',
                display: 'inline-block',
                background: 'linear-gradient(90deg, #fff, #888)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Experience
            </h3>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: '#111',
                  padding: 'clamp(20px, 5vw, 30px)',
                  borderRadius: '16px',
                  border: '1px solid #222',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '15px',
                    marginBottom: '15px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                    }}
                  >
                    <h4
                      style={{ fontSize: '1.5rem', margin: '0', color: '#fff' }}
                    >
                      Software Engineer
                    </h4>
                    <span
                      style={{
                        color: '#00D8FF',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                      }}
                    >
                      West Monroe | Costa Rica (Remote)
                    </span>
                  </div>
                  <span
                    style={{
                      color: '#888',
                      fontSize: '0.9rem',
                      fontFamily: 'monospace',
                      paddingTop: '4px',
                    }}
                  >
                    July 2023 – Present
                  </span>
                </div>

                <ul
                  style={{
                    color: '#aaa',
                    margin: '0',
                    maxWidth: '800px',
                    lineHeight: '1.6',
                    paddingLeft: '20px',
                  }}
                >
                  <li>
                    <strong>Lamina Project:</strong> Initialized and architected
                    the frontend foundation from scratch utilizing Vite and
                    React, delivering a highly performant and seamless user
                    experience.
                  </li>
                  <li>
                    Proactively proposed and integrated GraphQL Code Generator
                    (Codegen) in collaboration with the tech lead, streamlining
                    the development workflow and significantly improving type
                    safety across the application.
                  </li>
                  <li>
                    Contributed to end-to-end feature delivery by actively
                    supporting backend development processes and assisting with
                    AWS cloud implementations to ensure robust and scalable
                    deployments.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: '#111',
                  padding: 'clamp(20px, 5vw, 30px)',
                  borderRadius: '16px',
                  border: '1px solid #222',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '15px',
                    marginBottom: '15px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                    }}
                  >
                    <h4
                      style={{ fontSize: '1.5rem', margin: '0', color: '#fff' }}
                    >
                      Software Developer
                    </h4>
                    <span
                      style={{
                        color: '#00D8FF',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                      }}
                    >
                      First Factory | Cariari, Costa Rica (Remote)
                    </span>
                  </div>
                  <span
                    style={{
                      color: '#888',
                      fontSize: '0.9rem',
                      fontFamily: 'monospace',
                      paddingTop: '4px',
                    }}
                  >
                    February 2022 – May 2023
                  </span>
                </div>

                <ul
                  style={{
                    color: '#aaa',
                    margin: '0',
                    maxWidth: '800px',
                    lineHeight: '1.6',
                    paddingLeft: '20px',
                  }}
                >
                  <li>
                    <strong>Reno Mobile:</strong> Developed a mobile application
                    with Google authentication via AWS Amplify, configured push
                    notifications for iOS/Android using Firebase, and managed
                    TestFlight deployments.
                  </li>
                  <li>
                    <strong>Jersey Mike’s:</strong> Built a React Native mobile
                    application for Canada from scratch integrating web views,
                    created services to consume the client's API, and achieved
                    high code coverage through Unit Tests.
                  </li>
                  <li>
                    <strong>Sorenson:</strong> Resolved critical connection
                    issues between the mobile app (React Native) for the deaf
                    community and third-party bridge libraries, and implemented
                    new UI features.
                  </li>
                  <li>
                    <strong>S&P Platts:</strong> Developed dynamic components
                    such as interactive charts and tables to display indexes,
                    directly supporting the client during presentations and
                    deployments.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: '#111',
                  padding: 'clamp(20px, 5vw, 30px)',
                  borderRadius: '16px',
                  border: '1px solid #222',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '15px',
                    marginBottom: '15px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                    }}
                  >
                    <h4
                      style={{ fontSize: '1.5rem', margin: '0', color: '#fff' }}
                    >
                      Full Stack Developer
                    </h4>
                    <span
                      style={{
                        color: '#00D8FF',
                        fontWeight: 500,
                        fontSize: '1.1rem',
                      }}
                    >
                      Costa Rica Software Services | Remote
                    </span>
                  </div>
                  <span
                    style={{
                      color: '#888',
                      fontSize: '0.9rem',
                      fontFamily: 'monospace',
                      paddingTop: '4px',
                    }}
                  >
                    January 2020 – February 2022
                  </span>
                </div>

                <ul
                  style={{
                    color: '#aaa',
                    margin: '0',
                    maxWidth: '800px',
                    lineHeight: '1.6',
                    paddingLeft: '20px',
                  }}
                >
                  <li>
                    <strong>Kaptyn Project (Las Vegas):</strong> Developed
                    applications and enhancements for a ride services platform,
                    including the administrative app, a reservation widget, the
                    React Native mobile app for riders, and a customized
                    solution for hotels.
                  </li>
                </ul>
              </motion.div>
            </div>
          </section>
        </FadeSlideSection>

        {/* Projects Section - Animates on scroll */}
        <FadeSlideSection>
          <section style={{ padding: 'clamp(40px, 8vw, 80px) 0' }}>
            <h3
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                marginBottom: '40px',
                display: 'inline-block',
                background: 'linear-gradient(90deg, #fff, #888)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Projects
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '30px',
              }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: '#111',
                  padding: 'clamp(20px, 5vw, 30px)',
                  borderRadius: '16px',
                  border: '1px solid #222',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h4 style={{ color: '#fff', marginTop: 0, fontSize: '1.5rem' }}>
                  Portfolio V1
                </h4>
                <p style={{ color: '#aaa', lineHeight: '1.6', flexGrow: 1 }}>
                  A personal portfolio website built with React, TypeScript, and
                  Framer Motion to showcase my resume.
                </p>
                <a
                  href="#"
                  style={{
                    color: '#00D8FF',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginTop: '15px',
                  }}
                >
                  View Project &rarr;
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -10 }}
                style={{
                  backgroundColor: '#111',
                  padding: 'clamp(20px, 5vw, 30px)',
                  borderRadius: '16px',
                  border: '1px solid #222',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <h4 style={{ color: '#fff', marginTop: 0, fontSize: '1.5rem' }}>
                  E-Commerce Dashboard
                </h4>
                <p style={{ color: '#aaa', lineHeight: '1.6', flexGrow: 1 }}>
                  An admin dashboard for managing products and orders, featuring
                  data visualization charts.
                </p>
                <a
                  href="#"
                  style={{
                    color: '#00D8FF',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginTop: '15px',
                  }}
                >
                  View Project &rarr;
                </a>
              </motion.div>
            </div>
          </section>
        </FadeSlideSection>

        {/* Education Section - Animates on scroll */}
        <FadeSlideSection>
          <section
            style={{
              padding: 'clamp(40px, 8vw, 80px) 0',
              paddingBottom: '150px',
            }}
          >
            <h3
              style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                marginBottom: '40px',
                display: 'inline-block',
                background: 'linear-gradient(90deg, #fff, #888)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Education & Continuous Learning
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '30px',
              }}
            >
              {/* ULACIT */}
              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: '#111',
                  padding: 'clamp(20px, 5vw, 30px)',
                  borderRadius: '16px',
                  border: '1px solid #222',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '15px',
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                    }}
                  >
                    <h4
                      style={{ fontSize: '1.2rem', margin: '0', color: '#fff' }}
                    >
                      Bachelor in Software Engineering
                    </h4>
                    <span style={{ color: '#00D8FF', fontWeight: 500 }}>
                      ULACIT
                    </span>
                  </div>
                  <span
                    style={{
                      color: '#888',
                      fontSize: '0.9rem',
                      fontFamily: 'monospace',
                      paddingTop: '4px',
                    }}
                  >
                    2018 – 2022
                  </span>
                </div>
              </motion.div>

              {/* Kamuk School */}
              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: '#111',
                  padding: 'clamp(20px, 5vw, 30px)',
                  borderRadius: '16px',
                  border: '1px solid #222',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '15px',
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5px',
                    }}
                  >
                    <h4
                      style={{ fontSize: '1.2rem', margin: '0', color: '#fff' }}
                    >
                      High School Diploma
                    </h4>
                    <span style={{ color: '#00D8FF', fontWeight: 500 }}>
                      Kamuk School
                    </span>
                  </div>
                  <span
                    style={{
                      color: '#888',
                      fontSize: '0.9rem',
                      fontFamily: 'monospace',
                      paddingTop: '4px',
                    }}
                  >
                    2010 – 2015
                  </span>
                </div>
              </motion.div>

              {/* Continuous Learning / Courses */}
              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: '#111',
                  padding: 'clamp(20px, 5vw, 30px)',
                  borderRadius: '16px',
                  border: '1px solid #222',
                  textAlign: 'left',
                }}
              >
                <h4
                  style={{
                    fontSize: '1.2rem',
                    margin: '0 0 15px 0',
                    color: '#fff',
                  }}
                >
                  Professional Development
                </h4>
                <ul
                  style={{
                    color: '#aaa',
                    lineHeight: '1.6',
                    paddingLeft: '20px',
                    margin: 0,
                  }}
                >
                  <li style={{ marginBottom: '8px' }}>
                    AWS Cloud Practitioner (Course) | Udemy
                  </li>
                  <li>JavaScript: Understanding the Weird Parts | Udemy</li>
                </ul>
              </motion.div>
            </div>
          </section>
        </FadeSlideSection>
      </div>
    </div>
  );
}

export default App;
