import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Tours from './pages/Tours';

import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
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
