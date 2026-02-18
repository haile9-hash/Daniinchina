import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Tours from './pages/Tours';

import './styles/App.css';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToHash />
        <main className="main-content">
          <Routes>
            {/* Home page – all four sections stacked */}
            <Route
              path="/"
              element={
                <>
                  <Home isSection={true} />
                  <About isSection={true} />
                  <Blog isSection={true} />
                  <Contact isSection={true} />
                </>
              }
            />
            <Route path="/guide" element={<Guide />} />
            <Route path="/tours" element={<Tours />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;