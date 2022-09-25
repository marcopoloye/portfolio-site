import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import IntroSection from "./components/IntroSection/IntroSection";
import SkillsSection from "./components/SkillsSection/SkillsSection";

function App() {
  return (
    <div className='app'>
      <IntroSection/>
      <ProjectsSection/>
      <SkillsSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
