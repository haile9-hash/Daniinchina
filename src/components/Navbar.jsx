import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    const newLanguage = language === 'EN' ? '中文' : 'EN';
    setLanguage(newLanguage);
    localStorage.setItem('currentLanguage', newLanguage);
    window.dispatchEvent(new Event('languageChange'));
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const content = {
    EN: {
      home: "Home",
      about: "About",
      blogs: "Blogs", 
      contact: "Contact",
      logo: "DANIINCHINA"
    },
    中文: {
      home: "首页",
      about: "关于我们",
      blogs: "博客文章",
      contact: "联系我们",
      logo: "丹尼在中国"
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <h1 className="logo" onClick={scrollToTop} style={{cursor: 'pointer'}}>
        <i>{content[language].logo}</i>
      </h1>

      {/* Right side: Social icons, Language, Hamburger */}
      <div className="navbar-right">
        {/* Social icons - Hidden on mobile */}
        <div className="social-icons desktop-only">
          <a href="https://www.instagram.com/daninchina?igsh=MW9nanIzNGlkd3FsOA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="whatsapp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="x-twitter">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://t.me/Daniy3l" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="telegram">
            <i className="fab fa-telegram"></i>
          </a>
        </div>

        {/* Language switcher - Improved visibility */}
        <div className="language-switcher" onClick={toggleLanguage}>
          <span className="language-icon">{language}</span>
        </div>

        {/* Hamburger / X toggle - Improved visibility */}
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

      {/* Fullpage overlay menu */}
      <div className={`fullpage-menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-content">
          <button onClick={scrollToTop} className="menu-link">{content[language].home}</button>
          <button onClick={() => scrollToSection('about')} className="menu-link">{content[language].about}</button>
          <button onClick={() => scrollToSection('blog')} className="menu-link">{content[language].blogs}</button>
          <button onClick={() => scrollToSection('contact')} className="menu-link">{content[language].contact}</button>
        </div>

        {/* Social icons inside menu */}
        <div className="menu-social-icons">
          <a href="https://www.instagram.com/daninchina?igsh=MW9nanIzNGlkd3FsOA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="whatsapp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="x-twitter">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://t.me/Daniy3l" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="telegram">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}