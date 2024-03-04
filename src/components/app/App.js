import './App.css';

import HeaderMenu from '../headerMenu/HeaderMenu';
import MainScreen from '../mainScreen/MainScreen';
import ProjectsList from '../projectsList/ProjectsList';
import Skills from '../skills/Skills';
import About from '../about/About';
import ContactForm from '../contactForm/ContactForm';

const App = () => {
  return (
    <div className="container">
      <HeaderMenu/>
      <MainScreen/>
      <ProjectsList/>
      <Skills/>
      <About/>
      <ContactForm/>
    </div>
  )
}

export default App;
