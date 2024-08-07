import './App.css';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HeaderMenu from '../headerMenu/HeaderMenu';
import HomePage from '../pages/homePage/HomePage';
import WorksPage from '../pages/worksPage/WorksPage';
import Footer from '../footer/Footer';
import ContactPage from '../pages/contactPage/contactPage';
import AboutPage from '../pages/aboutPage/AboutPage';

const App = () => {

  const [isVisible, setIsVisible] = useState(false);

  const handleSwitchVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <Router>
      <div className="app">
        <div className="container">
          <HeaderMenu handleSwitchVisible={handleSwitchVisible} />
          <TransitionGroup>
            <Routes>
              <Route path='/' element={
                <CSSTransition key="home" timeout={500} classNames="fade">
                  <HomePage isVisible={isVisible} />
                </CSSTransition>
              } />
              <Route path='/works' element={
                <CSSTransition key="works" timeout={500} classNames="fade">
                  <WorksPage isVisible={isVisible} />
                </CSSTransition>
              } />
              <Route path='/about' element={
                <CSSTransition key="about" timeout={500} classNames="fade">
                  <AboutPage />
                </CSSTransition>
              } />
              <Route path='/contacts' element={
                <CSSTransition key="contacts" timeout={500} classNames="fade">
                  <ContactPage />
                </CSSTransition>
              } />
            </Routes>
          </TransitionGroup>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;