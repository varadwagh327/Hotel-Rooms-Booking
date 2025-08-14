import React from 'react';

const Navbar = ({ showSection, activeSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <button 
          className="navbar-brand" 
          onClick={() => showSection('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <i className="fas fa-hotel"></i> Holiday Inn
        </button>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => showSection('home')}
                style={{ background: 'none', border: 'none' }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => showSection('about')}
                style={{ background: 'none', border: 'none' }}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'rooms' ? 'active' : ''}`}
                onClick={() => showSection('rooms')}
                style={{ background: 'none', border: 'none' }}
              >
                Rooms
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => showSection('services')}
                style={{ background: 'none', border: 'none' }}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => showSection('contact')}
                style={{ background: 'none', border: 'none' }}
              >
                Contact
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={`nav-link ${activeSection === 'booking' ? 'active' : ''}`}
                onClick={() => showSection('booking')}
                style={{ background: 'none', border: 'none' }}
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
