import React, { useState } from "react";
import Layout from "../../components/Layout";
import "./About.css";
import aboutImage from "../../images/about1.jpg";
import roomImage from "../../images/room6.jpg";

// Import icons
import { 
  FaWifi, FaCar, FaTv, FaSnowflake, 
  FaBed, FaSwimmingPool, FaDumbbell,
  FaShower, FaBroom, FaChild,
  FaClock, FaShieldAlt, FaConciergeBell,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
  FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp,
  FaUmbrellaBeach, FaWater, FaFire, FaGlassMartiniAlt,
  FaBolt, FaUmbrella, FaUserShield, FaUserMd,
  FaHeartbeat, FaFirstAid, FaPlane, FaThermometerHalf,
  FaCouch, FaDoorOpen, FaCamera, FaUserTie, FaLock,
  FaTree, FaSwimmer, FaUtensils, FaBath, FaTshirt
} from "react-icons/fa";
import { GiVacuumCleaner, GiLockers } from "react-icons/gi";
import { MdRestaurant } from "react-icons/md";

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
      title: "Pool/Beach Towels",
      icon: <FaBath style={{ fontSize: '30px', color: "#3B82F6" }} />,
      
    },
    {
      title: "Swimming Pool",
      icon: <FaSwimmingPool style={{ fontSize: '30px', color: "#3B82F6" }} />,
      
    },
    {
      title: "Garden",
      icon: <FaTree style={{ color: "#22c55e" }} />,
      
    }
  ];

  // WRAP EVERYTHING WITH LAYOUT COMPONENT
  return (
    <Layout>
      <div className="about-page">
        {/* ================= ABOUT SECTION ================= */}
        <section className="about-section">
          <div className="about-content">
            {/* LEFT: Text */}
            <div className="about-text">
              <h2>KINARA RESORT</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-content">
                    <h3>Find The Best Resort For Accommodation</h3>
                    <p>
                      Kinara Resort is designed to make your visit a unique, comfortable and fun experience. 
                      Our 40+ rooms and cottages are spacious, our fares are competitive and the service is unparalleled. 
                      We are among the most preferred beach resorts in Malvan for both leisure travellers and families.
                    </p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-content">
                    <p>
                      Nestled along the pristine shores of Malvan, Kinara Resort offers the perfect 
                      blend of luxury and nature. We are located just 300 meters from Wairy Ubhatwadi Beach, 
                      6.2 km from the historic Sindhudurg Fort, 8.5 km from Talashil Peninsula, and 7 km from 
                      Kolamb Creek. Our resort provides easy access to water sports, boat rides, and marine 
                      exploration activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="about-image">
              <img src={aboutImage} alt="About Resort" />
              <div className="image-overlay">
                <h3>Experience Adventure</h3>
                <p>Create unforgettable memories</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FACILITIES SECTION ================= */}
        <section className="facilities-section">
          <div className="facilities-container">
            {/* LEFT: Image */}
            <div className="facilities-image">
              <img src={roomImage} alt="Luxury Room" />
            </div>

            {/* RIGHT: Text */}
            <div className="facilities-content">
              <h2 className="section-title">Best Resort Facilities</h2>
              <p className="section-description">
                Kinara Resort is located in the beauty of Tarkarli. The property is located at a distance of (4.1 km) from Malvan Bus Depot and one can opt for state transport or can hire a private vehicle to reach the hotel. The wide river, the beautiful sailboats and the tiny wonderful islands hamlets situated on the riverbank, add to the picturesque beauty of Tarkarli. While at Tarkarli, do make it a point to taste the special Malvani food such as a variety of fish items and kombadi-vada. The hotel itself offers services that are designed to offer maximum comfort to its guests. Some of the services offered here are Wi-Fi, telephone, hot and cold water, essential toiletries and many more are offered at the hotel. The hotel offers a myriad of conveniences to make the stay comfortable for guests.
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
      </div>
    </Layout>
  );
};

export default CombinedFacilities;