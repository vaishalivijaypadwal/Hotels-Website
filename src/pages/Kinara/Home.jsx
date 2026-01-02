// src/pages/Kinara/Home.jsx

          import { useState, useEffect, useRef } from "react";
import "./Home.css";

// Import your local images (make sure these files exist in your project)
import kinara1 from "../../images/kinara1.jpg";
import kinara2 from "../../images/kinara2.jpg";
import kinara3 from "../../images/kinara3.jpg";
import kinara4 from "../../images/kinara4.jpg";
import kinara5 from "../../images/kinara5.jpg";

export default function KinaraHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  
  // Carousel images array
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
      title: "Premium Accommodations",
      description: "Spacious suites with breathtaking views"
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

  // Start auto slide
  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds
  };

  // Stop auto slide
  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Reset auto slide (stop and restart)
  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  // Initialize auto slide on component mount
  useEffect(() => {
    startAutoSlide();
    
    // Cleanup on unmount
    return () => {
      stopAutoSlide();
    };
  }, []); // Empty dependency array - run once on mount

  // Handle mouse enter/leave for pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoSlide();
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === carouselImages.length - 1 ? 0 : prevSlide + 1
    );
    resetAutoSlide(); // Reset timer when manually changing slide
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? carouselImages.length - 1 : prevSlide - 1
    );
    resetAutoSlide(); // Reset timer when manually changing slide
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetAutoSlide(); // Reset timer when clicking indicators
  };

  return (
    <div className="kinara-home">

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
          >
            {carouselImages.map((slide) => (
              <div 
                key={slide.id} 
                className="carousel-slide"
                style={{ backgroundImage: `url(${slide.image})` }}
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
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            ❯
          </button>

          {/* ===== CAROUSEL INDICATORS ===== */}
          <div className="carousel-indicators">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          

        
          
          
          {/* ===== BOOKING BAR ===== */}
          <div className="booking-bar">
            <div className="booking-field">
              <label>Destination or hotel</label>
              <input type="text" placeholder="Enter destination" defaultValue="Kinara Resort" />
            </div>

            <div className="booking-field">
              <label>Check-in</label>
              <input type="date" />
            </div>

            <div className="booking-field">
              <label>Check-out</label>
              <input type="date" />
            </div>

            <div className="booking-field">
              <label>Guests</label>
              <select defaultValue="2">
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