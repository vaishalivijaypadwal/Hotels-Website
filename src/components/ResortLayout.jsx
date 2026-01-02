// src/components/ResortLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/resort.css";

const RESORT_DATA = {
  kinara: {
    name: "Kinara Resort",
    logo: "🌄",
    themeColor: "white",
    backgroundColor:"white", 
    secondaryColor: "white",
    navItems: [
      { path: "/kinara", label: "Home" },
      { path: "/kinara/about", label: "About" },
      { path: "/kinara/gallery", label: "Gallery" },
      { path: "/kinara/contact", label: "Contact" }
    ],
    description: "Luxury Mountain Resort"
  },
  funtastico: {
    name: "Funtastico Beach Resort",
    logo: "🏖️",
    themeColor: "white",
    backgroundColor:"white", 
    secondaryColor: "white",
    navItems: [
      { path: "/funtastico", label: "Home" },
      { path: "/funtastico/about", label: "About" },
      { path: "/funtastico/gallery", label: "Gallery" },
      { path: "/funtastico/contact", label: "Contact" }
    ],
    description: "Vibrant Beachfront Paradise"
  }
};

export default function ResortLayout({ resort }) {
  const resortData = RESORT_DATA[resort];

  return (
    <div 
      className="resort-layout"
      style={{ 
        backgroundColor: resortData.backgroundColor,
        background: `linear-gradient(135deg, ${resortData.backgroundColor} 0%, ${resortData.secondaryColor} 100%)`
      }}
    >
      <Navbar 
        resortName={resortData.name}
        logo={resortData.logo}
        themeColor={resortData.themeColor}
        navItems={resortData.navItems}
      />
      
      <main className="resort-content">
        <Outlet />
      </main>
      
      <footer 
        className="resort-footer"
        style={{ backgroundColor: resortData.backgroundColor }}
      >
        <div className="footer-content">
          <div className="footer-section">
            <h3>{resortData.name}</h3>
            <p>{resortData.description}</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            {resortData.navItems.map((item) => (
              <a key={item.path} href={item.path} className="footer-link">
                {item.label}
              </a>
            ))}
          </div>
          
        </div>
        
      </footer>
    </div>
  );
}