// src/pages/Tours.jsx
import React, { useState, useEffect } from 'react';
import { FaCity, FaBriefcase, FaGlobeAsia } from 'react-icons/fa'; // fixed imports
import '../styles/Tours.css';

export default function Tours() {
  const [language, setLanguage] = useState('EN');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dates: '',
    goal: '',
  });

  const content = {
    EN: {
      heroTitle: "Explore China with Our Unique Tours",
      heroText:
        "Custom tours designed for first-timers, business travelers, and adventure seekers.",
      packagesTitle: "Tour Packages",
      packages: [
        {
          title: "Shanghai Explorer",
          desc: "Discover Shanghai's hidden gems and iconic landmarks.",
          duration: "3 Days",
          icon: <FaCity />,
        },
        {
          title: "Business Essentials",
          desc: "Guided tours for business travelers with networking opportunities.",
          duration: "2 Days",
          icon: <FaBriefcase />,
        },
        {
          title: "First-Time China",
          desc: "Perfect introduction to China's culture, food, and cities.",
          duration: "5 Days",
          icon: <FaGlobeAsia />,
        },
      ],
      includedTitle: "What's Included",
      includedList: [
        "Expert guides & translators",
        "Transportation between cities",
        "Curated local experiences",
        "Personalized itinerary",
        "Hotel recommendations",
      ],
      formTitle: "Book a Tour / Consultation",
      placeholders: {
        name: "Your Name",
        email: "Your Email",
        dates: "Preferred Dates",
        goal: "Tour Goal / Interests",
      },
      submit: "Submit Inquiry",
      success: "Thank you! We will contact you soon.",
    },
    中文: {
      heroTitle: "与我们一起探索中国",
      heroText:
        "为首次旅行者、商务人士和探险爱好者量身定制的中国之旅。",
      packagesTitle: "旅游套餐",
      packages: [
        {
          title: "上海探索之旅",
          desc: "探索上海的隐藏宝藏与标志性景点。",
          duration: "3天",
          icon: <FaCity />,
        },
        {
          title: "商务必备之旅",
          desc: "为商务人士设计的导览行程与交流机会。",
          duration: "2天",
          icon: <FaBriefcase />,
        },
        {
          title: "初次中国之旅",
          desc: "全面了解中国文化、美食和城市的最佳选择。",
          duration: "5天",
          icon: <FaGlobeAsia />,
        },
      ],
      includedTitle: "行程包含",
      includedList: [
        "专业导游与翻译",
        "城市间交通安排",
        "精选本地体验",
        "个性化行程规划",
        "酒店推荐",
      ],
      formTitle: "预订行程 / 咨询",
      placeholders: {
        name: "您的姓名",
        email: "您的邮箱",
        dates: "预计日期",
        goal: "旅行目标 / 兴趣",
      },
      submit: "提交咨询",
      success: "感谢您！我们将尽快与您联系。",
    },
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(content[language].success);
    setFormData({ name: '', email: '', dates: '', goal: '' });
  };

  return (
    <div className="tours-page">
      <section className="tours-hero">
        <h1>{content[language].heroTitle}</h1>
        <p>{content[language].heroText}</p>
      </section>

      <section className="tours-section">
        <h2>{content[language].packagesTitle}</h2>
        <div className="package-grid">
          {content[language].packages.map((pkg, index) => (
            <div className="package-card" key={index}>
              <span className="package-icon">{pkg.icon}</span>
              <h3>{pkg.title}</h3>
              <p className="package-desc">{pkg.desc}</p>
              <p className="package-duration">{pkg.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tours-section light">
        <h2>{content[language].includedTitle}</h2>
        <div className="included-grid">
          {content[language].includedList.map((item, index) => (
            <div className="included-card" key={index}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="tours-section">
        <h2>{content[language].formTitle}</h2>
        <form onSubmit={handleSubmit} className="tours-form">
          <input
            type="text"
            name="name"
            placeholder={content[language].placeholders.name}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={content[language].placeholders.email}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="dates"
            placeholder={content[language].placeholders.dates}
            value={formData.dates}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="goal"
            placeholder={content[language].placeholders.goal}
            value={formData.goal}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn-primary">
            {content[language].submit}
          </button>
        </form>
      </section>
    </div>
  );
}
