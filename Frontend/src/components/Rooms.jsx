import React from 'react';
import NavBar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

const Rooms = ({ showSection }) => {
  const rooms = [
    {
      id: 1,
      name: 'Standard Single Room',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Comfortable single room with all basic amenities, perfect for business travelers or solo adventurers.',
      features: [
        { icon: 'fas fa-bed', text: '1 Single Bed' },
        { icon: 'fas fa-wifi', text: 'Free WiFi' },
        { icon: 'fas fa-tv', text: 'LED TV' },
        { icon: 'fas fa-snowflake', text: 'Air Conditioning' }
      ],
      price: 699
    },
    {
      id: 2,
      name: 'Deluxe Double Room',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Spacious double room with premium amenities and city views, ideal for couples or business executives.',
      features: [
        { icon: 'fas fa-bed', text: '1 Double Bed' },
        { icon: 'fas fa-wifi', text: 'Free WiFi' },
        { icon: 'fas fa-tv', text: 'Smart TV' },
        { icon: 'fas fa-coffee', text: 'Mini Bar' }
      ],
      price: 1299
    },
    {
      id: 3,
      name: 'Presidential Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Ultimate luxury suite with separate living area, premium amenities, and breathtaking panoramic views.',
      features: [
        { icon: 'fas fa-bed', text: 'King Size Bed' },
        { icon: 'fas fa-couch', text: 'Living Area' },
        { icon: 'fas fa-bath', text: 'Jacuzzi' },
        { icon: 'fas fa-utensils', text: 'Kitchenette' }
      ],
      price: 2999
    }
  ];

  return (<>
  <div>
    <NavBar showSection={showSection} activeSection='rooms'/>
  </div>
  
    <section id="rooms" className="page-section section-padding bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Rooms</h2>
        <div className="row">
          {rooms.map((room) => (
            <div key={room.id} className="col-lg-4 col-md-6 mb-4 fade-in">
              <div className="card h-100">
                <img 
                  src={room.image} 
                  className="card-img-top" 
                  alt={room.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text">{room.description}</p>
                  <ul className="list-unstyled">
                    {room.features.map((feature, index) => (
                      <li key={index}>
                        <i className={`${feature.icon} text-primary`}></i> {feature.text}
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price-tag">Rs{room.price}/night</span>
                    <button 
                      className="btn btn-primary" 
                      onClick={() => showSection('booking')}
                    >
                      Book Room
                    </button>
                  </div>
                </div>
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

export default Rooms;
