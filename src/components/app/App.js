import './App.css';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import HeaderMenu from '../headerMenu/HeaderMenu';
import HomePage from '../pages/homePage/HomePage';
import WorksPage from '../pages/worksPage/WorksPage';
import Footer from '../footer/Footer';

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
            </Routes>
          </TransitionGroup>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;