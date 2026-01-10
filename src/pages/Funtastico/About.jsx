import React, { useState } from "react";
import Layout from '../../components/Layout';
import "./About.css";

// Import images
import aboutImage1 from "../../gallery/about1.jpg";
import aboutImage2 from "../../gallery/about2.jpg";
import roomImage from "../../gallery/room1.jpg";

// Import icons - Fixed: Removed non-existent icons and used alternatives
import {
  FaUmbrellaBeach,
  FaWater,
  FaFire,
  FaGlassMartiniAlt,
  FaSnowflake,
  FaBroom,
  FaCar,
  FaWifi,
  FaConciergeBell,
  FaBolt,
  FaUmbrella,
  FaUserShield,
  FaUserMd,
  FaHeartbeat,
  FaFirstAid,
  FaPlane,
  FaThermometerHalf,
  FaShower,
  FaCouch,
  FaDoorOpen,
  FaTv,
  FaLock,
  FaUserTie,
  FaCamera,
  FaTree,
  FaSwimmer,
  FaUtensils,
  FaShieldAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import { GiIsland, GiFishingNet } from "react-icons/gi";
import { MdRestaurant, MdSportsVolleyball } from "react-icons/md";

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

const CombinedFacilities = () => {
  const facilities = [
    {
      title: "Private Beach",
      icon: <FaUmbrellaBeach style={{ color: "#FF6B35" }} />,
      
    },
    {
      title: "Water Sports",
      icon: <FaWater style={{ color: "#0284c7" }} />,
      
    },
    {
      title: "Restaurant",
      icon: <MdRestaurant style={{ color: "#16a34a" }} />,
      
    },
    {
      title: "Bonfire",
      icon: <FaFire style={{ color: "#ea580c" }} />,
     
    },
    {
      title: "Bar",
      icon: <FaGlassMartiniAlt style={{ color: "#8B5CF6" }} />,
     
    },
    {
      title: "Air Conditioning",
      icon: <FaSnowflake style={{ color: "#38bdf8" }} />,
      
    },
    {
      title: "Housekeeping",
      icon: <FaBroom style={{ color: "#f59e0b" }} />,
      
    },
    {
      title: "Free Parking",
      icon: <FaCar style={{ color: "#10B981" }} />,
      
    },
    {
      title: "Free Wi-Fi",
      icon: <FaWifi style={{ color: "#2563eb" }} />,
     
    },
    {
      title: "Room Service",
      icon: <FaConciergeBell style={{ color: "#8B5CF6" }} />,
     
    },
    {
      title: "Power Backup",
      icon: <FaBolt style={{ color: "#F59E0B" }} />,
      
    },
    {
      title: "Umbrellas",
      icon: <FaUmbrella style={{ color: "#6366F1" }} />,
      
    },
    {
      title: "Caretaker",
      icon: <FaUserShield style={{ color: "#4B5563" }} />,
      
    },
    {
      title: "Doctor on Call",
      icon: <FaUserMd style={{ color: "#DC2626" }} />,
     
    },
    {
      title: "Wellness",
      icon: <FaHeartbeat style={{ color: "#DB2777" }} />,
      
    },
    {
      title: "First-aid Services",
      icon: <FaFirstAid style={{ color: "#EF4444" }} />,
     
    },
    {
      title: "Airport Transfers",
      icon: <FaPlane style={{ color: "#0EA5E9" }} />,
      
    },
    {
      title: "Geyser/Water Heater",
      icon: <FaThermometerHalf style={{ color: "#F97316" }} />,
      
    },
    {
      title: "Toiletries",
      icon: <FaShower style={{ color: "#0EA5E9" }} />,
      
    },
    {
      title: "Living Area",
      icon: <FaCouch style={{ color: "#8B5CF6" }} />,
      
    },
    {
      title: "Balcony",
      icon: <FaDoorOpen style={{ color: "#10B981" }} />,
      
    },
    {
      title: "Mineral Water",
      icon: <FaGlassMartiniAlt style={{ color: "#3B82F6" }} />,
      
    },
    {
      title: "Kid's Menu",
      icon: <FaUtensils style={{ color: "#F59E0B" }} />,
      
    },
    {
      title: "Dining Area",
      icon: <FaUtensils style={{ color: "#16a34a" }} />,
      
    },
    {
      title: "Security Guard",
      icon: <FaShieldAlt style={{ color: "#4B5563" }} />,
     
    },
    {
      title: "CCTV",
      icon: <FaCamera style={{ color: "#6B7280" }} />,
      
    },
    {
      title: "Snorkelling",
      icon: <FaSwimmer style={{ color: "#0284c7" }} />,
      
    },
    {
      title: "TV (LED)",
      icon: <FaTv style={{ color: "#111827" }} />,
     
    },
    {
      title: "Reception",
      icon: <FaUserTie style={{ color: "#6366F1" }} />,
      
    },
    {
      title: "Cloak Room",
      icon: <FaLock style={{ color: "#6B7280" }} />,
      
    },
    {
      title: "Garden",
      icon: <FaTree style={{ color: "#22c55e" }} />,
      
    },
    {
      title: "Fishing",
      icon: <GiFishingNet style={{ color: "#3b82f6" }} />,
      
    },
    {
      title: "Island Tours",
      icon: <GiIsland style={{ color: "#7c3aed" }} />,
      
    },
    {
      title: "Beach Volleyball",
      icon: <MdSportsVolleyball style={{ color: "#ef4444" }} />,
      
    }
  ];

  

  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section">
        <div className="about-content">
          {/* LEFT: Text */}
          <div className="about-text">
            <h2>FUNTASTICO BEACH RESORT</h2>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-content">
                  <h3>Experience Coastal Paradise at Malvan</h3>
                  <p>
                    Funtastico Beach Resort is your gateway to the pristine beauty of Maharashtra's Konkan coast. 
                    Situated right on the golden sands of Malvan beach, our resort offers a perfect blend of 
                    luxury, comfort, and authentic coastal experiences. With direct beach access and panoramic 
                    sea views, we provide an unforgettable stay for couples, families, and adventure seekers.
                  </p>
                   <p>
                    Nestled along the Arabian Sea coastline, Funtastico Beach Resort is strategically located 
                    just 300 meters from Wairy Ubhatwadi Beach, 6.2 km from the historic Sindhudurg Fort, 
                    8.5 km from Talashil Peninsula, and 7 km from Kolamb Creek. Our prime location offers 
                    easy access to Malvan's famous attractions including Tsunami Island, Rock Garden, and 
                    the Marine Sanctuary.
                  </p>
                </div>
              </div>
             
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="about-image">
            <img src={aboutImage1} alt="Funtastico Beach Resort" />
            <div className="image-overlay">
              <h3>Coastal Luxury Awaits</h3>
              <p>Where the sea meets comfort</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FACILITIES SECTION ================= */}
      <section className="facilities-section">
        <div className="facilities-container">
          {/* LEFT: Image */}
          <div className="facilities-image">
            <img src={roomImage} alt="Luxury Beach View Room" />
          </div>

          {/* RIGHT: Text */}
          <div className="facilities-content">
            <h2 className="section-title">Room And Amenities</h2>
            <p className="section-description">
              The property offers Non AC and AC Sea View Wooden Cottages.
              Each room at the resort is furnished with a queen-size bed, toilet and bathroom, 
              and a hot shower with free toiletries. All basic facilities are available at this beach resort.
              The rooms are spacious and have Led TVs and AC in this resort.
              A breakfast buffet is offered every morning at the property.
              The rooms french windows and balconies in the cabins give a discreet view of the beach Tarkarli, 
              just outside the resort.
            </p>

            <h2>Location And Surroundings</h2>
            <p className="section-description">
              The nearest airport is Dabolim Airport which is 131 km away.
              Property has pick-up and drop facilities.
              Guests can opt for airport transportation from the property.
              The property is located near to the Tarkali beach in Malvan. 
              Tarkarli Devbag Rd is 450 m from the property and Tarkarli centre is 600 m away.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ALL FACILITIES GRID ================= */}
      <section className="all-facilities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Facilities & Amenities</h2>
          </div>
          <div className="all-facilities">
            {facilities.map((facility, index) => (
              <div key={index} className="facility-card">
                <div className="facility-icon">{facility.icon}</div>
                <h4 className="facility-title">{facility.title}</h4>
                <p className="facility-description">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CombinedFacilities;