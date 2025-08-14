import React from 'react';
import NavBar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const Services = ({ showSection }) => {
  const services = [
    {
      icon: 'fas fa-wifi',
      title: 'Free WiFi',
      description: 'High-speed internet access throughout the hotel for all guests.'
    },
    {
      icon: 'fas fa-swimming-pool',
      title: 'Swimming Pool',
      description: 'Outdoor pool with poolside bar service, open 24/7 for your relaxation.'
    },
    {
      icon: 'fas fa-concierge-bell',
      title: 'Room Service',
      description: '24/7 room service with extensive menu from our award-winning restaurant.'
    },
    {
      icon: 'fas fa-parking',
      title: 'Valet Parking',
      description: 'Complimentary valet parking service for all hotel guests.'
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'Fitness Center',
      description: 'State-of-the-art gym equipment available 24/7 for your fitness needs.'
    },
    {
      icon: 'fas fa-spa',
      title: 'Spa & Wellness',
      description: 'Full-service spa offering massages, treatments, and wellness programs.'
    },
    {
      icon: 'fas fa-utensils',
      title: 'Restaurant',
      description: 'Fine dining restaurant serving international cuisine with local specialties.'
    },
    {
      icon: 'fas fa-car',
      title: 'Airport Shuttle',
      description: 'Complimentary airport shuttle service available for all guests.'
    }
  ];

  return (<>
  <div>
    <NavBar showSection={showSection} activeSection='services'/>
  </div>
  
    <section id="services" className="page-section section-padding">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4 fade-in">
              <div className="text-center service-item">
                <i className={`${service.icon} service-icon`}></i>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div>
      <Footer showSection={showSection}/>
    </div>
  </>
  );
};

export default Services;
