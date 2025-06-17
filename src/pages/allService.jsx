import React from 'react';
import './allService.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const carImages = [
  // './images/car2.jpeg',
  // './image/car3.jpeg',
  '/images/car.jpeg',
  '/images/car1.jpeg',
  '/images/car2.jpeg',
  '/images/car3.jpeg',
];

const foodImages = [
  '/images/food1.jpg',
  '/images/food.jpg',
  '/images/food3.jpg',
  '/images/food2.jpg',
  
];

const hotelImages = [
  '/images/hotel.jpeg',
  '/images/hotel1.jpeg',
  '/images/hotel3.jpeg',
  '/images/hotel4.jpeg',
  
];

const SectionWithGallery = ({ title, description, images }) => (
  <section className="facility-section">
    <h2>{title}</h2>
    <p>{description}</p>
    <div className="image-gallery">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`${title} ${idx + 1}`} loading="lazy" />
      ))}
    </div>
  </section>
);

const UjjainTourInfoExpanded = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="expanded-tour-info">
      <h1 className="main-title">Explore Ujjain Facilities in Detail</h1>

      <SectionWithGallery
        title="Comfortable Car Facility for City Tours"
        description="Travel around Ujjain in style and comfort with our fleet of well-maintained, air-conditioned cars. Our drivers are experienced, friendly, and familiar with the city’s top attractions, ensuring you have a safe and enjoyable tour experience. Whether you're visiting historic temples, bustling markets, or serene riverbanks, our cars provide a relaxing ride every time."
        images={carImages}
      />

      <SectionWithGallery
        title="Delicious Veg Food Options"
        description="Savor the flavors of Ujjain with our curated vegetarian food experiences. We partner with local eateries and dhabas that serve authentic, healthy, and tasty vegetarian meals. From spicy street food to traditional thalis, enjoy a variety of dishes that celebrate the rich culinary heritage of the region. Perfect for both casual bites and hearty meals during your tours."
        images={foodImages}
      />

      <SectionWithGallery
        title="Hotel Stay in Prime Locations"
        description="Rest comfortably in our selection of clean, well-reviewed hotels located in prime spots around Ujjain. Close to major temples and tourist spots, these hotels offer excellent amenities, friendly service, and a warm ambiance. Whether you prefer luxury, boutique, or budget stays, we help you find accommodations that suit your preferences and make your visit hassle-free."
        images={hotelImages}
      />

      <div className="booking-area">
        <button
          className="book-now-btn"
          onClick={() => alert('Booking feature coming soon!')}
        >
          📝 Book Your Ujjain Tour Now
        </button>
      </div>
    </div>

    <Footer></Footer>
    </>
  );
};

export default UjjainTourInfoExpanded;
