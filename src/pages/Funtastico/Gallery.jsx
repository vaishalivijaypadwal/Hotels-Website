
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
import room1 from "../../gallery/room1.jpg";
import room2 from "../../gallery/room2.jpg";
import room3 from "../../gallery/room3.jpg";
import room4 from "../../gallery/room4.jpg";
import room5 from "../../gallery/room5.jpg";
import room6 from "../../gallery/room6.jpg"; 
import room7 from "../../gallery/room7.jpg"; 
import room8 from "../../gallery/room8.jpg";

// Bathrooms
import washroom1 from "../../gallery/washroom1.jpg";
import washroom2 from "../../gallery/washroom2.jpg";
import washroom3 from "../../gallery/washroom3.jpg";
import washroom4 from "../../gallery/washroom4.jpg";
import washroom5 from "../../gallery/washroom5.jpg";
import washroom6 from "../../gallery/washroom6.jpg";

// Facade
import facade1 from "../../gallery/facade1.jpg";
import facade2 from "../../gallery/facade2.jpg";
import facade3 from "../../gallery/facade3.jpg";

// Dining
import dining1 from "../../gallery/dining1.jpg";
import dining2 from "../../gallery/dining2.jpg";
import dining3 from "../../gallery/dining3.jpg";
import dining4 from "../../gallery/dining4.jpg";
import dining5 from "../../gallery/dining5.jpg";

// Outdoor
import outdoor1 from "../../gallery/outdoor1.jpg";
import outdoor2 from "../../gallery/outdoor2.jpg"; 
import outdoor3 from "../../gallery/outdoor3.jpg"; 
import outdoor4 from "../../gallery/outdoor4.jpg"; 
import outdoor5 from "../../gallery/outdoor5.jpg"; 
import outdoor6 from "../../gallery/outdoor6.jpg"; 
import outdoor7 from "../../gallery/outdoor7.jpg"; 
import outdoor8 from "../../gallery/outdoor8.jpg"; 
import outdoor9 from "../../gallery/outdoor9.jpg"; 
import outdoor10 from "../../gallery/outdoor10.jpg"; 

// Restaurant
import restaurant1 from "../../gallery/restaurant1.jpg";
import restaurant2 from "../../gallery/restaurant2.jpg";

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

// Updated categories based on your available images
const categories = [
  "All",
  "Rooms",
  "Washrooms",
  "Facade",
  "Dining",
  "Outdoor",
  "Restaurant"
];

