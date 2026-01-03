// src/pages/Kinara/Home.jsx
import { useState, useEffect } from "react";
import "./Home.css";

// Import your local images (make sure these files exist in your project)
import kinara1 from "../../images/kinara1.jpg";
import kinara2 from "../../images/kinara2.jpg";
import kinara3 from "../../images/kinara3.jpg";
import kinara4 from "../../images/kinara4.jpg";
import kinara5 from "../../images/kinara5.jpg";

export default function KinaraHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Carousel images array with unique titles
  const carouselImages = [
    {
      id: 1,
      image: kinara1,
      title: "Luxury Mountain Retreat",
      description: "Experience serenity amidst the Himalayas"
    },
    {
      id: 2,
      image: kinara2,
      title: "Premium Accommodations",  // Changed to unique title
      description: "Spacious suites with breathtaking mountain views"
    },
    {
      id: 3,
      image: kinara3,
      title: "Fine Dining Experience",
      description: "Gourmet cuisine with panoramic mountain vistas"
    },
    {
      id: 4,
      image: kinara4,
      title: "Spa & Wellness Center",
      description: "Relax and rejuvenate in our world-class spa"
    },
    {
      id: 5,
      image: kinara5,
      title: "Mountain Adventures",
      description: "Explore nature with guided hiking and activities"
    }
  ];

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  return (
    <div className="kinara-home" tabIndex={0}>
      {/* ================= HERO SECTION WITH CAROUSEL ================= */}
      <section className="kinara-hero">
        {/* ===== CAROUSEL CONTAINER ===== */}
        <div className="carousel-container">
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

          {/* ===== BOOKING BAR ===== */}
          <div className="booking-bar">
            <div className="booking-field">
              <label htmlFor="destination">Destination or hotel</label>
              <input 
                id="destination"
                type="text" 
                placeholder="Enter destination" 
                defaultValue="Kinara Resort" 
              />
            </div>

            <div className="booking-field">
              <label htmlFor="checkin">Check-in</label>
              <input id="checkin" type="date" />
            </div>

            <div className="booking-field">
              <label htmlFor="checkout">Check-out</label>
              <input id="checkout" type="date" />
            </div>

            <div className="booking-field">
              <label htmlFor="guests">Guests</label>
              <select id="guests" defaultValue="2">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>

            <button className="search-btn">
              <span className="search-icon">🔍</span>
              Search
            </button>
          </div>

          {/* ===== HERO CONTENT ===== */}
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Kinara Resort</h1>
            <p className="hero-subtitle">
              Luxury Redefined in the Heart of Nature
            </p>
            <p className="hero-description">
              Experience unparalleled luxury amidst breathtaking mountain vistas.
              Kinara Resort offers a sanctuary where modern elegance meets natural beauty.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">
                <span className="btn-icon">📅</span>
                Book Now
              </button>
              <button className="btn-secondary">
                <span className="btn-icon">📞</span>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}