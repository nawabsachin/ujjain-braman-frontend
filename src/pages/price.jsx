import React from 'react';
import './PricingPage.css';
import { Link } from 'react-router-dom';


function PricingPage() {
  return (
    <div className="pricing-page">
      <div className="pricing-card">
        <h1>✨ Ujjain Tour Package</h1>
        <p className="subheading">Our Package Starting From </p>

        <div className="price">₹4999</div>

        <ul className="included-services">
          <li>🚖 Pickup from Railway Station & Bus Stand</li>
          <li>🚗 Comfortable Car Facility for City Tours</li>
          <li>🍛 Delicious Veg Food Options</li>
          <li>🧘 Experienced Local Guide</li>
          {/* <li>🔱 VIP Darshan at Mahakaleshwar Temple</li> */}
          <li>🏨 Stay in Prime Locations</li>
        </ul>

       <Link to="/my-app/src/pages/contact.jsx" className="book-button">
          Book Now
        </Link>

      </div>
    </div>
  );
}

export default PricingPage;