// UPDATED: Complete categoryImages with all your images
const categoryImages = {
  "All": [
    // Rooms
    { id: 1, src: room1, alt: " Room 1"},
    { id: 2, src: room2, alt: "Room 2" },
    { id: 3, src: room3, alt: "Room 3" },
    { id: 4, src: room4, alt: "Room 4" },
    { id: 5, src: room5, alt: "Room 5" },
    { id: 6, src: room6, alt: "Room 6" },
    { id: 7, src: room7, alt: "Room 7" },
    { id: 8, src: room8, alt: "Room 8" },

    // Washrooms
    { id: 9, src: washroom1, alt: "Washroom 1"},
    { id: 10, src: washroom2, alt: "Washroom 2" },
    { id: 11, src: washroom3, alt: "Washroom 3" },
    { id: 12, src: washroom4, alt: "Washroom 4" },
    { id: 13, src: washroom5, alt: "Washroom 5" },
    { id: 14, src: washroom6, alt: "Washroom 6" },

    // Facade
    { id: 15, src: facade1, alt:  "Facade 1" },
    { id: 16, src: facade2, alt: "Facade 2" },
    { id: 17, src: facade3, alt: "Facade 3" },
    
    // Dining
    { id: 18, src: dining1, alt: "Dining Area 1" },
    { id: 19, src: dining2, alt: "Dining Area 2" },
    { id: 20, src: dining3, alt: "Dining Area 3" },
    { id: 21, src: dining4, alt: "Dining Area 4" },
    { id: 22, src: dining5, alt: "Dining Area 5",},

    // Outdoor
    { id: 23, src: outdoor1, alt: "Outdoor 1" },
    { id: 24, src: outdoor2, alt: "Outdoor 2" },
    { id: 25, src: outdoor3, alt: "Outdoor 3" },
    { id: 26, src: outdoor4, alt: "Outdoor 4" },
    { id: 27, src: outdoor5, alt: "Outdoor 5" },
    { id: 28, src: outdoor6, alt: "Outdoor 6" },
    { id: 29, src: outdoor7, alt: "Outdoor 7" },
    { id: 30, src: outdoor8, alt: "Outdoor 8" },
    { id: 31, src: outdoor9, alt: "Outdoor 9" },
    { id: 32, src: outdoor10, alt: "Outdoor 10" },
    
    // Restaurant
    { id: 33, src: restaurant1, alt:  "Restaurant 1" },
    { id: 34, src: restaurant2, alt:  "Restaurant 2" },
    { id: 35, src: restaurant1, alt:  "Restaurant 3" },
    { id: 36, src: restaurant2, alt:  "Restaurant 4" },
  ],
  
  "Rooms": [
    { id: 1, src: room1, alt: " Room 1" },
    { id: 2, src: room2, alt: "Room 2" },
    { id: 3, src: room3, alt: " Room 3" },
    { id: 4, src: room4, alt: "Room 4" },
    { id: 5, src: room5, alt: "Room 5" },
    { id: 6, src: room6, alt: " Room 6" },
    { id: 7, src: room7, alt: "Room 7" },
    { id: 8, src: room8, alt: "Room 8" },
  ],

  "Washrooms": [
    { id: 1, src: washroom1, alt: "Washroom 1" },
    { id: 2, src: washroom2, alt: "Washroom 2" },
    { id: 3, src: washroom3, alt: " Washroom 3" },
    { id: 4, src: washroom4, alt: "Washroom 4" },
    { id: 5, src: washroom5, alt: "Washroom 5" },
    { id: 6, src: washroom6, alt: "Washroom 6" },
  ],
  
  "Facade": [
    { id: 1, src: facade1, alt: "Resort Front View" },
    { id: 2, src: facade2, alt: "Resort Entrance" },
    { id: 3, src: facade3, alt: "Resort Building" },
  ],
  
  "Dining": [
    { id: 1, src: dining1, alt: "Dining Area 1" },
    { id: 2, src: dining2, alt: "Dining Area 2" },
    { id: 3, src: dining3, alt: "Dining Area 3" },
    { id: 4, src: dining4, alt: "Dining Area 4" },
    { id: 5, src: dining5, alt: "Dining Area 5" },
  ],
  
  "Outdoor": [
    { id: 1, src: outdoor1, alt: "Garden Area 1" },
    { id: 2, src: outdoor2, alt: "Garden Area 2" },
    { id: 3, src: outdoor3, alt: "Swimming Pool" },
    { id: 4, src: outdoor4, alt: "Outdoor Seating" },
    { id: 5, src: outdoor5, alt: "Resort Pathway" },
    { id: 6, src: outdoor6, alt: "Garden View" },
    { id: 7, src: outdoor7, alt: "Outdoor Lounge" },
    { id: 8, src: outdoor8, alt: "Resort Grounds" },
    { id: 9, src: outdoor9, alt: "Scenic View" },
     { id: 10, src: outdoor10, alt: "Scenic View" },
  ],
  
  "Restaurant": [
    { id: 1, src: restaurant1, alt: "Restaurant Interior" },
    { id: 2, src: restaurant2, alt: "Restaurant Dining" },
     { id: 3, src: restaurant1, alt: "Restaurant Interior" },
    { id: 4, src: restaurant2, alt: "Restaurant Dining" },
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
                key={`${activeCategory}-${img.id}-${index}`}
                onClick={() => openCarousel(index)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="image-overlay">
                  <span>{img.alt}</span>
                  {img.category && <span className="image-category">{img.category}</span>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-images">
            <p>No images available for this category</p>
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
                    key={`thumb-${activeCategory}-${img.id}-${index}`}
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