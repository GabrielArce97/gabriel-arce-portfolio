import { FadeSlideSection } from './components/FadeSlideSection';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <FadeSlideSection>
          <Hero />
        </FadeSlideSection>

        <FadeSlideSection>
          <TechStack />
        </FadeSlideSection>

        <FadeSlideSection>
          <Experience />
        </FadeSlideSection>

        <FadeSlideSection>
          <Projects />
        </FadeSlideSection>

        <FadeSlideSection>
          <Education />
        </FadeSlideSection>
      </div>
    </div>
  );
}

export default App;
