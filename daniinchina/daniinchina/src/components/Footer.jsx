import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Dani in China. All rights reserved.</p>
        <p className="developer-credit">
          Design and Developed By{' '}
          <a 
            href="https://t.me/codeBiruh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="developer-link"
          >
            CODEBIRUH
          </a>
        </p>
      </div>
    </footer>
  );
}