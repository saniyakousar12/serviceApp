// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/register.css";   // EXACT FILE PATH

// function Register() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitForm = async (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     if (!form.role) {
//       alert("Please select a role!");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:8080/api/auth/register", {
//         email: form.email,
//         password: form.password,
//         role: form.role,
//       });

//       alert("Signup Successful!");

//       navigate("/login");
//     } catch (error) {
//       alert(error.response?.data?.message || "Registration failed");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="signup-bg d-flex justify-content-center align-items-center">
//       <div className="signup-card shadow-lg p-4">
//         <h3 className="text-center mb-3 signup-title">Create Your Account</h3>

//         <form onSubmit={submitForm}>
//           <input
//             type="email"
//             name="email"
//             className="form-control signup-input mb-3"
//             placeholder="Email"
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="password"
//             className="form-control signup-input mb-3"
//             placeholder="Password"
//             onChange={handleChange}
//             required
//           />

//           <input
//             type="password"
//             name="confirmPassword"
//             className="form-control signup-input mb-3"
//             placeholder="Confirm Password"
//             onChange={handleChange}
//             required
//           />

//           <label className="fw-bold mb-1 signup-label">Choose Role</label>

//           <div className="d-flex justify-content-between mt-2 mb-3">
//             <button
//               type="button"
//               className={`btn role-btn w-50 me-2 ${
//                 form.role === "provider" ? "selected-role" : ""
//               }`}
//               onClick={() => setForm({ ...form, role: "provider" })}
//             >
//               Service Provider
//             </button>

//             <button
//               type="button"
//               className={`btn role-btn w-50 ${
//                 form.role === "customer" ? "selected-role" : ""
//               }`}
//               onClick={() => setForm({ ...form, role: "customer" })}
//             >
//               Customer
//             </button>
//           </div>

//           <button type="submit" className="btn signup-btn w-100">
//             Sign Up
//           </button>

//           <p className="text-center mt-2 login-text">
//             Already have an account?{" "}
//             <span className="login-link" onClick={() => navigate("/login")}>
//               Login
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/register.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!form.role) {
      alert("Please select a role!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        username: form.username,
        email: form.email,
        password: form.password,
        role: form.role,
      });

      alert("Signup Successful!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
      console.error(error);
    }
  };

  return (
    <div className="signup-bg d-flex justify-content-center align-items-center">
      <div className="signup-card shadow-lg p-4">
        <h3 className="text-center mb-3 signup-title">Create Your Account</h3>

        <form onSubmit={submitForm}>

          {/* USERNAME FIELD */}
          <input
            type="text"
            name="username"
            className="form-control signup-input mb-3"
            placeholder="Username"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            className="form-control signup-input mb-3"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            className="form-control signup-input mb-3"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            className="form-control signup-input mb-3"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <label className="fw-bold mb-1 signup-label">Choose Role</label>

          <div className="d-flex justify-content-between mt-2 mb-3">
            <button
              type="button"
              className={`btn role-btn w-50 me-2 ${
                form.role === "provider" ? "selected-role" : ""
              }`}
              onClick={() => setForm({ ...form, role: "provider" })}
            >
              Service Provider
            </button>

            <button
              type="button"
              className={`btn role-btn w-50 ${
                form.role === "customer" ? "selected-role" : ""
              }`}
              onClick={() => setForm({ ...form, role: "customer" })}
            >
              Customer
            </button>
          </div>

          <button type="submit" className="btn signup-btn w-100">
            Sign Up
          </button>

          <p className="text-center mt-2 login-text">
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
