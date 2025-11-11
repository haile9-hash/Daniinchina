import React, { useState, useEffect } from 'react';
import '../styles/Contact.css';

// --- Success Message Component ---
const SuccessMessage = ({ isVisible, language }) => {
  const successMessages = {
    EN: "Thank you! Your message has been sent.",
    中文: "谢谢！您的消息已发送。"
  };

  return (
    <div className={`success-message ${isVisible ? '' : 'hidden-message'}`}>
      {successMessages[language]}
    </div>
  );
};

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [language, setLanguage] = useState('EN');

  // Language content
  const content = {
    EN: {
      title: "Contact",
      nameLabel: "Hello, my name is",
      namePlaceholder: "enter your name",
      countryLabel: "My Country is",
      countryPlaceholder: "enter your country",
      emailLabel: "My email is",
      emailPlaceholder: "enter your email address here",
      messageLabel: "My Message",
      messagePlaceholder: "write your message here",
      sending: "Sending...",
      sendButton: "Send Message",
      socialTitle: "Follow Me"
    },
    中文: {
      title: "联系我",
      nameLabel: "你好，我的名字是",
      namePlaceholder: "请输入您的姓名",
      countryLabel: "我的国家是",
      countryPlaceholder: "请输入您的国家",
      emailLabel: "我的邮箱是",
      emailPlaceholder: "请在此输入您的邮箱地址",
      messageLabel: "我的留言",
      messagePlaceholder: "请在此写下您的留言",
      sending: "发送中...",
      sendButton: "发送消息",
      socialTitle: "关注我"
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submission (simulated):', formData);

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);

      setFormData({
        name: '',
        country: '',
        email: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-container">
      <SuccessMessage isVisible={showSuccess} language={language} />

      <h2 className="contact-title font-script">
        {content[language].title}
      </h2>

      <div className="form-card">
        <form onSubmit={handleSubmit} className="contact-form">

          <div className="form-group-custom">
            <label htmlFor="name" className="label-custom">
              {content[language].nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={content[language].namePlaceholder}
              required
              className="input-custom"
            />
          </div>

          <div className="form-group-custom">
            <label htmlFor="country" className="label-custom">
              {content[language].countryLabel}
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder={content[language].countryPlaceholder}
              required
              className="input-custom"
            />
          </div>

          <div className="form-group-custom">
            <label htmlFor="email" className="label-custom">
              {content[language].emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={content[language].emailPlaceholder}
              required
              className="input-custom"
            />
          </div>

          <div className="form-group-custom">
            <label htmlFor="message" className="label-custom">
              {content[language].messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder={content[language].messagePlaceholder}
              required
              className="input-custom resize-none"
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="send-button"
          >
            {isSubmitting ? content[language].sending : content[language].sendButton}
          </button>
        </form>
      </div>

      {/* --- Social Links --- */}
      <div className="social-links">
        <h3>{content[language].socialTitle}</h3>
        <div className="social-icons">
          <a
            href="https://youtube.com/@daniinchina"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon youtube"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://instagram.com/daniinchina"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="mailto:dani@example.com"
            className="social-icon email"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div id="contact" className="app-container">
      <ContactForm />
    </div>
  );
}
