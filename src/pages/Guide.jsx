import React, { useState, useEffect } from "react";
import "../styles/Guide.css";

export default function Guide() {
  const [language, setLanguage] = useState("EN");

  const content = {
    EN: {
      heroTitle: " The Bridge to China",
      heroText:
        "A practical guide to help you travel, explore, and understand China with confidence.",
      heroBtn: "Get Instant Access",

      learnTitle: "What You’ll Learn",
      learnList: [
        "How to prepare before arriving",
        "Essential apps & payment setup",
        "Cultural tips & survival phrases",
        "Business & opportunity insights",
        "How to explore like a local",
      ],

      whoTitle: "Who This Guide Is For",
      whoList: [
        "First-time visitors to China",
        "Ethiopian & diaspora travelers",
        "Entrepreneurs exploring opportunities",
        "Students & curious travelers",
      ],

      pricingTitle: "Choose Your Access",
      starter: "Starter",
      premium: "Premium",
      vip: "VIP",

      buyNow: "Buy Now",

      ctaTitle: "Start Your Journey With Confidence",
      ctaText:
        "Understanding China changes everything. Let this guide be your bridge.",
      ctaBtn: "Get the Guide",
    },

    中文: {
      heroTitle: "🌏 通往中国的桥梁",
      heroText: "一本实用指南，帮助您自信地旅行、探索并了解中国。",
      heroBtn: "立即获取",

      learnTitle: "您将学到什么",
      learnList: [
        "如何在到达前做好准备",
        "必备应用与支付设置",
        "文化提示与生存用语",
        "商业与机会洞察",
        "像当地人一样探索",
        "打包技巧与必备物品",
        "了解中国礼仪",
        "出行指南：地铁、火车与网约车",
      ],

      whoTitle: "本指南适合谁",
      whoList: [
        "首次来中国的游客",
        "埃塞俄比亚及海外旅行者",
        "寻找机会的企业家",
        "学生与好奇的旅行者",
      ],

      pricingTitle: "选择您的方案",
      starter: "入门版",
      premium: "高级版",
      vip: "VIP版",

      buyNow: "立即购买",

      ctaTitle: "自信开启您的旅程",
      ctaText: "了解中国会改变一切。让这本指南成为您的桥梁。",
      ctaBtn: "获取指南",
    },
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("currentLanguage") || "EN";
    setLanguage(savedLanguage);

    const handleLanguageChange = () => {
      const newLanguage = localStorage.getItem("currentLanguage") || "EN";
      setLanguage(newLanguage);
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () =>
      window.removeEventListener("languageChange", handleLanguageChange);
  }, []);

  return (
    <div className="guide-page">

      {/* HERO */}
      <section className="guide-hero">
        <div className="hero-content">
          <h1>{content[language].heroTitle}</h1>
          <p>{content[language].heroText}</p>
          <a href="#pricing" className="btn-primary">
            {content[language].heroBtn}
          </a>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="guide-section">
        <h2>{content[language].learnTitle}</h2>
        <div className="feature-grid">
          {content[language].learnList.map((item, index) => (
            <div className="feature-card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="guide-section light">
        <h2>{content[language].whoTitle}</h2>
        <div className="feature-grid">
          {content[language].whoList.map((item, index) => (
            <div className="feature-card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="guide-section" id="pricing">
        <h2>{content[language].pricingTitle}</h2>

        <div className="pricing-container">

          <div className="pricing-card">
            <h3>{content[language].starter}</h3>
            <p className="price">$29</p>
            <a href="#" className="btn-secondary">
              {content[language].buyNow}
            </a>
          </div>

          <div className="pricing-card featured">
            <h3>{content[language].premium}</h3>
            <p className="price">$79</p>
            <a href="#" className="btn-primary">
              {content[language].buyNow}
            </a>
          </div>

          <div className="pricing-card">
            <h3>{content[language].vip}</h3>
            <p className="price">$199</p>
            <a href="#" className="btn-secondary">
              {content[language].buyNow}
            </a>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="guide-cta">
        <h2>{content[language].ctaTitle}</h2>
        <p>{content[language].ctaText}</p>
        <a href="#pricing" className="btn-primary">
          {content[language].ctaBtn}
        </a>
      </section>

    </div>
  );
}