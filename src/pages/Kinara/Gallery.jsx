// src/pages/Gallery.jsx
import { useState } from "react";
import Layout from '../../components/Layout';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter,
  FaWhatsapp 
} from "react-icons/fa";
import "./Gallery.css";

// Rooms
import room1 from "../../images/room1.jpg";
import room2 from "../../images/room2.jpg";
import room3 from "../../images/room3.jpg";
import room4 from "../../images/room4.jpg";
import room5 from "../../images/room5.jpg";

// Washrooms
import washroom1 from "../../images/washroom1.jpg";
import washroom2 from "../../images/washroom2.jpg";

// Reception
import reception1 from "../../images/reception1.jpg";
import reception2 from "../../images/reception2.jpg";

// Dining
import dining1 from "../../images/dining1.jpg";
import dining2 from "../../images/dining2.jpg";
import dining3 from "../../images/dining3.jpg";
import dining4 from "../../images/dining4.jpg";

// Food Court
import food1 from "../../images/food1.jpg";
import food2 from "../../images/food2.jpg";
import food3 from "../../images/food3.jpg";
import food4 from "../../images/food4.jpg";
import food5 from "../../images/food5.jpg";

// Lobby & Corridor
import lobby1 from "../../images/lobby1.jpg";
import lobby2 from "../../images/lobby2.jpg";

// Restaurant
import restaurant1 from "../../images/restaurant1.jpg";
import restaurant2 from "../../images/restaurant2.jpg";

// Amenities
import amenities1 from "../../images/amenities1.jpg";

// Reusable SocialIcons component
const SocialIcons = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      color: "#1877F2"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com",
      color: "#E4405F"
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com",
      color: "#1DA1F2"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/919665514055",
      color: "#25D366"
    }
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
          onMouseEnter={() => setActiveIcon(index)}
          onMouseLeave={() => setActiveIcon(null)}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

const categories = [
  "All",
  "Rooms",
  "Washrooms",
  "Reception",
  "Dining",
  "Food Court",
  "Lobby & Corridor",
  "Restaurant",
  "Amenities"
];

