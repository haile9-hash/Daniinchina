// src/pages/Tours.jsx
import React, { useState } from 'react';
import '../styles/Tours.css'; // create this CSS file for styling

export default function Tours() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dates: '',
    goal: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', dates: '', goal: '' });
  };

  return (
    <div className="tours-page">
      {/* Hero / Intro */}
      <section className="hero">
        <h1>Explore China with Our Unique Tours</h1>
        <p>Custom tours designed for first-timers, business travelers, and adventure seekers.</p>
      </section>

      {/* Tour Packages */}
      <section className="packages">
        <h2>Tour Packages</h2>
        <div className="package-cards">
          <div className="package-card">
            <h3>Shanghai Explorer</h3>
            <p>Discover Shanghai's hidden gems and iconic landmarks.</p>
            <p>Duration: 3 Days</p>
          </div>
          <div className="package-card">
            <h3>Business Essentials</h3>
            <p>Guided tours for business travelers with networking opportunities.</p>
            <p>Duration: 2 Days</p>
          </div>
          <div className="package-card">
            <h3>First-Time China</h3>
            <p>Perfect introduction to China's culture, food, and cities.</p>
            <p>Duration: 5 Days</p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="included">
        <h2>What's Included</h2>
        <ul>
          <li>Expert guides & translators</li>
          <li>Transportation between cities</li>
          <li>Curated local experiences</li>
          <li>Personalized itinerary</li>
          <li>Hotel recommendations</li>
        </ul>
      </section>

      {/* Inquiry Form */}
      <section className="inquiry-form">
        <h2>Book a Tour / Consultation</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="dates"
            placeholder="Preferred Dates"
            value={formData.dates}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="goal"
            placeholder="Tour Goal / Interests"
            value={formData.goal}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Inquiry</button>
        </form>
      </section>
    </div>
  );
}
