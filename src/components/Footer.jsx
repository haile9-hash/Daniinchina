import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const [language, setLanguage] = useState('EN');

  // Language content
  const content = {
    EN: {
      copyright: `© ${new Date().getFullYear()} Dani in China. All rights reserved.`,
      developerCredit: "Design and Developed By",
      developerName: "CODEBIRUH"
    },
    中文: {
      copyright: `© ${new Date().getFullYear()} 丹尼在中国。保留所有权利。`,
      developerCredit: "设计与开发由",
      developerName: "CODEBIRUH"
    }
  };

  // Listen for language changes from navbar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('currentLanguage') || 'EN';
    setLanguage(savedLanguage);

    const handleLanguageChange = () => {
      const newLanguage = localStorage.getItem('currentLanguage') || 'EN';
      setLanguage(newLanguage);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{content[language].copyright}</p>
        <p className="developer-credit">
          {content[language].developerCredit}{' '}
          <a 
            href="https://t.me/codeBiruh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="developer-link"
          >
            {content[language].developerName}
          </a>
        </p>
      </div>
    </footer>
  );
}