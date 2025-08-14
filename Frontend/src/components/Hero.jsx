import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const Hero = ({ showSection }) => {
  useEffect(() => {
    // Initialize Bootstrap carousel
    const carouselElement = document.getElementById('roomCarousel');
    if (carouselElement && window.bootstrap) {
      new window.bootstrap.Carousel(carouselElement, {
        ride: 'carousel'
      });
    }
  }, []);

  return (<>
  <div>
    <NavBar showSection={showSection} activeSection='home'/>
  </div>
    <section id="home" className="page-section active">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Holiday Inn</h1>
          <p>Experience luxury and comfort in the heart of the city</p>
          <button className="btn btn-book-now" onClick={() => showSection('booking')}>
            <i className="fas fa-calendar-alt"></i> Book Now
          </button>
        </div>
      </div>

      {/* Featured Rooms Carousel */}
      <div className="container section-padding">
        <h2 className="text-center mb-5">Featured Rooms</h2>
        <div id="roomCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <img 
                src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                className="d-block w-100" 
                alt="Deluxe Suite"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Deluxe Suite</h5>
                <p>Luxury accommodation with city views</p>
              </div>
            </div>
            {/* Slide 2 */}
            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                className="d-block w-100" 
                alt="Standard Room"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Standard Room</h5>
                <p>Comfortable and affordable accommodation</p>
              </div>
            </div>
            {/* Slide 3 */}
            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
                className="d-block w-100" 
                alt="Presidential Suite"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Presidential Suite</h5>
                <p>Ultimate luxury experience</p>
              </div>
            </div>
          </div>
          <button 
            className="carousel-control-prev" 
            type="button" 
            data-bs-target="#roomCarousel" 
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button 
            className="carousel-control-next" 
            type="button" 
            data-bs-target="#roomCarousel" 
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
    <div>
      <Footer showSection={showSection}/>
    </div>
  </>
  );
};

export default Hero;
