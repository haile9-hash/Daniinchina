import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

export default function Home() {
  const [language, setLanguage] = useState('EN');
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed] = useState(100);

  // Text content in both languages
  const textContent = {
    EN: "I'm Daniel Anteneh (Dani in China) a digital creator, YouTuber, and founder of Dani Import & Export Trading.",
    中文: "我是丹尼尔·安特内 (丹尼在中国)，数字内容创作者、优兔视频博主，以及丹尼进出口贸易公司创始人。"
  };

  // Sync language with navbar
  useEffect(() => {
    const handleLanguageChange = () => {
      const lang = localStorage.getItem('currentLanguage') || 'EN';
      setLanguage(lang);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    handleLanguageChange();

    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentText = textContent[language];

    const handleTyping = () => {
      setDisplayText(currentText.substring(0, displayText.length + (isDeleting ? -1 : 1)));

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, language, typingSpeed]);

  const scrollToBlog = () => {
    const blogSection = document.getElementById('blog');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="home-page">
      <section className="hero">
        <div className="hero-content">
          
          {/* Animated Text Container */}
          <div className="animated-text-container">
            <div className="typing-text">
              <strong>{displayText}</strong>
              <span className="cursor">|</span>
            </div>
          </div>

          <button onClick={scrollToBlog} className="btn-primary">
            {language === 'EN' ? "Watch Now" : "立即观看"}
          </button>
        </div>
      </section>
    </div>
  );
}