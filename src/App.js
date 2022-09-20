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
import NotFoundPage from './components/NotFoundPage'

const App = () => {
  return (
    <BrowseRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<HomeWithoutLogo />} />
          <Route path='/realisations' element={<RealisationPage />} />
          <Route path='/agence' element={<AgencePage />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/temoignage' element={<Temoignage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </div>
    </BrowseRouter>
  );
}

export default App;