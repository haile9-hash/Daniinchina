import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>Hello! I’m Dani 👋, a creator and traveler exploring China’s culture and lifestyle.</p>

      <div className="about-section">
        <img src="https://via.placeholder.com/400x250" alt="Dani in China" />
        <div>
          <h2>My Journey</h2>
          <p>
            I moved to China to experience its traditions, meet incredible people, and share stories 
            that inspire curiosity about the world. Through my blog and videos, I aim to show the beauty 
            of daily life here — from food and festivals to the little cultural moments that make it special.
          </p>
        </div>
      </div>
    </div>
  );
}
