import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as BrowseRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RealisationPage from './components/Realisation-Page'
import AgencePage from './components/Agence-page'
import ContactUs from './components/ContactUs-page'
import Temoignage from './components/Temoignage-page'
import HomeWithoutLogo from './components/HomeWithotLogo'

const App = () => {
  return (
    <BrowseRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/home' element={<HomeWithoutLogo />} />
        </Routes>
        <Routes>
          <Route path='/realisations' element={<RealisationPage />} />
        </Routes>
        <Routes>
          <Route path='/agence' element={<AgencePage />} />
        </Routes>
        <Routes>
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
        <Routes>
          <Route path='/temoignage' element={<Temoignage />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </BrowseRouter>
  );
}

export default App;