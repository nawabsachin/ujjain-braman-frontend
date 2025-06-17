import React from 'react';
import './Home.css';
import ServicesPage
 from '../pages/Services';
 import PricingPage from '../pages/price';
 import Locations from '../pages/Locations';
 import BookingForm from '../pages/Form';
 import Footer from './Footer';
 import Navbar from './navbar';
 import Slider from './slider'


const Home = () => {
  return (
    <>  
    <Navbar></Navbar>
    <Slider></Slider>
  
      <div className="home">
    

      {/* <section className="services">
        <h2>✨ Our Services</h2>
        <ul>
          <li>🚖 Pickup from Railway Station & Bus Stand</li>
          <li>🚗 Comfortable Car Facility for city tours</li>
          <li>🍛 Delicious Veg Food Options</li>
          <li>🧘 Experienced Local Guide</li>
          <li>🔱 VIP Darshan at Mahakaleshwar Temple</li>
          <li>🏨 Hotel Stay in prime locations</li>
        </ul>
      </section> */}

<Locations></Locations>

      <section className="locations">
        <h2>📍 Must Visit Locations</h2>
        <div className="location-grid">
          <div>🔱 Mahakaleshwar Mandir</div>
          <div>🛕 Mahakal Corridor</div>
          <div>🖤 Kal Bhairav Mandir</div>
          <div>🔥 Harshiddhi Mata Mandir</div>
          <div>📜 Sandipani Ashram</div>
          <div>🌌 Mangalnath Mandir</div>
          <div>🙏 ISKCON Temple</div>
          <div>🐘 Chintaman Ganesh Mandir</div>
        </div>
      </section>

      <section className="hotel">
        <h2>🏨 Comfortable Stay</h2>
        <p>We provide hotel bookings in budget and premium ranges, near Mahakal Mandir and key sites.</p>
      </section>

      <section className="contact">
        <h2>📞 Book Now or Contact Us</h2>
        <p>For bookings, call us or WhatsApp at <strong>+91-7489557531</strong></p>
        <button>Contact Now</button>
      </section>
     
    </div>
     
      <PricingPage></PricingPage>
      <ServicesPage></ServicesPage>
      <BookingForm></BookingForm>
      <Footer></Footer>
    </>

  );
};

export default Home;
