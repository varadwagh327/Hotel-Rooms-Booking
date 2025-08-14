import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';

import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Rooms from './components/Rooms.jsx';
import Services from './components/Services.jsx';
import Booking from './components/Booking.jsx';
import Contact from './components/Contact.jsx';


//Admin
import GetBooking from './Admin/GetBooking.jsx'
import GetContactInfo from './Admin/GetContactInfo.jsx'

// Wrapper component to use hooks inside Router context
function AppContent() {
  const navigate = useNavigate();
  
  const showSection = (sectionName) => {
    if (sectionName === 'home') {
      navigate('/');
    } else {
      navigate(`/${sectionName}`);
    }
  };

  return (
    <Routes>
      <Route path='/' element={<Hero showSection={showSection}/>}/>
      <Route path='/about' element={<About showSection={showSection}/>}/>
      <Route path='/rooms' element={<Rooms showSection={showSection}/>}/>
      <Route path='/services' element={<Services showSection={showSection}/>}/>
      <Route path='/contact' element={<Contact showSection={showSection}/>}/>
      <Route path='/booking' element={<Booking showSection={showSection}/>}/>
      <Route path='/getbooking' element={<GetBooking showSection={showSection}/>}/>
      <Route path='/getcontactinfo' element={<GetContactInfo showSection={showSection}/>}/>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
