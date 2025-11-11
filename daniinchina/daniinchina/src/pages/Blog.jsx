import React, { useRef, useEffect, useState } from 'react';
import '../styles/Blog.css';
import '../styles/About.css';

export default function Blog() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollInterval = useRef(null);

  const videos = [
    {
      id: 'video1',
      title: 'The shoking moment',
      thumbnail: 'https://img.youtube.com/vi/hrrtkr0oL6w/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=hrrtkr0oL6w'
    },
    {
      id: 'video2',
      title: 'Speaking perfect chinese',
      thumbnail: 'https://img.youtube.com/vi/kflYHZAfFI8/maxresdefault.jpg',
      url: 'https://youtube.com/watch?kflYHZAfFI8'
    },
    {
      id: 'video3',
      title: 'Luxury Train in China',
      thumbnail: 'https://img.youtube.com/vi/VINXPJ_aawA/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=VINXPJ_aawA'
    },
    {
      id: 'video4',
      title: 'What Chinese People Eat',
      thumbnail: 'https://img.youtube.com/vi/KN5Xks2M300/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=KN5Xks2M300'
    },
    {
      id: 'video5',
      title: 'New virus in china',
      thumbnail: 'https://img.youtube.com/vi/tWv3CbdAnj0/maxresdefault.jpg',
      url: 'https://youtube.com/watch?v=tWv3CbdAnj0'
    },
  ];

  // Duplicate videos for infinite scroll
  const duplicatedVideos = [...videos, ...videos];

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth / 3; // Smoother scroll amount

    if (direction === 'right') {
      const newScrollLeft = scrollLeft + scrollAmount;
      const maxScroll = scrollWidth / 2; // Since we duplicated the items

      if (newScrollLeft >= maxScroll) {
        // When reaching the end, reset to the beginning
        scrollRef.current.scrollLeft = 0;
      } else {
        scrollRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    } else {
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const startAutoScroll = () => {
    if (scrollInterval.current) return;

    scrollInterval.current = setInterval(() => {
      if (!scrollRef.current || isPaused) return;
      scroll('right');
    }, 3000); // Adjust speed here (milliseconds)
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    // Initialize scroll position
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }

    startAutoScroll();
    return () => stopAutoScroll();
  }, []);


  return (
    <div className="blog-page">
      <h1>Blogs</h1>
      <p>check out my visual travel story</p>

      <div
        className={`video-gallery-container ${isPaused ? 'paused' : ''}`}
        onMouseEnter={() => {
          setIsPaused(true);
          stopAutoScroll();
        }}
        onMouseLeave={() => {
          setIsPaused(false);
          startAutoScroll();
        }}
      >
        <button
          className="scroll-btn left"
          onClick={(e) => {
            e.stopPropagation();
            scroll('left');
          }}
        >
          &#10094;
        </button>
        <div
          className="video-gallery"
          ref={scrollRef}
        >
          {duplicatedVideos.map((video, index) => (
            <div
              key={`${video.id}-${index}`}
              className="video-thumbnail"
              aria-hidden={index >= videos.length}
            >
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-overlay">
                  <div className="play-button">
                    <span>▶</span> Start Watching
                  </div>
                </div>
                <h4>{video.title}</h4>
              </a>
            </div>
          ))}
        </div>
        <button
          className="scroll-btn right"
          onClick={(e) => {
            e.stopPropagation();
            scroll('right');
          }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
