import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const closeMenu = () => setIsOpen(false);

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? '中文' : 'EN');
  };

  // Language content - Chinese translations
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
      logo: "丹尼在中国" // Chinese translation for DANIINCHINA
    }
  };

  return (
    <nav className="navbar">
      {/* Left side - Logo that changes with language */}
      <h1 className="logo"><i>{content[language].logo}</i></h1>

      {/* Right side - Social icons + Language + Hamburger */}
      <div className="navbar-right">
        {/* Social media icons with correct colors */}
        <div className="social-icons">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="whatsapp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="x-twitter">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="telegram">
            <i className="fab fa-telegram"></i>
          </a>
        </div>

        {/* Language switcher */}
        <div className="language-switcher" onClick={toggleLanguage}>
          <span className="language-icon">{language}</span>
        </div>

        {/* Hamburger that becomes X when clicked */}
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="hamburger-line line1"></span>
          <span className="hamburger-line line2"></span>
          <span className="hamburger-line line3"></span>
        </div>
      </div>

      {/* Full page overlay menu */}
      <div className={`fullpage-menu ${isOpen ? 'open' : ''}`}>
        {/* Close X button */}
        <div className="close-icon" onClick={closeMenu}>
          <span>×</span>
        </div>

        {/* Navigation links with language support */}
        <div className="menu-content">
          <Link to="/" onClick={closeMenu} className="menu-link">{content[language].home}</Link>
          <Link to="/about" onClick={closeMenu} className="menu-link">{content[language].about}</Link>
          <Link to="/blog" onClick={closeMenu} className="menu-link">{content[language].blogs}</Link>
          <Link to="/contact" onClick={closeMenu} className="menu-link">{content[language].contact}</Link>
        </div>

        {/* Social media icons in menu with correct colors */}
        <div className="menu-social-icons">
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="whatsapp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="x-twitter">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="telegram">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}