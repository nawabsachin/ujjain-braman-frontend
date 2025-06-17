import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>Ujjain Tourism</h3>
          <p>
            Discover the sacred city of Ujjain — rich in history, culture, and spirituality. 
            Experience timeless temples, festivals, and heritage.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
             
            <li><Link to="/src/pages/allService.jsx" >Services</Link></li>
            <li><Link to="/src/pages/allLocation.jsx" >Locations</Link></li>
            <li><Link to="/my-app/src/pages/contact.jsx" >Contact</Link></li>
            <li><Link to="/my-app/src/pages/list.jsx" >Admin</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: BookMyDarshan7@gmail.com</p>
          <p>Phone: +91 8109263143</p>
          <p>Address:Nanakheda Main Road, Ujjain, Madhya Pradesh, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ujjain Tourism. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
