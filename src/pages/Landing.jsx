import { Link } from "react-router-dom";
import "./Landing.css";

import kinaraBg from "../images/kinara-bg.jpg";
import funtasticoBg from "../images/funtastico-bg.jpg";

const RESORTS = [
  {
    id: "kinara",
    name: "Kinara Resort",
    path: "/kinara",
    description: "Kinara Resort provides affordable stay and great value for money to its guests in the seaside city of Tarkarli.",
    image: kinaraBg
  },
  {
    id: "funtastico",
    name: "Funtastico Beach Resort",
    path: "/funtastico",
    description: "Light up your inner zen at Funtastico Beach Resort, Malvan offering a restaurant, lounge, garden and private beach area.",
    image: funtasticoBg
  }
];

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-container">
        <header className="landing-header">
          <h1>WELCOME TO KINARA & FUNTASTICO BEACH RESORTS </h1>
          <p className="landing-subtitle">your perfect escape for luxury, relaxation, and adventure, offering world-class amenities like stunning pools, diverse dining, family fun, and beautiful settings for unforgettable stays, whether you're seeking beachside bliss, a coastal getaway, or a tranquil retreat. </p>
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
          
          
        </footer>
      </div>
    </div>
  );
}