// Organize images by category
const categoryImages = {
  "All": [
    { id: 7, src: room1, alt: "Room 1" },
    { id: 8, src: room2, alt: "Room 2" },
    { id: 9, src: room3, alt: "Room 3" },
    { id: 10, src: room4, alt: "Room 4" },
    { id: 11, src: room5, alt: "Room 5" },
    { id: 12, src: washroom1, alt: "Washroom 1" },
    { id: 13, src: washroom2, alt: "Washroom 2" },
    { id: 14, src: reception1, alt: "Reception 1" },
    { id: 15, src: reception2, alt: "Reception 2" },
    { id: 16, src: dining1, alt: "Dining Area 1" },
    { id: 17, src: dining2, alt: "Dining Area 2" },
    { id: 18, src: dining3, alt: "Dining Area 3" },
    { id: 19, src: dining4, alt: "Dining Area 4" },
    { id: 20, src: food1, alt: "Food Court 1" },
    { id: 21, src: food2, alt: "Food Court 2" },
    { id: 22, src: food3, alt: "Food Court 3" },
    { id: 23, src: food4, alt: "Food Court 4" },
    { id: 24, src: food5, alt: "Food Court 5" },
    { id: 25, src: lobby1, alt: "Lobby 1" },
    { id: 26, src: lobby2, alt: "Lobby 2" },
    { id: 27, src: restaurant1, alt: "Restaurant 1" },
    { id: 28, src: restaurant2, alt: "Restaurant 2" },
    { id: 29, src: amenities1, alt: "Amenities 1" },
  ],
  
  "Rooms": [
    { id: 1, src: room1, alt: "Room 1" },
    { id: 2, src: room2, alt: "Room 2" },
    { id: 3, src: room3, alt: "Room 3" },
    { id: 4, src: room4, alt: "Room 4" },
    { id: 5, src: room5, alt: "Room 5" },
  ],
  "Washrooms": [
    { id: 1, src: washroom1, alt: "Washroom 1" },
    { id: 2, src: washroom2, alt: "Washroom 2" },
  ],
  "Reception": [
    { id: 1, src: reception1, alt: "Reception 1" },
    { id: 2, src: reception2, alt: "Reception 2" },
  ],
  "Dining": [
    { id: 1, src: dining1, alt: "Dining Area 1" },
    { id: 2, src: dining2, alt: "Dining Area 2" },
    { id: 3, src: dining3, alt: "Dining Area 3" },
    { id: 4, src: dining4, alt: "Dining Area 4" },
  ],
  "Food Court": [
    { id: 1, src: food1, alt: "Food Court 1" },
    { id: 2, src: food2, alt: "Food Court 2" },
    { id: 3, src: food3, alt: "Food Court 3" },
    { id: 4, src: food4, alt: "Food Court 4" },
    { id: 5, src: food5, alt: "Food Court 5" },
  ],
  "Lobby & Corridor": [
    { id: 1, src: lobby1, alt: "Lobby 1" },
    { id: 2, src: lobby2, alt: "Lobby 2" },
  ],
  "Restaurant": [
    { id: 1, src: restaurant1, alt: "Restaurant 1" },
    { id: 2, src: restaurant2, alt: "Restaurant 2" },
  ],
  "Amenities": [
    { id: 1, src: amenities1, alt: "Amenities 1" },
  ]
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImages = categoryImages[activeCategory] || [];

  // Open carousel at specific image index
  const openCarousel = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  // Close carousel
  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
    );
  };

  // Go to specific image
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Handle keydown events for carousel navigation
  const handleKeyDown = (e) => {
    if (isCarouselOpen) {
      if (e.key === "Escape") closeCarousel();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    }
  };

  return (
    <div className="gallery-page" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="gallery-container">
        <header className="gallery-header">
          <h1>GALLERY</h1>
          
          {/* Category Navigation */}
          <nav className="gallery-nav">
            {categories.map((category) => (
              <button
                key={category}
                className={`nav-btn ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>
        </header>

        {/* Image Count */}
        <div className="image-count">
          Showing {currentImages.length} {activeCategory === "All" ? "images" : `${activeCategory.toLowerCase()} images`}
        </div>

        {/* Gallery Grid */}
        {currentImages.length > 0 ? (
          <div className="gallery-grid">
            {currentImages.map((img, index) => (
              <div 
                className="gallery-item" 
                key={img.id}
                onClick={() => openCarousel(index)}
              >
                <img src={img.src} alt={img.alt} />
                <div className="image-overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-images">
            <p></p>
          </div>
        )}

        {/* Carousel Modal */}
        {isCarouselOpen && currentImages.length > 0 && (
          <div className="carousel-modal" onClick={closeCarousel}>
            <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
              
              {/* Close Button */}
              <button className="carousel-close" onClick={closeCarousel} aria-label="Close">
                &times;
              </button>

              {/* Navigation Buttons */}
              <button className="carousel-nav prev" onClick={prevImage} aria-label="Previous image">
                ❮
              </button>

              {/* Main Image Display */}
              <div className="carousel-image-container">
                <img 
                  src={currentImages[currentImageIndex].src} 
                  alt={currentImages[currentImageIndex].alt} 
                  className="carousel-main-image"
                />
                <div className="image-info">
                  <h3>{currentImages[currentImageIndex].alt}</h3>
                  <span>{activeCategory}</span>
                </div>
              </div>

              <button className="carousel-nav next" onClick={nextImage} aria-label="Next image">
                ❯
              </button>

              {/* Image Counter */}
              <div className="image-counter">
                {currentImageIndex + 1} / {currentImages.length}
              </div>

              {/* Thumbnail Navigation */}
              <div className="carousel-thumbnails">
                {currentImages.map((img, index) => (
                  <div 
                    key={img.id}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  >
                    <img src={img.src} alt={img.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      </div>
  );
}