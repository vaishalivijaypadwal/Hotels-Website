import { useState, useEffect } from "react";
import kinaraLogo from "../images/kinara-logo.jpg";
import funtasticoLogo from "../gallery/funtastico-logo.jpg";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar({ resortName, themeColor, navItems }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Choose logo based on path
  const logo = location.pathname.startsWith("/kinara")
    ? kinaraLogo
    : funtasticoLogo;

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Close menu when clicking outside (optional)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.nav-container')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar" style={{ backgroundColor: themeColor }}>
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt={resortName} className="logo-img" />
          <span className="logo-text">{resortName}</span>
        </Link>

        {/* HAMBURGER ICON */}
        <button
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* NAV LINKS */}
        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
}