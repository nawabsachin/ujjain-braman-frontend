


import React, { useState, useEffect } from 'react';
import './Slider.css';

const images = [
  '/images/IMG_1849.JPG',
  '/images/IMG_1847.JPG',
  '/images/IMG_1843.JPG',
  '/images/IMG_1844.JPG'
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // 🔄 Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change every 3 seconds

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slider-image"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
       <div className="button-wrapper">
    <div className="button-wrapper">
  <a href="tel:8109263143" className="btn12">For Booking Contact Now 8109263143</a>
  <a href="tel:7489557531" className="btn13">For Booking Contact Now 7489557531</a>
</div>

    </div>

      </div>

      <button className="slider-button prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="slider-button next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
