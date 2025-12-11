import React from "react";
import "./CustomerDashboard.css";

function CustomerPage() {
    return (
        <div className="layout">

            {/* LEFT SIDEBAR */}
            <div className="sidebar">
                <div className="logo-container">
                    <h1 className="logo-main">QUICKSERVE</h1>
                    <p className="logo-tagline">Trusted Local Services</p>
                </div>

                <div className="menu">
                    <p className="menu-item active">Dashboard</p>
                    <p className="menu-item">Bookings</p>
                    <p className="menu-item">Profile</p>
                </div>

                <button className="logout-btn">Logout</button>
            </div>

            {/* MAIN CONTENT */}
            <div className="content">

                <h2 className="title">Customer Dashboard</h2>

                {/* SEARCH */}
                <input
                    type="text"
                    className="search"
                    placeholder="Search for services…"
                />

                {/* CATEGORIES */}
                <h3 className="section-title">Categories</h3>
                <div className="categories">
                    <div className="category-card">Cleaning</div>
                    <div className="category-card">Electrician</div>
                    <div className="category-card">Plumber</div>
                    <div className="category-card">Painter</div>
                </div>

                {/* PROVIDERS */}
                <h3 className="section-title">Available Providers</h3>
                <div className="providers">

                    <div className="provider-card">
                        <h4>Rahul (Electrician)</h4>
                        <p>⭐ 4.5 | 3 yrs experience</p>
                        <button className="book-btn">Book Now</button>
                    </div>

                    <div className="provider-card">
                        <h4>Sunita (Cleaner)</h4>
                        <p>⭐ 4.8 | 5 yrs experience</p>
                        <button className="book-btn">Book Now</button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default CustomerPage;