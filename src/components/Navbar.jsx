import { NavLink, Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar({ resortName, logo, themeColor, navItems }) {
  return (
    <nav className="navbar" style={{ backgroundColor: themeColor }}>
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="nav-logo">
          <span className="logo-icon">{logo}</span>
          <span className="logo-text">{resortName}</span>
        </Link>

        {/* NAV LINKS */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        
        

      </div>
    </nav>
  );
}
