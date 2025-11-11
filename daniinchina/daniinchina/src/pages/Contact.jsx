// import React from 'react';
// import '../styles/Contact.css';

// export default function Contact() {
//   return (
//     <div className="contact-page">
//       <h1>Contact Me 📬</h1>
//       <p>Have a question, collaboration idea, or just want to say hi?</p>

//       <form className="contact-form">
//         <div className="form-group">
//           <label htmlFor="name">Your Name</label>
//           <input type="text" id="name" placeholder="Enter your name" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Your Email</label>
//           <input type="email" id="email" placeholder="Enter your email" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
//         </div>

//         <button type="submit" className="btn-primary">Send Message</button>
//       </form>

//       <div className="social-links">
//         <h3>Follow Me</h3>
//         <a href="https://youtube.com/@daniinchina" target="_blank" rel="noopener noreferrer">YouTube</a>
//         <a href="https://instagram.com/daniinchina" target="_blank" rel="noopener noreferrer">Instagram</a>
//         <a href="mailto:dani@example.com">Email</a>
//       </div>
//     </div>
//   );
// }





import React, { useState } from 'react';
import '../styles/Contact.css'; // Link to the external stylesheet


// --- Success Message Component ---
const SuccessMessage = ({ isVisible }) => {
  // Uses the 'success-message' and 'hidden-message' classes defined in Contact.css
  return (
    <div
      className={`success-message ${isVisible ? '' : 'hidden-message'}`}
    >
      Thank you! Your message has been sent.
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

    // --- NO BACKEND LOGIC HERE ---
    // Simulate submission delay for a good user experience
    setTimeout(() => {
      console.log('Form submission (simulated):', formData);

      // 1. Show success message (will fade out due to state reset)
      setShowSuccess(true);

      // 2. Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      // 3. Reset form and submission state
      setFormData({
        name: '',
        country: '',
        email: '',
        message: '',
      });
      setIsSubmitting(false);

    }, 1000); // 1 second delay
  };

  return (
    <div className="contact-container">

      <SuccessMessage isVisible={showSuccess} />

      <h2 className="contact-title font-script">
        Contact
      </h2>

      <div className="form-card">
        <form onSubmit={handleSubmit} className="contact-form">

          {/* Name Input */}
          <div className="form-group-custom">
            <label htmlFor="name" className="label-custom">
              Hello, my name is
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="enter your name"
              required
              className="input-custom"
            />
          </div>

          {/* Country Input */}
          <div className="form-group-custom">
            <label htmlFor="country" className="label-custom">
              My Country is
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="enter your country"
              required
              className="input-custom"
            />
          </div>

          {/* Email Input */}
          <div className="form-group-custom">
            <label htmlFor="email" className="label-custom">
              My email is
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="enter your email address here"
              required
              className="input-custom"
            />
          </div>

          {/* Message Textarea */}
          <div className="form-group-custom">
            <label htmlFor="message" className="label-custom">
              My Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="write your message here"
              required
              className="input-custom resize-none"
              disabled={isSubmitting}
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="send-button"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Main App Component (for wrapping/display) ---
export default function App() {
  return (
    <div className="app-container">
      <ContactForm />
    </div>
  );
}

