import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const ADMIN_EMAIL = "vasudevsharma162@gmail.com";
const ADMIN_PASSWORD = "Bhola_s1";

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = loginForm;
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setLoggedIn(true);
    } else {
      alert('Invalid admin credentials');
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/bookings');
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      fetchBookings();
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return (
      <> 
      <Navbar></Navbar>   
        <div style={styles.container}>
        <h2>🔐 Admin Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleLoginChange}
            required
            style={styles.input}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginChange}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
      <Footer></Footer>
      </>

    );
  }

  return (
    <>
    <Navbar></Navbar>
    <div style={styles.container}>
      <h2>📋 Tour Booking List</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul style={styles.list}>
          {bookings.map((b, index) => (
            <li key={index} style={styles.item}>
              <strong>{b.name}</strong> ({b.email}) — {b.phone} <br />
              👥 {b.persons} person(s), 📅 {b.date}
            </li>
          ))}
        </ul>
      )}
    </div>
    <Footer></Footer>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  item: {
    marginBottom: '1rem',
    padding: '0.5rem',
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  input: {
    display: 'block',
    width: '100%',
    marginBottom: '1rem',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default BookingList;
