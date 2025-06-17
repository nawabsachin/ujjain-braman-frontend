import React from 'react';
import './ServicesPage.css';


const services = [
  {
    icon: '🚖',
    title: 'Pickup from Railway Station & Bus Stand',
    description: 'We provide timely and reliable pickup services from Ujjain Railway Station and local Bus Stands to your hotel or desired destination.*Pick from Indore will be chargeable ',
  },
  {
    icon: '🚗',
    title: 'Comfortable Car Facility for City Tours',
    description: 'Explore Ujjain with our air-conditioned, comfortable car service covering all major attractions.',
  },
  {
    icon: '🍛',
    title: 'Delicious Veg Food Options',
    description: 'Enjoy healthy and tasty vegetarian meals at select local eateries and dhabas included in our package.',
  },
  {
    icon: '🧘',
    title: 'Experienced Local Guide',
    description: 'Our professional and friendly guides share insightful knowledge about the city\'s culture, temples, and traditions.',
  },
  {
    icon: '🔱',
    title: 'VIP Darshan at Mahakaleshwar Temple',
    description: 'Skip the lines with our VIP darshan access at the famous Mahakaleshwar Jyotirlinga Temple.',
  },
  {
    icon: '🏨',
    title: 'Hotel Stay in Prime Locations',
    description: 'Stay in clean, well-reviewed hotels located centrally, close to temples and main attractions.',
  },
];

function ServicesPage() {
  return (
    <div className="services-page">
      <header className="services-header">
        <h1>✨ Our Services</h1>
      </header>
      <section className="services-content">
        <div className="services-image">
          {/* <img src={servicesImage} alt="Ujjain Tour" /> */}
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
