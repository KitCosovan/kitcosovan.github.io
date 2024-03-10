import './App.css';

import { useState } from 'react';

import HeaderMenu from '../headerMenu/HeaderMenu';
import MainScreen from '../mainScreen/MainScreen';
import ProjectsList from '../projectsList/ProjectsList';
import Skills from '../skills/Skills';
import About from '../about/About';
import ContactForm from '../contactForm/ContactForm';
import Footer from '../footer/Footer';

const App = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleSwitchVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="app">
      <div className="container">
        <HeaderMenu handleSwitchVisible={handleSwitchVisible}/>
        <MainScreen isVisible={isVisible}/>
        <ProjectsList/>
        <Skills/>
        <About/>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;
