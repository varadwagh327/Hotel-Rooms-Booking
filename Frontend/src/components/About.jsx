import React from 'react';
import NavBar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const About = ({ showSection }) => {
  return (<>
  <div>
    <NavBar showSection={showSection} activeSection='about'/>
  </div>
    <section id="about" className="page-section section-padding">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-6 fade-in">
            <h2 className="mb-4">About Holiday Inn</h2>
            <p className="lead">
              Located in the heart of the city, Holiday Inn offers an unparalleled experience of luxury and comfort. 
              Our hotel has been serving distinguished guests for over two decades.
            </p>
            <p>
              With our commitment to excellence, we provide world-class amenities, exceptional service, and an atmosphere 
              that makes every guest feel at home. Our team of dedicated professionals ensures that your stay with us is 
              memorable and comfortable.
            </p>
            <div className="row mt-4">
              <div className="col-md-6">
                <h5><i className="fas fa-award text-warning"></i> 25+ Years Experience</h5>
                <p>Serving guests with excellence since 1998</p>
              </div>
              <div className="col-md-6">
                <h5><i className="fas fa-users text-warning"></i>500+ Happy Guests</h5>
                <p>Satisfied customers every month</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 fade-in">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Hotel Lobby" 
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4 fade-in">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Restaurant" 
                className="img-fluid rounded mb-3"
              />
              <h5>Fine Dining</h5>
              <p>Experience culinary excellence at our award-winning restaurant.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 fade-in">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Spa" 
                className="img-fluid rounded mb-3"
              />
              <h5>Luxury Spa</h5>
              <p>Relax and rejuvenate at our full-service spa and wellness center.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 fade-in">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Business Center" 
                className="img-fluid rounded mb-3"
              />
              <h5>Business Center</h5>
              <p>State-of-the-art facilities for all your business needs.</p>
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

export default About;
