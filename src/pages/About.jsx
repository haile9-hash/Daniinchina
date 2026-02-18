import React, { useState, useEffect } from 'react';
import '../styles/About.css';

// Import images from assets folder
import D1 from '../assets/D11.jpg';
import D2 from '../assets/D6.jpg';
import D3 from '../assets/D8.jpg';

export default function About({ isSection = false }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState('EN');
  const images = [D1, D2, D3];

  const content = {
    EN: {
      journey: "My Journey",
      paragraph1:
        "Seven years ago, I began a new chapter of my life in China – a country full of history, innovation, and heart. What started as curiosity soon turned into a deep connection with the people, culture, and everyday life that make China truly unique. Through my YouTube channel, I share authentic stories that highlight Chinese traditions, local cuisine, festivals, and the beauty of daily experiences.",
      paragraph2:
        "As an Ethiopian creator and the founder of Dani Import & Export Trading, my mission is to build cultural bridges between China and Africa. Through my vlogs, I hope to inspire understanding, appreciation, and friendship across borders – showing the world the true spirit of life in China."
    },
    中文: {
      journey: "我的旅程",
      paragraph1:
        "七年前，我踏上了在中国的新旅程 – 一个充满历史、创新与温度的国度。最初的好奇，逐渐变成了与人们、文化和日常生活之间深厚的情感纽带。通过我的优兔频道，我记录并分享中国的真实故事，展现传统、美食、节日和日常生活的独特魅力。",
      paragraph2:
        "作为一名来自埃塞俄比亚的内容创作者，同时也是丹尼进出口贸易公司的创始人，我希望通过视频搭建中非文化交流的桥梁。我的目标是让更多人了解和欣赏中国的多样与温暖，传递真实、友好与启发的故事。"
    }
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="about"
      className={isSection ? "about-section-wrapper" : "about-page"}
      style={isSection ? { scrollMarginTop: '80px' } : {}}
    >
      <div className="about-grid">
        <div className="text-content">
          <h2>{content[language].journey}</h2>
          <p>{content[language].paragraph1}</p>
          <p>{content[language].paragraph2}</p>
        </div>

        <div className="image-container">
          <img
            src={images[currentImageIndex]}
            alt="Daniel's vlog scenes from China"
            className="slideshow-image"
          />
        </div>
      </div>
    </div>
  );
}