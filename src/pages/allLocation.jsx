import React from 'react';
import './all.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

import omkareshwar from '../image/IMG_1879.JPG';
import baglamukhi from '../image/IMG_1874.JPG';
import dewas from '../image/IMG_1885.JPG';
import maheshwar from '../image/IMG_1875.JPG';
import mandav from '../image/IMG_1877.JPG';
import khatu from '../image/IMG_1883.JPG';
import sawaliya from '../image/IMG_1881.JPG';
import panchimarhi from '../image/IMG_1890.JPG';

const destinations = [
  {
    name: 'Omkareshwar Temple',
    description: 'One of the 12 Jyotirlinga temples dedicated to Lord Shiva...',
    image: omkareshwar,
    price: '₹2,000',
  },
  {
    name: 'Baglamukhi Mata Mandir, Nalkheda',
    description: 'A revered Siddh Peeth dedicated to Goddess Baglamukhi...',
    image: baglamukhi,
    price: '₹1,500',
  },
  {
    name: 'Dewas Tekri',
    description: 'A sacred hill housing multiple temples...',
    image: dewas,
    price: '₹1,200',
  },
  {
    name: 'Maheshwar Fort',
    description: 'A historic fort on the banks of the Narmada River...',
    image: maheshwar,
    price: '₹1,800',
  },
  {
    name: 'Mandav (Mandu)',
    description: 'A historic town known for its ancient ruins...',
    image: mandav,
    price: '₹2,500',
  },
  {
    name: 'Khatu Shyam',
    description: 'A revered temple of Khatu Shyam...',
    image: khatu,
    price: '₹2,500',
  },
  {
    name: 'Sawaliya Seth (Mandfiya)',
    description: 'Famous temple in Rajasthan...',
    image: sawaliya,
    price: '₹2,500',
  },
  {
    name: 'Panchimarhi',
    description: 'One of the most popular tourist places...',
    image: panchimarhi,
    price: '₹2,000',
  },
];

const DestinationsPage = () => (
  <>
    <Navbar />
    <div className="container">
      <h1>Additional Tour Destinations</h1>
      <div className="cards">
        {destinations.map((destination, index) => (
          <div className="card" key={index}>
            <img src={destination.image} alt={destination.name} />
            <div className="content">
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
              {/* <p className="price">{destination.price}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);

export default DestinationsPage;
