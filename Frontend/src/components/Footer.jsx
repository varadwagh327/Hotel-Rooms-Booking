import React from 'react';

const Footer = ({ showSection }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5><button
          onClick={() => showSection('getbooking')}
          >
              <i className="fas fa-hotel"></i>
            
               Holiday Inn
              </button></h5>
            <p>Experience luxury and comfort in the heart of the city. Your satisfaction is our priority.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/omkar.pawarpatil.104" className="me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="me-3">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <button 
                  onClick={() => showSection('home')}
                  style={{ background: 'none', border: 'none', color: 'var(--secondary-color)', textDecoration: 'none', padding: 0 }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => showSection('about')}
                  style={{ background: 'none', border: 'none', color: 'var(--secondary-color)', textDecoration: 'none', padding: 0 }}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => showSection('rooms')}
                  style={{ background: 'none', border: 'none', color: 'var(--secondary-color)', textDecoration: 'none', padding: 0 }}
                >
                  Rooms
                </button>
              </li>
              <li>
                <button 
                  onClick={() => showSection('services')}
                  style={{ background: 'none', border: 'none', color: 'var(--secondary-color)', textDecoration: 'none', padding: 0 }}
                >
                  Services
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4">
            <h6>Services</h6>
            <ul className="list-unstyled">
              <li><a href="#">Room Service</a></li>
              <li><a href="#">Restaurant</a></li>
              <li><a href="#">Spa & Wellness</a></li>
              <li><a href="#">Airport Shuttle</a></li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h6>Newsletter</h6>
            <p>Subscribe to get special offers and updates.</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email" />
              <button className="btn btn-outline-secondary" type="button">Subscribe</button>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">&copy; omkar. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="me-3">Privacy Policy</a>
            <a href="#" className="me-3">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
