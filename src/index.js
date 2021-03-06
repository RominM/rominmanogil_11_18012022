// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/About';
import Accomodation from './pages/accomodation/Accomodation';
import Error from './pages/error404/Error';
// Style
import './style/reset.scss';
import './style/root.scss';

// render
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="page-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<AboutUs />} />
          <Route path="/logement/:id" element={<Accomodation />} />
          <Route path="/not-found" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

//thx