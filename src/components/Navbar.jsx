import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    const newLang = language === 'EN' ? '中文' : 'EN';
    setLanguage(newLang);
    localStorage.setItem('currentLanguage', newLang);
    window.dispatchEvent(new Event('languageChange'));
  };

  const goToHome = () => {
    navigate('/');
    setIsOpen(false);
  };

  const content = {
    EN: { home: 'Home', about: 'About', blogs: 'Blogs', contact: 'Contact', tours: 'Tours', logo: 'DANIINCHINA' },
    中文: { home: '首页', about: '关于我们', blogs: '博客', contact: '联系我们', tours: '旅游', logo: '丹尼在中国' },
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <h1 className="logo" onClick={goToHome} style={{ cursor: 'pointer' }}>
        <i>{content[language].logo}</i>
      </h1>

      <div className="navbar-right">
        {/* Social icons - appear before language & hamburger */}
        <div className="social-icons desktop-only">
          <a href="https://www.instagram.com/daninchina?igsh=MW9nanIzNGlkd3FsOA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/message/X6KLKUUKNBGJE1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="whatsapp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://x.com/daninchina1?s=21&t=tLozs0s07UA-iABSCCT34g" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="x-twitter">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://t.me/Daniy3l" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="telegram">
            <i className="fab fa-telegram"></i>
          </a>
        </div>

        {/* Language */}
        <div className="language-switcher" onClick={toggleLanguage}>
          <span>{language}</span>
        </div>

        {/* Hamburger */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isOpen ? (
            <span className="close-x">×</span>
          ) : (
            <>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </>
          )}
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div className={`fullpage-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          {/* Home – hash link to top of home page */}
          <Link to="/#home" className="menu-link" onClick={() => setIsOpen(false)}>
            {content[language].home}
          </Link>
          {/* About – hash link */}
          <Link to="/#about" className="menu-link" onClick={() => setIsOpen(false)}>
            {content[language].about}
          </Link>
            {/* Tours – separate page */}
          <Link to="/tours" className="menu-link" onClick={() => setIsOpen(false)}>
            {content[language].tours}
          </Link>
          {/* Blogs – hash link */}
          <Link to="/#blog" className="menu-link" onClick={() => setIsOpen(false)}>
            {content[language].blogs}
          </Link>
          {/* Contact – hash link */}
          <Link to="/#contact" className="menu-link" onClick={() => setIsOpen(false)}>
            {content[language].contact}
          </Link>
         
        </div>
      </div>
    </nav>
  );
}