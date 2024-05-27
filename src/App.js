// App.js

import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Pedagogie from './pages/Pedagogie/Pedagogie';
import Fonctionnement from './pages/Fonctionnement/Fonctionnement';
import ResultatBrevet from './pages/ResultatBrevet/ResultatBrevet';
import Inscription from './pages/Inscription/Inscription';
import Gallery from './Components/Gallery/Gallery';
import Error404 from './pages/404/404';
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer';
import Acces from './pages/Acces/Acces';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/pedagogie" element={<Pedagogie />} />
          <Route path="/fonctionnement" element={<Fonctionnement/>} />
          <Route path="/resultat-brevet" element={<ResultatBrevet/>} />
          <Route path="/inscription" element={<Inscription/>} />
          <Route path="/galerie-photo" element={<Gallery/>} />
          <Route path="/Accès" element={<Acces/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;