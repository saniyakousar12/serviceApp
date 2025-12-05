import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-custom shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand">QuickServe</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section d-flex justify-content-center align-items-center">
        <div className="hero-content text-center">
          <h1 className="hero-title">Find Trusted Local Services</h1>
          <p className="hero-subtitle">
            From electricians to home cleaning — everything you need, delivered fast & reliably.
          </p>

          <div className="mt-4">
            <button
              className="main-btn btn-dark-custom m-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="main-btn btn-outline-custom m-2"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="search-section container text-center">
        <h3 className="fw-bold mb-3 section-header">What service do you need?</h3>

        <div className="search-bar p-4 shadow-sm">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search for electrician, plumber, home cleaning..."
          />
          <button className="btn btn-search">Search</button>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="services-section container">
        <h3 className="section-header text-center">Popular Services</h3>

        <div className="row mt-4 g-4">
          {[
            ["bi-lightning-charge", "Electrician", "Repairs, wiring & installations"],
            ["bi-water", "Plumber", "Leak fixes, fittings & drainage"],
            ["bi-brush", "Home Cleaning", "Kitchen, bathroom & full home"],
            ["bi-scissors", "Salon at Home", "Beauty & grooming services"],
            ["bi-pc-display", "Laptop Repair", "Software & hardware issues"],
            ["bi-house-door", "Home Painting", "Interior & exterior painting"]
          ].map(([icon, name, desc], index) => (
            <div className="col-6 col-md-4 col-lg-4" key={index}>
              <div className="service-card shadow-sm">
                <i className={`bi ${icon} service-icon`}></i>
                <h5 className="service-title">{name}</h5>
                <p className="service-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works container">
        <h3 className="section-header text-center">How It Works</h3>

        <div className="row text-center mt-4 g-4">
          <div className="col-md-4">
            <div className="process-card">
              <i className="bi bi-search process-icon"></i>
              <h5>1. Search</h5>
              <p>Choose the service you want instantly.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="process-card">
              <i className="bi bi-stars process-icon"></i>
              <h5>2. Compare Experts</h5>
              <p>Check profiles, ratings and experience.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="process-card">
              <i className="bi bi-calendar-check process-icon"></i>
              <h5>3. Book</h5>
              <p>Book the best technician at your preferred time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-us-section container">
        <h3 className="section-header text-center">Why Choose QuickServe?</h3>

        <div className="row mt-4 g-4 text-center">
          {[
            ["bi-patch-check", "Verified Professionals", "Background-checked and experienced experts."],
            ["bi-cash-coin", "Transparent Pricing", "No hidden charges. Upfront clear pricing."],
            ["bi-lightning", "Fast & Easy Booking", "Book services in just a few clicks."],
            ["bi-headset", "24/7 Support", "We are always available to assist you."]
          ].map(([icon, title, desc], index) => (
            <div className="col-md-3 col-6" key={index}>
              <div className="why-card shadow-sm">
                <i className={`bi ${icon} why-icon`}></i>
                <h5>{title}</h5>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <div className="container">
          <h3 className="section-header text-center">What Our Customers Say</h3>

          <div className="row mt-4 g-4">
            {[
              [
                "⭐⭐⭐⭐⭐",
                "QuickServe helped me get an electrician in 10 minutes! Super fast.",
                "— Rohan K."
              ],
              [
                "⭐⭐⭐⭐⭐",
                "Very professional and timely service. Loved the experience!",
                "— Sneha R."
              ],
              [
                "⭐⭐⭐⭐⭐",
                "Affordable and trustworthy! Highly recommended.",
                "— Aarav M."
              ]
            ].map(([stars, text, author], index) => (
              <div className="col-md-4" key={index}>
                <div className="testimonial-card shadow-sm">
                  <h4>{stars}</h4>
                  <p>{text}</p>
                  <span className="author">{author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD APP SECTION */}
      <section className="download-app-section text-center">
        <h2>Download Our App</h2>
        <p>Book trusted professionals anytime, anywhere.</p>

        <div className="d-flex justify-content-center gap-3 mt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            className="store-badge"
            alt="Google Play"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            className="store-badge"
            alt="App Store"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 QuickServe — All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default LandingPage;
