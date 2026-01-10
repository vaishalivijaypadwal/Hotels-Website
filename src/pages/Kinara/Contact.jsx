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
import "./Contact.css";

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
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.6706572759841!2d73.48750325826643!3d16.030028405682973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0028b437f61bb%3A0x6e377c67baaa19e9!2sKinara%20Resort!5e0!3m2!1sen!2sin!4v1767591325230!5m2!1sen!2sin";

  return (
    <div className="contact-page">
      {/* REACH SECTION */}
      <section className="reach-section">
        <p className="reach-subtitle">PLEASE REACH OUT TO US</p>
        <p className="reach-description">
          In case you have any query about our Resort (Kinara Resort),
          or want to enquire about room availability, or anything else,
          please feel free to reach out. You can call us, email, or use the form below.
        </p>

        <div className="reach-cards">
          <div className="reach-card">
            <div className="icon-wrapper" style={{ backgroundColor: '#ff6b6b' }}>
              <FaMapMarkerAlt className="icon" style={{ color: '#fff' }} />
            </div>
            <h3>Address</h3>
            <p>Malvan-Tarkarli Road, Vayari, Bhutnath, Malvan, Maharashtra 416606</p>
          </div>

          <div className="reach-card">
            <div className="icon-wrapper" style={{ backgroundColor: '#2dce1f' }}>
              <FaPhoneAlt className="icon" style={{ color: '#fff' }} />
            </div>
            <h3>Phone</h3>
            <a href="tel:+9109665514055" className="contact-link">
              +91 09665514055
            </a>
            
          </div>

          <div className="reach-card">
            <div className="icon-wrapper" style={{ backgroundColor: '#ffe66d' }}>
              <FaEnvelope className="icon" style={{ color: '#1a1a1a' }} />
            </div>
            <h3>Email</h3>
            <a href="mailto:KinaraResort@gmail.com" className="contact-link">
              KinaraResort@gmail.com
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
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Kinara Resort"
              className="map-iframe"
            />
           
          </div>

          {/* CONTACT FORM */}
          <div className="contact-form-section">
            <div className="form-header">
              <h3>Contact Form</h3>
             
            </div>
            
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name </label>
                  <input type="text" id="name" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email </label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone </label>
                  <input type="tel" id="phone" placeholder="Enter your phone number" />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" placeholder="What is this regarding?" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message </label>
                <textarea id="message" placeholder="Please provide details about your inquiry..." rows="1" required></textarea>
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

      {/* FOOTER SECTION WITH CONTACT INFO */}
      <footer className="contact-footer">
        <div className="footer-content">
          {/* CONTACT INFO CARD */}
          <div className="contact-info-card">
            <div className="contact-left">
             <h2>Contact Us</h2>

              <ul className="contact-info-list">
                <li>
                  <FaEnvelope className="footer-icon" />
                  
                  <a href="mailto:KinaraResort@gmail.com">KinaraResort@gmail.com</a>
                </li>
                <li>
                  <FaPhoneAlt className="footer-icon" />
                 
                  <a href="tel:+919665514055">+91 9665514055</a>
                </li>
                <li>
                  <FaMapMarkerAlt className="footer-icon" />
                 
                  <span>Malvan-Tarkarli Road, Vayari, Bhutnath, Malvan, Maharashtra 416606</span>
                </li>
                <li>
                 
                 
                </li>
              </ul>
              
              <div className="social-section">
                <h4>Connect With Us</h4>
               <br></br>
               
                <SocialIcons />
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-quick-links">
            <h3>Quick Links</h3>
            <ul>
  <li>
    <a href="/kinara">Home</a>
  </li>

  <li>
    <a href="/kinara/about">About Us</a>
  </li>

  <li>
    <a href="/kinara/gallery">Gallery</a>
  </li>

  <li>
    <a href="/kinara/contact">Contact</a>
  </li>

  <li>
    <a href="/kinara/book-now">Book Now</a>
  </li>
</ul>

          </div>

          {/* NEWSLETTER */}
          <div className="footer-newsletter">
            <h3>Developed By</h3>
            <p>KA IT Solutions</p>
            
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kinara Resort. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cancellation">Cancellation Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;