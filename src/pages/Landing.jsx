import { Link } from "react-router-dom";
import "./Landing.css";
import { useState, useEffect } from "react"; // Add this import

import landing1 from "../images/landing1.jpg";
import landing2 from "../images/landing2.jpg";
import landing3 from "../images/landing3.jpg";
import landing4 from "../images/landing4.jpg";
import landing5 from "../images/landing5.jpg";
import landing6 from "../images/landing6.jpg";
import landing7 from "../images/landing7.jpg";
import landing8 from "../images/landing8.jpg";
import landing9 from "../images/landing9.jpg";
import kinaraBg from "../images/kinara-bg.jpg";
import funtasticoBg from "../images/funtastico-bg.jpg";

// Add this ImageCarousel component directly in the same file
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [landing1, landing2, landing3, landing4, landing5, landing6, landing7, landing8, landing9];

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div 
          className="carousel-images" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-image-container">
              <img 
                src={image} 
                alt={`Resort View ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
        
        <button className="carousel-button prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={goToNext}>
          &#10095;
        </button>
      </div>
      
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
      
      <div className="image-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const RESORTS = [
  {
    id: "kinara",
    name: "Kinara Resort",
    path: "/kinara",
    description: "Kinara Resort provides affordable stay and great value for money to its guests in the seaside city of Tarkarli.",
    image: kinaraBg,
    color: "#1e40af"
  },
  {
    id: "funtastico",
    name: "Funtastico Beach Resort",
    path: "/funtastico",
    description: "Light up your inner zen at Funtastico Beach Resort, Malvan offering a restaurant, lounge, garden and private beach area.",
    image: funtasticoBg,
     color: "#1e40af"
  }
];

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-container">
        {/* Image Carousel */}
        <ImageCarousel />
        
        <h2>RESORTS IN MALVAN</h2>
        <header className="landing-header">
          <h1>WELCOME TO KINARA & FUNTASTICO BEACH RESORTS</h1>
          <p className="landing-subtitle">
            Your perfect escape for luxury, relaxation, and adventure, offering world-class amenities like stunning pools, 
            diverse dining, family fun, and beautiful settings for unforgettable stays.
          </p>
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

       
      </div>
    </div>
  );
}