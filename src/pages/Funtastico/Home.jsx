// src/pages/Kinara/Home.jsx
import "./Home.css";

export default function KinaraHome() {
  return (
    <div className="kinara-home">
      {/* Hero Section */}
      <section className="kinara-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Funtastico Resort</h1>
            <p className="hero-subtitle">Luxury Redefined in the Heart of Nature</p>
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