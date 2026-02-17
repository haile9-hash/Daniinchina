import React from "react";
import "../styles/Guide.css";

export default function Guide() {
  return (
    <div className="guide-page">

      {/* HERO SECTION */}
      <section className="guide-hero">
        <h1>🌏 The Bridge to China</h1>
        <p>
          A practical guide to help you travel, explore, and understand China with confidence.
        </p>
        <a
          href="#pricing"
          className="btn-primary"
        >
          Get Instant Access
        </a>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="guide-section">
        <h2>✅ What You’ll Learn</h2>
        <ul>
          <li>How to prepare before arriving</li>
          <li>Essential apps & payment setup</li>
          <li>Cultural tips & survival phrases</li>
          <li>Business & opportunity insights</li>
          <li>How to explore like a local</li>
        </ul>
      </section>

      {/* WHO IT'S FOR */}
      <section className="guide-section">
        <h2>🎯 Who This Guide Is For</h2>
        <ul>
          <li>First-time visitors to China</li>
          <li>Ethiopian & diaspora travelers</li>
          <li>Entrepreneurs exploring opportunities</li>
          <li>Students & curious travelers</li>
        </ul>
      </section>

      {/* PRICING */}
      <section className="guide-section" id="pricing">
        <h2>💰 Choose Your Access</h2>

        <div className="pricing-container">

          <div className="pricing-card">
            <h3>Starter — $29</h3>
            <p>✔️ Full guide</p>
            <p>✔️ Checklists</p>
            <p>✔️ First-week plan</p>
            <a href="#" className="btn-secondary">Buy Now</a>
          </div>

          <div className="pricing-card">
            <h3>Premium — $79</h3>
            <p>✔️ Everything in Starter</p>
            <p>✔️ City itineraries</p>
            <p>✔️ Business insights</p>
            <a href="#" className="btn-secondary">Buy Now</a>
          </div>

          <div className="pricing-card">
            <h3>VIP — $199</h3>
            <p>✔️ Everything in Premium</p>
            <p>✔️ Personal consultation call</p>
            <p>✔️ Custom travel plan</p>
            <a href="#" className="btn-secondary">Buy Now</a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="guide-cta">
        <h2>Start Your Journey With Confidence</h2>
        <p>
          Understanding China changes everything. Let this guide be your bridge.
        </p>
        <a href="#" className="btn-primary">Get the Guide</a>
      </section>

    </div>
  );
}
