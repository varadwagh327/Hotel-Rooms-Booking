import React from 'react';
import Messages from './Admin/GetContactInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function TestAdmin() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand">Admin Panel - Contact Messages Test</span>
        </div>
      </nav>
      <Messages />
    </div>
  );
}

export default TestAdmin;
