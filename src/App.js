import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignupPage from "./components/SignupPage";
import Loginpage from "./components/Loginpage";
import CustomerDashboard from "./components/Dashboard/CustomerDashboard";
import ProviderDashboard from "./components/Dashboard/ProviderDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Loginpage />} />

        {/* Dashboards */}
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/provider" element={<ProviderDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
