import axios from 'axios';
import React, { useState } from 'react';
import NavBar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const Booking = ({ showSection }) => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [booking_date, setBooking_date] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:4000/api/v1/booking/post',
        { Name, email, phone, roomType, time, booking_date, guests },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log(res.data.Booking);

      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setRoomType('');
      setTime('');
      setGuests('');
      setBooking_date('');
    } catch (error) {
      console.error('Booking failed:', error);
    }
  };

  return (<>
  <div>
    <NavBar showSection={showSection} activeSection='booking'/>
  </div>
  
    <section id="booking" className="page-section section-padding bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-center mb-4">Book Your Stay</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="Name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="roomType" className="form-label">Room Type *</label>
                      <select
                        id="roomType"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        required
                        className="form-control"
                      >
                        <option value="">Select Room Type</option>
                        <option value="Standard Single Room">Standard Single Room - Rs699/night</option>
                        <option value="Deluxe Double Room">Deluxe Double Room - Rs1299/night</option>
                        <option value="Presidential Suite">Presidential Suite - Rs2999/night</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="booking_date" className="form-label">Check-in Date *</label>
                      <input
                        type="date"
                        id="booking_date"
                        value={booking_date}
                        onChange={(e) => setBooking_date(e.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="time" className="form-label">Time *</label>
                      <input
                        type="text"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="guests" className="form-label">Number of Guests</label>
                      <select
                        id="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="form-control"
                      >
                        <option value="">Select Guests</option>
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-lg">
                      <i className="fas fa-calendar-check"></i> Confirm Booking
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <Footer showSection={showSection}/>
    </div>
  </>
  );
};

export default Booking;
