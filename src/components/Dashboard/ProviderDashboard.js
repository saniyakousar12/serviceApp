import React from "react";
import "./ProviderDashboard.css";

function ServiceProviderPage() {
  return (
    <div>

      {/* TOP NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <h2 className="logo-main">QUICKSERVE</h2>
        </div>

        <div className="nav-center">
          <p className="nav-item active">Dashboard</p>
          <p className="nav-item">Jobs</p>
          <p className="nav-item">Earnings</p>
          <p className="nav-item">Profile</p>
        </div>

        <div className="nav-right">
          <button className="logout-btn">Logout</button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="content">

        <h2 className="page-title">Service Provider Dashboard</h2>

        {/* NEW REQUESTS */}
        <h3 className="section-title">New Requests</h3>

        <div className="request-card">
          <div className="request-details">
            <p><b>Customer:</b> Priya</p>
            <p><b>Service:</b> Cleaning</p>
            <p><b>Time:</b> 4:00 PM</p>
          </div>

          <div className="actions">
            <button className="accept-btn">Accept</button>
            <button className="reject-btn">Reject</button>
          </div>
        </div>

        {/* EARNINGS */}
        <h3 className="section-title">Earnings</h3>

        <div className="earnings-card">
          <p><b>Today:</b> ₹500</p>
          <p><b>This Month:</b> ₹8200</p>
        </div>

      </div>
    </div>
  );
}

export default ServiceProviderPage;