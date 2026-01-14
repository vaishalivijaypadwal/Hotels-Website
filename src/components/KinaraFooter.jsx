// src/components/FuntasticoFooter.jsx
import React from "react";
import "./KinaraFooter.css";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt,
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaWhatsapp,
  FaUmbrellaBeach,
  FaWater,
  FaFish,
  FaSwimmer
} from "react-icons/fa";

const KinaraFooter = () => {
  // SocialIcons component for reuse
  const SocialIcons = () => {
    const socialLinks = [
      { icon: <FaFacebookF />, url: "https://facebook.com/funtasticoresort", color: "#1877F2" },
      { icon: <FaInstagram />, url: "https://instagram.com/funtasticoresort", color: "#E4405F" },
      { icon: <FaTwitter />, url: "https://twitter.com/funtasticoresort", color: "#1DA1F2" },
      { icon: <FaWhatsapp />, url: "https://wa.me/918956770162", color: "#25D366" }
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
          >
            {social.icon}
          </a>
        ))}
      </div>
    );
  };

  return (
    <footer className="contact-footer">
      {/* FOOTER SECTION WITH CONTACT INFO */}
      <div className="footer-content">
        {/* CONTACT INFO CARD */}
        <div className="contact-info-card">
          <div className="contact-left">
            <div className="resort-header">
             
              <h2>Contact Us</h2>
            </div>

            <ul className="contact-info-list">
              <li>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:KinaraResort@gmail.com">KinaraResort@gmail.com</a>
              </li>
              <li>
                <FaPhoneAlt className="footer-icon" />
                <div className="phone-numbers">
                  <a href="tel:+919665514055">+91 09665514055</a>
                 
                </div>
              </li>
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                <span>Malvan-Tarkarli Road, Vayari, Bhutnath, Malvan, Maharashtra 416606</span>
              </li>
            </ul>
            
            <div className="social-section">
              <h4>Connect With Us</h4>
              <br />
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
              <a href="/kinara/booking">Book Now</a>
            </li>
          </ul>
        </div>

        {/* DEVELOPER CREDIT */}
        <div className="footer-newsletter">
          <h3>Developed By</h3>
          <p>KA IT Solutions</p>
        </div>
      </div> {/* Closing div for .footer-content */}

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kinara Resort. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="/terms">Terms of Service</a>
          <span className="separator">|</span>
          <a href="/cancellation">Cancellation Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default KinaraFooter;