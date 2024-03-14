  import './App.css';

  import { useState, useEffect } from 'react';
  import { TransitionGroup, CSSTransition } from 'react-transition-group';

  import HeaderMenu from '../headerMenu/HeaderMenu';
  import HomePage from '../homePage/HomePage';
  import WorksPage from '../worksPage/WorksPage';
  import Footer from '../footer/Footer';

  const App = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [headerListener, setHeaderListener] = useState({});

    useEffect(() => {
      setHeaderListener({
        home: true,
        works: false
      })
    }, [])

    const handleListener = (item) => {
      const newState = {
        home: item === 'home',
        works: item === 'works'
      }
      setHeaderListener(newState);
    }

    const handleSwitchVisible = () => {
      setIsVisible(!isVisible);
    }

    return (
      <div className="app">
        <div className="container">
          <HeaderMenu handleSwitchVisible={handleSwitchVisible} handleItemClick={handleListener} headerListener={headerListener}/>
          {/* {headerListener.home && <HomePage isVisible={isVisible} />}
          {headerListener.works && <WorksPage isVisible={isVisible} />} */}
          <TransitionGroup>
            {headerListener.home && (
              <CSSTransition key="home" timeout={500} classNames="fade">
                <HomePage isVisible={isVisible} />
              </CSSTransition>
            )}
            {headerListener.works && (
              <CSSTransition key="works" timeout={500} classNames="fade">
                <WorksPage isVisible={isVisible} />
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
        <Footer/>
      </div>
    )
  }

  export default App;