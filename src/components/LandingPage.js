
import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="font-[Poppins] bg-[#f8f9fa] text-[#2b2b2b]">

      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 bg-[#3c4166] shadow-sm py-4 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-white font-bold text-2xl tracking-wide uppercase">
            QuickServe
          </h1>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        className="h-[90vh] flex items-center justify-center text-center px-5 text-white"
        style={{
          background:
            "linear-gradient(rgba(27,31,59,0.7), rgba(27,31,59,0.7)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80') center/cover",
        }}
      >
        <div className="bg-white/20 p-10 rounded-xl backdrop-blur-md max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold font-[Montserrat]">
            Find Trusted Local Services
          </h1>
          <p className="mt-4 text-lg opacity-90">
            From electricians to home cleaning — everything you need.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 rounded-xl bg-[#fca311] text-[#3c4166] font-semibold hover:bg-[#ffd56b] transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-[#3c4166] transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* SEARCH BAR */}
      <section className="max-w-3xl mx-auto text-center my-16 px-5">
        <h3 className="text-3xl font-[Montserrat] font-bold text-[#3c4166]">
          What service do you need?
        </h3>

        <div className="bg-white mt-6 p-4 rounded-xl shadow flex gap-3">
          <input
            type="text"
            placeholder="Search electrician, plumber, cleaning..."
            className="flex-1 border rounded-xl px-4 py-2 outline-none"
          />
          <button className="px-5 py-2 bg-[#3c4166] text-white rounded-xl font-semibold hover:bg-[#fca311] hover:text-[#3c4166] transition">
            Search
          </button>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="max-w-6xl mx-auto px-5 py-10">
        <h3 className="text-center text-3xl font-[Montserrat] font-bold text-[#3c4166]">
          Popular Services
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {[
            ["bi-lightning-charge", "Electrician", "Repairs, wiring & installations"],
            ["bi-water", "Plumber", "Leak fixes, fittings & drainage"],
            ["bi-brush", "Home Cleaning", "Kitchen, bathroom & full home"],
            ["bi-scissors", "Salon at Home", "Beauty & grooming services"],
            ["bi-pc-display", "Laptop Repair", "Software & hardware issues"],
            ["bi-house-door", "Home Painting", "Interior & exterior painting"],
          ].map(([icon, name, desc], i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:-translate-y-2 hover:shadow-xl transition border"
            >
              <i className={`bi ${icon} text-4xl text-[#fca311]`} />
              <h5 className="mt-3 font-bold">{name}</h5>
              <p className="text-sm text-gray-500 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-5 py-10">
        <h3 className="text-center text-3xl font-[Montserrat] font-bold text-[#3c4166]">
          How It Works
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mt-6 text-center">
          {[
            ["bi-search", "1. Search", "Choose the service instantly."],
            ["bi-stars", "2. Compare Experts", "Check ratings & experience."],
            ["bi-calendar-check", "3. Book", "Book at your preferred time."],
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow border hover:-translate-y-2 transition"
            >
              <i className={`bi ${icon} text-4xl text-[#fca311]`} />
              <h5 className="mt-3 font-bold">{title}</h5>
              <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h3 className="text-center text-3xl font-[Montserrat] font-bold text-[#3c4166]">
          Why Choose QuickServe?
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center">
          {[
            ["bi-patch-check", "Verified Professionals", "Background checked experts."],
            ["bi-cash-coin", "Transparent Pricing", "No hidden charges."],
            ["bi-lightning", "Fast & Easy Booking", "Book in just a few clicks."],
            ["bi-headset", "24/7 Support", "We are always available."],
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow border hover:-translate-y-2 transition"
            >
              <i className={`bi ${icon} text-4xl text-[#fca311]`} />
              <h5 className="font-bold mt-2">{title}</h5>
              <p className="text-sm text-gray-600 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-3xl font-[Montserrat] font-bold text-[#3c4166]">
            What Our Customers Say
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              ["⭐⭐⭐⭐⭐", "QuickServe helped me get an electrician in 10 minutes!", "— Rohan K."],
              ["⭐⭐⭐⭐⭐", "Very professional and timely service.", "— Sneha R."],
              ["⭐⭐⭐⭐⭐", "Affordable and trustworthy!", "— Aarav M."],
            ].map(([stars, text, author], i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow border text-center"
              >
                <h4 className="text-yellow-400 text-xl">{stars}</h4>
                <p className="mt-3 text-gray-700">{text}</p>
                <span className="block mt-2 font-semibold text-[#3c4166]">
                  {author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD APP */}
      <section className="text-center py-20 bg-[#3c4166] text-white px-5">
        <h2 className="text-4xl font-[Montserrat] font-bold">Download Our App</h2>
        <p className="mt-2">Book trusted professionals anytime.</p>

        <div className="flex justify-center gap-4 mt-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            className="w-44 hover:scale-105 transition"
            alt="Google Play"
          />
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            className="w-44 hover:scale-105 transition"
            alt="App Store"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3c4166] py-6 text-center text-white text-sm">
        © 2025 QuickServe — All Rights Reserved
      </footer>

    </div>
  );
}

export default LandingPage;
