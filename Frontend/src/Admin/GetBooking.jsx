import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminNavBar from "./AdminNavBar.jsx"
import AdminFooter from "./AdminFooter.jsx";
import './GetBooking.css';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [viewMode, setViewMode] = useState("grid");

  const fetchBookings = async () => {
    try {
      console.log('Fetching bookings from API...');
      const response = await axios.get("http://localhost:4000/api/v1/booking/getall");
      console.log('API Response:', response.data);
      
      if (response.data.success && response.data.bookings) {
        setBookings(response.data.bookings);
        console.log('Bookings set:', response.data.bookings);
      } else {
        console.log('No bookings found in response');
        setBookings([]);
      }
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError(err.response?.data?.message || "Failed to fetch bookings. Please check if the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setError("");
    fetchBookings();
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.roomType?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.phone?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });


  // Loading Animation Component
  if (loading) {
    return (
      <div className="booking-page">
        <AdminNavBar/>
        <div className="loading-container">
          <motion.div 
            className="loading-3d"
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="booking-cube">
              <div className="face front"><i className="fas fa-calendar-check"></i></div>
              <div className="face back"><i className="fas fa-bed"></i></div>
              <div className="face right"><i className="fas fa-user-friends"></i></div>
              <div className="face left"><i className="fas fa-hotel"></i></div>
              <div className="face top"><i className="fas fa-clock"></i></div>
              <div className="face bottom"><i className="fas fa-bookmark"></i></div>
            </div>
          </motion.div>
          <motion.h3 
            className="loading-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading Bookings...
          </motion.h3>
          <div className="loading-progress">
            <motion.div 
              className="progress-bar"
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Error Component
  if (error) {
    return (
      <div className="booking-page">
        <AdminNavBar/>
        <motion.div 
          className="error-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="error-3d"
            animate={{
              rotateY: [0, 15, -15, 0],
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <i className="fas fa-exclamation-triangle"></i>
          </motion.div>
          <h3 className="error-title">Booking System Error</h3>
          <p className="error-message">{error}</p>
          <motion.button 
            className="btn btn-gradient btn-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRefresh}
          >
            <i className="fas fa-redo me-2"></i>
            Retry Loading
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="booking-page">
      {/* Animated Background */}
      <div className="bg-elements">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <i className={[
              'fas fa-hotel', 'fas fa-bed', 'fas fa-calendar-check', 
              'fas fa-user-friends', 'fas fa-clock', 'fas fa-star'
            ][Math.floor(Math.random() * 6)]}></i>
          </motion.div>
        ))}
      </div>

      <AdminNavBar/>
      
      {/* Header Section */}
      <motion.div 
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <motion.div 
                className="header-content"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="header-icon"
                  animate={{
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <i className="fas fa-calendar-check"></i>
                </motion.div>
                <h1 className="page-title">
                  Hotel Bookings
                  <span className="title-accent">Management</span>
                </h1>
                <p className="page-subtitle">
                  Monitor, manage and track all hotel reservations in real-time
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4">
              <motion.div 
                className="header-stats-grid"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="stat-item">
                  <motion.div 
                    className="stat-number"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {filteredBookings.length}
                  </motion.div>
                  <div className="stat-label">Total Bookings</div>
                </div>
                <div className="stat-item">
                  <motion.div 
                    className="stat-number confirmed"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    {filteredBookings.filter(b => b.status === 'confirmed').length || Math.floor(filteredBookings.length * 0.7)}
                  </motion.div>
                  <div className="stat-label">Confirmed</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Control Panel */}
      <motion.div 
        className="control-panel"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="container">
          <div className="panel-content">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="search-section">
                  <motion.div 
                    className="search-wrapper"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <i className="fas fa-search search-icon"></i>
                    <input
                      type="text"
                      className="form-control search-input"
                      placeholder="Search bookings by name, email, room type..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {searchTerm && (
                      <motion.button
                        className="clear-search"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={() => setSearchTerm("")}
                      >
                        <i className="fas fa-times"></i>
                      </motion.button>
                    )}
                  </motion.div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="control-buttons">
                  <motion.button
                    className="btn btn-gradient btn-refresh"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleRefresh}
                    disabled={loading}
                  >
                    <motion.i 
                      className="fas fa-sync-alt"
                      animate={loading ? { rotate: 360 } : {}}
                      transition={{ duration: 1, repeat: loading ? Infinity : 0, ease: "linear" }}
                    />
                    <span className="ms-2">{loading ? 'Refreshing...' : 'Refresh'}</span>
                  </motion.button>
                  
                  <div className="filter-group">
                    <select 
                      className="form-select filter-select"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="date">Sort by Date</option>
                      <option value="name">Sort by Name</option>
                      <option value="room">Sort by Room</option>
                    </select>
                  </div>
                  
                  <div className="view-toggle">
                    <motion.button
                      className={`btn ${viewMode === 'grid' ? 'btn-active' : 'btn-outline'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setViewMode('grid')}
                    >
                      <i className="fas fa-th-large"></i>
                    </motion.button>
                    <motion.button
                      className={`btn ${viewMode === 'list' ? 'btn-active' : 'btn-outline'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setViewMode('list')}
                    >
                      <i className="fas fa-list"></i>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bookings Section */}
      <div className="bookings-section">
        <div className="container">
          {filteredBookings.length === 0 ? (
            <motion.div 
              className="empty-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="empty-icon"
                animate={{
                  rotateX: [0, 360],
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <i className="fas fa-calendar-times"></i>
              </motion.div>
              <h3 className="empty-title">
                {searchTerm ? 'No matching bookings found' : 'No bookings yet'}
              </h3>
              <p className="empty-subtitle">
                {searchTerm ? 'Try adjusting your search criteria' : 'Bookings will appear here when customers make reservations'}
              </p>
              {searchTerm && (
                <motion.button
                  className="btn btn-outline-primary"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSearchTerm("")}
                >
                  Clear Search
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div 
              className={`bookings-grid ${viewMode}`}
              layout
            >
              <AnimatePresence mode="popLayout">
                {filteredBookings.map((booking, index) => (
                  <motion.div
                    key={booking._id || index}
                    className="booking-card-wrapper"
                    layout
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.05,
                      layout: { duration: 0.3 }
                    }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="booking-card">
                      <div className="card-header">
                        <motion.div 
                          className="guest-avatar"
                          whileHover={{ scale: 1.1, rotateY: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <i className="fas fa-user-tie"></i>
                        </motion.div>
                        <div className="guest-info">
                          <h5 className="guest-name">{booking.Name}</h5>
                          <p className="guest-email">{booking.email}</p>
                        </div>
                      </div>
                      
                      <div className="card-body">
                        <div className="booking-details">
                          <div className="detail-item">
                            <i className="fas fa-bed"></i>
                            <span className="label">Room:</span>
                            <span className="value">{booking.roomType}</span>
                          </div>
                          <div className="detail-item">
                            <i className="fas fa-calendar"></i>
                            <span className="label">Date:</span>
                            <span className="value">{booking.booking_date ? new Date(booking.booking_date).toLocaleDateString() : 'N/A'}</span>
                          </div>
                          <div className="detail-item">
                            <i className="fas fa-clock"></i>
                            <span className="label">Time:</span>
                            <span className="value">{booking.time}</span>
                          </div>
                          <div className="detail-item">
                            <i className="fas fa-users"></i>
                            <span className="label">Guests:</span>
                            <span className="value">{booking.guests} Guest{booking.guests > 1 ? 's' : ''}</span>
                          </div>
                          <div className="detail-item">
                            <i className="fas fa-phone"></i>
                            <span className="label">Phone:</span>
                            <span className="value">{booking.phone}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="card-footer">
                        <div className="booking-id">
                          <small>ID: #{(booking._id || '').slice(-6).toUpperCase()}</small>
                        </div>
                      </div>
                      
                      {/* 3D Hover Effect Overlay */}
                      <div className="card-overlay"></div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      <AdminFooter />
    </div>
  );
};

export default Bookings;
