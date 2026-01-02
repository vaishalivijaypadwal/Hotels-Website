// src/pages/Landing.jsx
import { Link } from "react-router-dom";
import "./Landing.css";

const RESORTS = [
  {
    id: "kinara",
    name: "Kinara Resort",
    path: "/kinara",
    description: "Luxury mountain resort with panoramic views",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    color: "#2E8B57" // Forest Green
  },
  {
    id: "funtastico",
    name: "Funtastico Beach Resort",
    path: "/funtastico",
    description: "Vibrant beachfront paradise with endless activities",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    color: "#1E90FF" // Dodger Blue
  }
];

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <header className="landing-header">
          <h1>Welcome to Paradise Resorts</h1>
          <p className="landing-subtitle">Choose your perfect getaway destination</p>
        </header>

        <div className="resort-cards">
          {RESORTS.map((resort) => (
            <div key={resort.id} className="resort-card">
              <div 
                className="resort-image"
                style={{ 
                  backgroundImage: `url(${resort.image})`
                }}
              >
                <div className="image-overlay" style={{ backgroundColor: resort.color + "40" }}></div>
              </div>
              <div className="resort-info">
                <h2>{resort.name}</h2>
                <p>{resort.description}</p>
                <Link to={resort.path}>
                  <button 
                    className="resort-button"
                    style={{ 
                      backgroundColor: resort.color,
                      borderColor: resort.color
                    }}
                  >
                    Visit {resort.name}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <footer className="landing-footer">
          <p>All resorts include premium amenities, fine dining, and exceptional service</p>
          <p className="contact-info">For bookings: contact@paradiseresorts.com | +1 (555) 123-4567</p>
        </footer>
      </div>
    </div>
  );
}