import AnimatedLogo from './images/circle-logo.gif'
import './App.css';
import MidTypeWriter from './components/MidTypeWriter'
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navigation from './components/Navigation';
import Services from './components/Services'
import EndTypeWriter from './components/EndTypeWriter';
import Realisation from './components/Realisation';
import Contact from './components/Contact';
import Carousel from './components/Carousel'
import Footer from './components/Footer';

const FirstLogo = () => {
  return (
    <>
      <div className='firstLogo'>
        <img src={AnimatedLogo} />
      </div>
    </>
  )
}

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { ref: typeRefMid, inView: typeViewMid } = useInView();
  const { ref: typeRefEnd, inView: typeViewEnd } = useInView();
  return (
    <>
      <div className='App'>
        <div>
          <FirstLogo />
        </div>
        <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
        <div id='afterHeaderWrapper'>
          <div className='textTypeWriter' ref={typeRefMid}>
            {typeViewMid ? <MidTypeWriter /> : ''}
          </div>
          <Services />
          <div className='textTypeWriter' ref={typeRefEnd}>
            {typeViewEnd ? <EndTypeWriter /> : ''}
          </div>
        </div>
        <Realisation />
        <div>
          <Contact />
        </div>
        <div id='carouselContainer'>
          <Carousel />
        </div>
        <div>
          <Footer />
        </div>
      </div>
      é    </>
  );
}

export default App;