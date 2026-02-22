import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const textContent = {
  EN: "I'm Daniel Anteneh (Dani in China), a digital creator, YouTuber, and founder of Dani Import & Export Trading.",
  中文: "我是丹尼尔·安特内 (丹尼在中国)，数字内容创作者、优兔视频博主，以及丹尼进出口贸易公司创始人。"
};

export default function Home() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('EN');
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleLanguageChange = () => {
      const lang = localStorage.getItem('currentLanguage') || 'EN';
      setLanguage(lang);
      setDisplayText('');
      setIsDeleting(false);
      setTextIndex(0);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    handleLanguageChange();

    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  useEffect(() => {
    const currentText = textContent[language];
    let timer;

    if (!isDeleting && textIndex < currentText.length) {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && textIndex === currentText.length) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && textIndex > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentText.substring(0, textIndex - 1));
        setTextIndex(textIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && textIndex === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [textIndex, isDeleting, language, textContent]); // ✅ textContent added here

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="typing-text">
            <strong>{displayText}</strong>
            <span className="cursor">|</span>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/blog')}>
              {language === 'EN' ? 'Watch Now' : '立即观看'}
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/guide')}>
              {language === 'EN' ? 'Get the Guide' : '获取指南'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}