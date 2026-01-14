// src/pages/Kinara/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import Layout from '../../components/Layout';
import { 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaUser, 
  FaEnvelope, 
  FaCalendarAlt, 
  FaUsers,
  FaWifi, 
  FaNewspaper, 
  FaSnowflake, 
  FaBroom, 
  FaCar, 
  FaConciergeBell, 
  FaBolt, 
  FaUmbrella 
} from "react-icons/fa";
import about1 from "../../images/about1.jpg";
import room7 from "../../images/room7.jpg";
import entrance from "../../images/entrance.jpg";
import outdoor from "../../images/outdoor.jpg";
import "./Home.css";

// Import your local images (make sure these files exist in your project)
import kinara1 from "../../images/kinara1.jpg";
import kinara2 from "../../images/kinara2.jpg";
import kinara3 from "../../images/kinara3.jpg";
import kinara4 from "../../images/kinara4.jpg";
import kinara5 from "../../images/kinara5.jpg";

export default function KinaraHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);
  
  // Carousel images array
  const carouselImages = [
    {
      id: 1,
      image: kinara1,
      
    },
    {
      id: 2,
      image: kinara2,
     
      
    },
    {
      id: 3,
      image: kinara3,
      
    },
    {
      id: 4,
      image: kinara4,
     
    },
    {
      id: 5,
      image: kinara5,
      
    }
  ];

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 1500); // Change slide every 1.5 seconds

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentSlide]); // Re-run when auto-play status or slide changes

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  // Resume auto-play on mouse leave
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? carouselImages.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        // Space bar to toggle auto-play
        setIsAutoPlaying(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppMessage = () => {
    const message = `*New Booking Inquiry - Kinara Resort*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Check-in:* ${formData.checkIn}%0A` +
      `*Check-out:* ${formData.checkOut}%0A` +
      `*Guests:* ${formData.guests}%0A` +
      `*Message:* ${formData.message}%0A%0A` +
      `_Sent via Kinara Resort Website_`;
    return message;
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "919665514055"; // Use actual Kinara number
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      message: ''
    });
  };

  const handleCallNow = () => {
    window.location.href = "tel:+919665514055";
  };

  return (
    <Layout resort="kinara">
      <div className="kinara-home" tabIndex={0}>
        {/* ================= HERO SECTION WITH CAROUSEL ================= */}
        <section className="kinara-hero">
          {/* ===== CAROUSEL CONTAINER ===== */}
          <div 
            className="carousel-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* ===== CAROUSEL SLIDES ===== */}
            <div 
              className="carousel-slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              role="listbox"
              aria-label="Kinara Resort carousel"
            >
              {carouselImages.map((slide) => (
                <div 
                  key={slide.id} 
                  className="carousel-slide"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  role="option"
                  aria-label={`${slide.title}: ${slide.description}`}
                >
                  <div className="slide-overlay">
                    <div className="slide-content">
                      <h2 className="slide-title">{slide.title}</h2>
                      <p className="slide-description">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ===== CAROUSEL CONTROLS ===== */}
            <button 
              className="carousel-btn prev-btn" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ❮
            </button>
            <button 
              className="carousel-btn next-btn" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              ❯
            </button>

            {/* ===== AUTO-PLAY TOGGLE BUTTON ===== */}
            <button 
              className="auto-play-toggle"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>

            {/* ===== CAROUSEL INDICATORS ===== */}
            <div className="carousel-indicators" role="tablist">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-selected={index === currentSlide}
                  role="tab"
                />
              ))}
            </div>

            {/* ===== HERO CONTENT ===== */}
            <div className="hero-content">
              <h1>Welcome to Kinara Resort</h1>
              <p>
                Experience serene luxury surrounded by nature.  
                Kinara Resort offers peaceful stays, modern comforts,  
                and unforgettable moments by the coastline.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className="about-section">
          <h2>About Us</h2>
          <div className="about-container">
            {/* LEFT IMAGE */}
            <div className="about-image">
              <img src={about1} alt="Kinara Resort" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="about-text">
              <p>
                Nestled amidst serene natural beauty, Kinara Resort is a perfect
                destination for travelers seeking peace, comfort, and luxury.
                Designed to blend modern amenities with nature's charm, our resort
                offers an unforgettable escape from everyday life.
              </p>
              <p>
                Whether you are planning a family vacation, a romantic getaway,
                or a relaxing weekend retreat, Kinara Resort provides spacious
                accommodations, warm hospitality, and scenic surroundings to
                make your stay truly special.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FACILITIES SECTION ================= */}
        <section className="facilities-section">
          <div className="section-header">
            <h2>Facilities</h2>
          </div>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-icon">
                <FaWifi style={{ fontSize: '30px', color: '#3B82F6' }} />
              </div>
              <h3>Free Wi-Fi</h3>
            </div>
            
            <div className="facility-card">
              <div className="facility-icon">
                <FaNewspaper style={{ fontSize: '30px', color: '#EF4444' }} />
              </div>
              <h3>Newspaper</h3>
            </div>
            
            <div className="facility-card">
              <div className="facility-icon">
                <FaSnowflake style={{ fontSize: '30px', color: '#0EA5E9' }} />
              </div>
              <h3>Air Conditioning</h3>
            </div>
            
            <div className="facility-card">
              <div className="facility-icon">
                <FaBroom style={{ fontSize: '30px', color: '#F59E0B' }} />
              </div>
              <h3>Housekeeping</h3>
            </div>
            
            <div className="facility-card">
              <div className="facility-icon">
                <FaCar style={{ fontSize: '30px', color: '#10B981' }} />
              </div>
              <h3>Free Parking</h3>
            </div>
            
            <div className="facility-card">
              <div className="facility-icon">
                <FaConciergeBell style={{ fontSize: '30px', color: '#8B5CF6' }} />
              </div>
              <h3>Room Service</h3>
            </div>
            
            <div className="facility-card">
              <div className="facility-icon">
                <FaBolt style={{ fontSize: '30px', color: '#F59E0B' }} />
              </div>
              <h3>Power Backup</h3>
            </div>
            
            <div className="facility-card">
              <div className="facility-icon">
                <FaUmbrella style={{ fontSize: '30px', color: '#6366F1' }} />
              </div>
              <h3>Umbrellas</h3>
            </div>
          </div>
        </section>

        {/* ================= GALLERY SECTION ================= */}
        <section className="gallery-section">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={room7} alt="Luxury Room - Kinara Resort" />
              <div className="gallery-caption">Luxury Room</div>
            </div>
            <div className="gallery-item">
              <img src={entrance} alt="Resort Entrance - Kinara Resort" />
              <div className="gallery-caption">Main Entrance</div>
            </div>
            <div className="gallery-item">
              <img src={outdoor} alt="Outdoor View - Kinara Resort" />
              <div className="gallery-caption">Outdoor View</div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section className="contact-section">
          <h2>Contact & Inquiries</h2>
          <div className="contact-container">
            {/* Inquiry Form */}
            <div className="inquiry-form-container">
              <form onSubmit={handleWhatsAppSubmit} className="inquiry-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      <FaUser className="input-icon" /> Full Name 
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>
                      <FaPhoneAlt className="input-icon" /> Phone Number 
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your WhatsApp number"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>
                    <FaEnvelope className="input-icon" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      <FaCalendarAlt className="input-icon" /> Check-in Date 
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>
                      <FaCalendarAlt className="input-icon" /> Check-out Date 
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>
                    <FaUsers className="input-icon" /> Number of Guests 
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7+ Guests</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Room preferences, special requests, or questions..."
                    rows="1"
                  ></textarea>
                </div>
                
                <button type="submit" className="whatsapp-submit-btn">
                  <FaWhatsapp /> Send on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}