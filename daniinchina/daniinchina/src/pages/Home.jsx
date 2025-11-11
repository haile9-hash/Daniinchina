import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to <span className="highlight">Dani in China</span></h1>
        <p>Exploring culture, food, and adventures across China — one story at a time.</p>
        <a href="/blog" className="btn-primary">Read the Blog</a>
      </section>

      <section className="intro">
        <h2>Discover China Through My Lens 🇨🇳</h2>
        <p>
          Join me as I document life, language, and culture while living in the heart of China. 
          Expect travel tips, vlogs, and stories that bring you closer to real experiences.
        </p>
      </section>
    </div>
  );
}
