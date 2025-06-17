


import React from 'react';
import './Location.css';

// Importing local images
import imgMahakaleshwar from '../image/mahakal.jpeg';
import imgMahakalCorridor from '../image/IMG_1895.JPG';
import imgKalBhairav from '../image/kalbhairav.jpeg';
import imgHarshiddhi from '../image/harshidhhi.jpeg';
import imgSandipani from '../image/sandipani.jpeg';
import imgMangalnath from '../image/mangalnath.jpeg';
import imgIskcon from '../image/IMG_1896.JPG';
import imgChintaman from '../image/IMG_1897.JPG';

const locations = [
  {
    name: "Mahakaleshwar Mandir",
    description: "One of the 12 Jyotirlingas of Lord Shiva, Mahakaleshwar is believed to be the ruler of time. It is the most sacred temple in Ujjain and holds deep spiritual significance for devotees.",
    image: imgMahakaleshwar
  },
  {
    name: "Mahakal Corridor",
    description: "A grand spiritual walkway that enhances the Mahakal temple complex, featuring murals and sculptures of Hindu mythology, creating a divine atmosphere for pilgrims.",
    image: imgMahakalCorridor
  },
  {
    name: "Kal Bhairav Mandir",
    description: "Dedicated to Kal Bhairav, the fierce form of Lord Shiva, this temple is known for its unique offering of liquor and is deeply connected to Tantric traditions.",
    image: imgKalBhairav
  },
  {
    name: "Harshiddhi Mata Mandir",
    description: "One of the 51 Shaktipeeths, where the elbow of Goddess Sati is said to have fallen. The temple radiates Shakti (power) and is a major pilgrimage site for Devi worshippers.",
    image: imgHarshiddhi
  },
  {
    name: "Sandipani Ashram",
    description: "An ancient Gurukul where Lord Krishna, Balram, and Sudama studied under Guru Sandipani. A sacred place symbolizing wisdom and Vedic learning.",
    image: imgSandipani
  },
  {
    name: "Mangalnath Mandir",
    description: "Known as the birthplace of Mars (Mangal), this temple is a powerful astrological center where devotees perform rituals to remove planetary doshas.",
    image: imgMangalnath
  },
  {
    name: "ISKCON Temple",
    description: "A peaceful temple dedicated to Lord Krishna and Radha, run by ISKCON. It's a serene space for kirtan, meditation, and spiritual learning.",
    image: imgIskcon
  },
  {
    name: "Chintaman Ganesh Mandir",
    description: "One of the oldest temples of Lord Ganesha, believed to remove worries ('Chinta'). Devotees visit to seek blessings for wisdom and peace.",
    image: imgChintaman
  }
];

const Locations = () => (
  <div className="page">
    <h1>📍 Must Visit Spiritual Locations</h1>
    {locations.map((place) => (
      <div className="location-box" key={place.name}>
        <img src={place.image} alt={place.name} className="location-image" />
        <h3>{place.name}</h3>
        <p>{place.description}</p>
      </div>
    ))}
  </div>
);

export default Locations;
