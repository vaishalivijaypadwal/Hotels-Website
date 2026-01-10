// src/components/FuntasticoFooter.jsx
import React from "react";
import "./FuntasticoFooter.css";
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

const FuntasticoFooter = () => {
  return (
    <footer className="funtastico-footer">
      <div className="footer-top">
        <div className="footer-content">
          {/* CONTACT INFO */}
          <div className="footer-section contact-info">
            <div className="resort-header">
              <FaUmbrellaBeach className="resort-icon" />
              <h3>Funtastico Beach Resort</h3>
            </div>
            <ul className="contact-list">
              <li>
                <FaEnvelope className="footer-icon" />
                <a href="mailto:FuntasticoResort@gmail.com">FuntasticoResort@gmail.com</a>
              </li>
              <li>
                <FaPhoneAlt className="footer-icon" />
                <a href="tel:+08956770162">+08956770162</a>
                <span className="phone-separator">|</span>
                <a href="tel:+919665514055">+91 9665514055</a>
              </li>
              <li>
                <FaMapMarkerAlt className="footer-icon" />
                <span>Devbag Road, Tarkarli, Malvan, Maharashtra 416606</span>
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-section quick-links">
            <h4>Explore</h4>
            <ul>
              <li><a href="/funtastico">Home</a></li>
              <li><a href="/funtastico/about">About Us</a></li>
              <li><a href="/funtastico/gallery">Gallery</a></li>
              <li><a href="/funtastico/contact">Contact</a></li>
              <li><a href="/funtastico/booking">Book Now</a></li>
            </ul>
          </div>

          {/* WATER ACTIVITIES */}
          <div className="footer-section activities">
            <h4>Beach Activities</h4>
            <div className="activities-list">
              <div className="activity-item">
                <FaWater className="activity-icon" />
                <span>Water Sports</span>
              </div>
              <div className="activity-item">
                <FaFish className="activity-icon" />
                <span>Fishing Trips</span>
              </div>
              <div className="activity-item">
                <FaSwimmer className="activity-icon" />
                <span>Swimming Pool</span>
              </div>
            </div>
          </div>

          {/* SOCIAL & BOOKING */}
          <div className="footer-section social-booking">
            <h4>Stay Connected</h4>
            <div className="social-icons">
              <a href="https://facebook.com/funtasticoresort" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/funtasticoresort" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/funtasticoresort" className="social-icon twitter">
                <FaTwitter />
              </a>
              <a href="https://wa.me/918956770162" className="social-icon whatsapp">
                <FaWhatsapp />
              </a>
            </div>
            <div className="booking-cta">
              <a href="/funtastico/booking" className="book-now-btn">
                Book Your Beach Stay
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Funtastico Beach Resort. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="/terms">Terms of Service</a>
            <span className="separator">|</span>
            <a href="/cancellation">Cancellation Policy</a>
          </div>
          <div className="developer-credit">
            <span>Developed by KA IT Solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuntasticoFooter;