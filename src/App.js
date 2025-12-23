// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/LandingPage";
// import SignupPage from "./pages/SignupPage";
// import Loginpage from "./pages/Loginpage";
// import CustomerDashboard from "./components/Dashboard/CustomerDashboard";
// import ProviderDashboard from "./components/Dashboard/ProviderDashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/login" element={<Loginpage />} />

//         {/* Dashboards */}
//         <Route path="/customer" element={<CustomerDashboard />} />
//         <Route path="/provider" element={<ProviderDashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Public Pages */
import LandingPage from "./pages/LandingPage";
import Loginpage from "./pages/Loginpage";
import SignupPage from "./pages/SignupPage";

/* Customer Pages */
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import CustomerBookings from "./pages/customer/Bookings";
import CustomerReviews from "./pages/customer/Reviews";
import CustomerSearch from "./pages/customer/Search";
import CustomerSettings from "./pages/customer/Settings";
import BookProvider from "./pages/customer/book/BookProvider";

/* Provider Pages */
import ProviderDashboard from "./pages/provider/ProviderDashboard";
import ProviderBookings from "./pages/provider/Bookings";
import ProviderListings from "./pages/provider/Listings";
import ProviderReviews from "./pages/provider/Reviews";
import ProviderSettings from "./pages/provider/Settings";
import ProviderSetup from "./pages/provider/Setup";

//  import CustomerDashboard from "./components/Dashboard/CustomerDashboard";
//  import ProviderDashboard from "./components/Dashboard/ProviderDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* ===== Public Routes ===== */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* ===== Customer Routes ===== */}
         <Route path="/customer" element={<CustomerDashboard />} /> 
        <Route path="/customer/bookings" element={<CustomerBookings />} />
        <Route path="/customer/reviews" element={<CustomerReviews />} />
        <Route path="/customer/search" element={<CustomerSearch />} />
        <Route path="/customer/settings" element={<CustomerSettings />} />

        {/* Dynamic Route (book/[providerId]) */}
        <Route
          path="/customer/book/:providerId"
          element={<BookProvider />}
        />

        {/* ===== Provider Routes ===== */}
        <Route path="/provider" element={<ProviderDashboard />} />
        <Route path="/provider/bookings" element={<ProviderBookings />} />
        <Route path="/provider/listings" element={<ProviderListings />} />
        <Route path="/provider/reviews" element={<ProviderReviews />} />
        <Route path="/provider/settings" element={<ProviderSettings />} />
        <Route path="/provider/setup" element={<ProviderSetup />} />

        {/* Dashboards */}
         {/* <Route path="/customer" element={<CustomerDashboard />} /> */}
   {/* // <Route path="/provider" element={<ProviderDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;