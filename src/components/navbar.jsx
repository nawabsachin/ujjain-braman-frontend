import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import myImage from '../image/logo (2).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="image-container">
          <img src={myImage} alt="Logo" className="logo" />
        </div>
        <div className="menu-container">
          <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/src/pages/allService.jsx" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/src/pages/allLocation.jsx" onClick={closeMenu}>Locations</Link></li>
            <li><Link to="/my-app/src/pages/contact.jsx" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/my-app/src/pages/list.jsx" onClick={closeMenu}>Admin</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
