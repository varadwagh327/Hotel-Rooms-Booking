import React, { useState } from 'react';
import axios from 'axios';
import NavBar from "./Navbar.jsx"
import Footer from "./Footer.jsx"



const Contact = ({ showSection }) => {
  const [Name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        await axios.post('http://localhost:4000/api/v1/message/send',
          {Name,email,subject,message}, 
          {
          headers: {
            'Content-Type': 'application/json'
          },
        })
        .then((res)=>{
          console.log(res.data.message);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('')
        })
      } catch (error) {
        console.error('Error sending message:', error);
      }

  };

  return (<>
  <div>
    <NavBar showSection={showSection} activeSection='contact'/>
  </div>
  
    <section id="contact" className="page-section section-padding">
      <div className="container">
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="card">
              <div className="card-body p-4">
                <h4 className="mb-4">Send us a Message</h4>
                 <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input
                        type="text"
                        className={`form-control ${Name ? 'is-invalid' : ''}`}
                        id="name"
                        name="name"
                        value={Name}
                        onChange={(e) => {setName(e.target.value)}}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        className={`form-control ${email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject *</label>
                    <input
                      type="text"
                      className={`form-control ${subject ? 'is-invalid' : ''}`}
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => {setSubject(e.target.value)}}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      className={`form-control ${message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      rows="5"
                      value={message}
                      onChange={(e) => {setMessage(e.target.value)}}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-paper-plane"></i> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4">
            {/* ...Your contact info and Google Maps embed stay the same... */}
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

export default Contact;
