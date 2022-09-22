import './App.scss'
import Header from "./components/Header/Header";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import ContactSection from "./components/ContactSection/ContactSection";
import IntroSection from "./components/IntroSection/IntroSection";

function App() {
  return (
    <div className='app'>
      {/* <Header/> */}
      <IntroSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
