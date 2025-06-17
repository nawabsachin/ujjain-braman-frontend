import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './pages/Services';

import Hotels from './pages/Hotels';
// import Contact from './pages/Contact';

import Navbar from './components/navbar';
import Locations from './pages/Locations';
import UjjainTourInfo from './pages/allService';
import DestinationsPage from './pages/allLocation';
import BookingList from './pages/list';
import Contact from './pages/contact';


// import './App.css';

function App() {
  return (
    <Router>
      
      {/* <Home></Home> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/locations" element={<Locations />} /> */}
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/src/pages/allService.jsx" element={<UjjainTourInfo />} />
         <Route path="/src/pages/allLocation.jsx" element={<DestinationsPage />} />
          <Route path="/my-app/src/pages/list.jsx" element={<BookingList/>} />
            <Route path="/my-app/src/pages/contact.jsx" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
