import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App"> {/* Changed from app-container to App */}
        <Navbar />
        <main className="main-content">
          {/* All sections on one page in order */}
          <section className="page-section" id="home">
            <Home />
          </section>
          <section className="page-section" id="about">
            <About />
          </section>
          <section className="page-section" id="blog">
            <Blog />
          </section>
          <section className="page-section" id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;