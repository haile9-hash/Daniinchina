import React, { useEffect, useState } from 'react';
import '../styles/Blog.css';

export default function Blog({ isSection = false }) {
  const [isPaused, setIsPaused] = useState(false);
  const [language, setLanguage] = useState('EN');

  const content = {
    EN: {
      title: "Blogs",
      subtitle: "check out my visual travel story",
      playButton: "Start Watching"
    },
    中文: {
      title: "博客",
      subtitle: "观看我的视觉旅行故事",
      playButton: "开始观看"
    }
  };

  const videos = [
    {
      id: 'video1',
      title: { EN: 'The shocking moment', 中文: '震惊的时刻' },
      thumbnail: 'https://img.youtube.com/vi/hrrtkr0oL6w/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=hrrtkr0oL6w'
    },
    {
      id: 'video2',
      title: { EN: 'Speaking perfect chinese', 中文: '说一口流利的中文' },
      thumbnail: 'https://img.youtube.com/vi/kflYHZAfFI8/maxresdefault.jpg',
      url: 'https://youtube.com/watch?kflYHZAfFI8'
    },
    {
      id: 'video3',
      title: { EN: 'Luxury Train in China', 中文: '中国的豪华列车' },
      thumbnail: 'https://img.youtube.com/vi/VINXPJ_aawA/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=VINXPJ_aawA'
    },
    {
      id: 'video4',
      title: { EN: 'What Chinese People Eat', 中文: '中国人吃什么' },
      thumbnail: 'https://img.youtube.com/vi/KN5Xks2M300/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=KN5Xks2M300'
    },
    {
      id: 'video5',
      title: { EN: 'New virus in china', 中文: '中国的新病毒' },
      thumbnail: 'https://img.youtube.com/vi/tWv3CbdAnj0/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=tWv3CbdAnj0'
    },
  ];

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

  const duplicatedVideos = [...videos, ...videos];

  return (
    <div
      id="blog"
      className={isSection ? "blog-section" : "blog-page"}
      style={isSection ? { scrollMarginTop: '80px' } : {}}
    >
      <h2>{content[language].title}</h2>
      <p className="blog-subtitle">{content[language].subtitle}</p>

      <div
        className={`video-gallery-container ${isPaused ? 'paused' : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="video-gallery">
          {duplicatedVideos.map((video, index) => (
            <div key={`${video.id}-${index}`} className="video-thumbnail">
              <a href={video.url} target="_blank" rel="noopener noreferrer" className="video-link">
                <img src={video.thumbnail} alt={video.title[language]} />
                <div className="video-overlay">
                  <div className="play-button">
                    <span>▶</span> {content[language].playButton}
                  </div>
                </div>
                <div className="video-title-container">
                  <h4>{video.title[language]}</h4>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}