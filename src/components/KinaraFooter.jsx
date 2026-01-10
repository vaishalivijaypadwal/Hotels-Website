// src/components/KinaraFooter.jsx
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
  FaHotel,
  FaBed,
  FaSwimmingPool,
  FaCar
} from "react-icons/fa";

const KinaraFooter = () => {
  return (
    <footer className="kinara-footer">
      <div className="footer-top">
        <div className="footer-content">
          {/* CONTACT INFO */}
          <div className="footer-section contact-info">
            <div className="resort-header">
              <FaHotel className="resort-icon" />
              <h3>Kinara Resort</h3>
            </div>
            <ul className="contact-list">
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
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/kinara">Home</a></li>
              <li><a href="/kinara/about">About Us</a></li>
              <li><a href="/kinara/gallery">Gallery</a></li>
              <li><a href="/kinara/contact">Contact</a></li>
              <li><a href="/kinara/booking">Book Now</a></li>
            </ul>
          </div>

          {/* AMENITIES */}
          <div className="footer-section amenities">
            <h4>Our Amenities</h4>
            <div className="amenities-list">
              <div className="amenity-item">
                <FaBed className="amenity-icon" />
                <span>Luxury Rooms</span>
              </div>
              <div className="amenity-item">
                <FaSwimmingPool className="amenity-icon" />
                <span>Swimming Pool</span>
              </div>
              <div className="amenity-item">
                <FaCar className="amenity-icon" />
                <span>Free Parking</span>
              </div>
            </div>
          </div>

          {/* SOCIAL LINKS */}
          <div className="footer-section social-links">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" className="social-icon twitter">
                <FaTwitter />
              </a>
              <a href="https://wa.me/919665514055" className="social-icon whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Kinara Resort. All rights reserved.</p>
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

export default KinaraFooter;