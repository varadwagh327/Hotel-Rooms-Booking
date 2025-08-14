import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const gradientStyle = {
    background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
  };

  const contactBtnStyle = {
    background: "linear-gradient(90deg, #ff512f, #dd2476)",
    color: "white",
    borderRadius: "25px",
    padding: "8px 20px",
    fontWeight: "500",
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow"
      style={gradientStyle}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="/">
          Booking<span style={{ color: "#ffdd57" }}>Hub</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link px-3" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/getbooking">
                Bookings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="/getcontactinfo">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
