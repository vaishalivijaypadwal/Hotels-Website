import React, { useState } from "react";
import Layout from '../../components/Layout';
import "./Booking.css";
import { 
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import { 
  FaCalendarAlt, 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaUsers,
  FaCar,
  FaClock,
  FaBed,
  FaMapMarkerAlt,
  FaPhoneAlt
} from "react-icons/fa";

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

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    roomType: "",
    guests: "",
    arrivalDate: "",
    arrivalTime: "",
    departureDate: "",
    freePickup: false,
    specialRequests: ""
  });

  const roomTypes = [
    "Family Room (1 to 4 People)",
    "Deluxe Room (1 to 2 People)",
    "Suite Room (1 to 4 People)",
    "Premium Room (1 to 3 People)",
    "Standard Room (1 to 2 People)"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Booking form submitted successfully!");
  };

  // Generate date options
  const currentYear = new Date().getFullYear();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 5 }, (_, i) => currentYear + i);
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = ["00", "15", "30", "45"];

  return (
    <Layout resort="kinara">
      <div className="booking-page">
        <div className="booking-container">
          <header className="booking-header">
            <h1>Hotel Booking</h1>
          </header>

          <form className="booking-form" onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <section className="form-section">
              <h2>Personal Details</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <div className="input-with-icon">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <div className="input-with-icon">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="ex: myname@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number </label>
                  <div className="input-with-icon">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Booking Details Section */}
            <section className="form-section">
              <h2>Booking Details</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="roomType">Room Type</label>
                  <div className="input-with-icon">
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Room Type</option>
                      {roomTypes.map((room, index) => (
                        <option key={index} value={room}>{room}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <div className="input-with-icon">
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      min="1"
                      max="10"
                      placeholder="e.g., 2"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Arrival Date & Time */}
              <div className="form-section">
                <h3>Arrival Date & Time</h3>
                
                <div className="date-time-row">
                  <div className="form-group">
                    <label>Date</label>
                    <div className="date-selectors">
                      <select
                        name="arrivalMonth"
                        value={formData.arrivalMonth || ""}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Month</option>
                        {months.map((month, index) => (
                          <option key={index} value={index + 1}>{month}</option>
                        ))}
                      </select>
                      
                      <select
                        name="arrivalDay"
                        value={formData.arrivalDay || ""}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Day</option>
                        {days.map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                      
                      <select
                        name="arrivalYear"
                        value={formData.arrivalYear || ""}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Year</option>
                        {years.map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Time</label>
                    <div className="time-selectors">
                      <select
                        name="arrivalHour"
                        value={formData.arrivalHour || ""}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Hour</option>
                        {hours.map(hour => (
                          <option key={hour} value={hour}>{hour}</option>
                        ))}
                      </select>
                      
                      <select
                        name="arrivalMinute"
                        value={formData.arrivalMinute || ""}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Minutes</option>
                        {minutes.map(minute => (
                          <option key={minute} value={minute}>{minute}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departure Date */}
              <div className="form-section">
                <h3>Departure Date</h3>
                
                <div className="form-group">
                  <div className="date-selectors">
                    <select
                      name="departureMonth"
                      value={formData.departureMonth || ""}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Month</option>
                      {months.map((month, index) => (
                        <option key={index} value={index + 1}>{month}</option>
                      ))}
                    </select>
                    
                    <select
                      name="departureDay"
                      value={formData.departureDay || ""}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Day</option>
                      {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                    
                    <select
                      name="departureYear"
                      value={formData.departureYear || ""}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Services Section */}
            <section className="form-section">
              <h2>Free Pickup</h2>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="freePickup"
                    checked={formData.freePickup}
                    onChange={handleChange}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">
                    Yes Please! - Pick me up on arrival
                  </span>
                </label>
                
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="noPickup"
                    checked={!formData.freePickup}
                    onChange={() => setFormData(prev => ({ ...prev, freePickup: false }))}
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">
                    No Thanks - I'll make my own way there
                  </span>
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  placeholder="Any special requirements or requests..."
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                />
              </div>
            </section>

            {/* Submit Button */}
            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default BookingForm;