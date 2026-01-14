import React, { useState } from "react";
import Layout from '../../components/Layout';
import "./Contact.css";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter,
  FaClock,
  FaWhatsapp 
} from "react-icons/fa";

// Reusable SocialIcons component
const SocialIcons = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      color: "#1877F2"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com",
      color: "#E4405F"
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com",
      color: "#1DA1F2"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/919665514055",
      color: "#25D366"
    }
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          style={{ color: social.color }}
          onMouseEnter={() => setActiveIcon(index)}
          onMouseLeave={() => setActiveIcon(null)}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

const ContactPage = () => {
  // Corrected embed URL - note the backticks for template literal
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.611105761518!2d73.48424969999999!3d16.0337475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc003c748f10ec7%3A0xcd6a3498f26a64f6!2sFuntastico%20Beach%20Resort!5e0!3m2!1sen!2sin!4v1767771915930!5m2!1sen!2sin`;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Message sent successfully!");
  };

  // WRAP EVERYTHING WITH LAYOUT COMPONENT
  return (
    <Layout resort="funtastico">
      <div className="contact-page">
        {/* REACH SECTION */}
        <section className="reach-section">
          <p className="reach-subtitle">PLEASE REACH OUT TO US</p>
          <p className="reach-description">
            In case you have any query about our Resort (Funtastico Beach Resort),
            or want to enquire about room availability, or anything else,
            please feel free to reach out. You can call us, email, or use the form below.
          </p>

          <div className="reach-cards">
            <div className="reach-card">
              <div className="icon-wrapper" style={{ backgroundColor: '#ff6b6b' }}>
                <FaMapMarkerAlt className="icon" style={{ color: '#fff' }} />
              </div>
              <h3>Address</h3>
              <p>Devbag Road, Tarkarli, Maharashtra 416606</p>
            </div>

            <div className="reach-card">
              <div className="icon-wrapper" style={{ backgroundColor: '#2dce1f' }}>
                <FaPhoneAlt className="icon" style={{ color: '#fff' }} />
              </div>
              <h3>Phone</h3>
              <a href="tel:+919404050550" className="contact-link">
                +91 9404050550
              </a>
              
            </div>

            <div className="reach-card">
              <div className="icon-wrapper" style={{ backgroundColor: '#ffe66d' }}>
                <FaEnvelope className="icon" style={{ color: '#1a1a1a' }} />
              </div>
              <h3>Email</h3>
              <a href="mailto:KinaraResort@gmail.com" className="contact-link">
                FuntasticoResort@gmail.com
              </a>
            
            </div>

            <div className="reach-card">
              <div className="icon-wrapper" style={{ backgroundColor: '#9b59b6' }}>
                <FaClock className="icon" style={{ color: '#fff' }} />
              </div>
              <h3>Hours</h3>
              <p className="hours-detail">Check-in: 12:00 PM</p>
              <p className="hours-detail">Check-out: 10:00 AM</p>
            </div>
          </div>
        </section>

        {/* MAP + FORM SECTION */}
        <div className="contact-map-section">
          <div className="map-form-section">
            {/* MAP SECTION */}
            <div className="map-container">
              <div className="map-header">
                
              </div>
              <iframe
                src={embedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Funtastico Beach Resort"
                className="map-iframe"
              />
              <div className="map-actions">
                <a 
                  href="https://maps.google.com/?q=Funtastico+Beach+Resort+Devbag+Road+Tarkarli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="get-directions-btn"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="contact-form-section">
              <div className="form-header">
                <h3>Contact Form</h3>
                
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      placeholder="Enter your email" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      placeholder="Enter your phone number" 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      placeholder="What is this regarding?" 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message"
                    placeholder="Please provide details about your inquiry..." 
                    rows="1" 
                    required
                  ></textarea>
                </div>

                <div className="form-footer">
                  <button type="submit" className="send-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;