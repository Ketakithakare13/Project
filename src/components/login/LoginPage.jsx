// import React, { useState } from "react";
// import "./LoginPage.css";
// import { Link, useNavigate } from "react-router-dom";

// function LoginPage({ onRegisterClick }) {
//   const [email, setEmail] = useState(""); // State to handle email input
//   const [password, setPassword] = useState(""); // State to handle password input
//   const navigate = useNavigate(); // Hook for navigation

//   // Handle form submit
//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Get stored credentials from local storage
//     const storedUserData = localStorage.getItem("userData");

//     if (!storedUserData) {
//         alert("No user data found. Please register first.");
//         return;
//       }
  
//       // Parse the stored user data
//       const userData = JSON.parse(storedUserData);
  
//       // Check if the entered email and password match the stored data
//       if (email === userData.email && password === userData.password) {
//         // Redirect to the profile page if login is successful
//         navigate("/user");
//       } else {
//         alert("Invalid email or password.");
//       }
    
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h1>Login</h1>
//         <form className="login-form" onSubmit={handleLogin}>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Update email state
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} // Update password state
//           />
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>

//         <div className="login-footer">
//           Don't have an account?{" "}
//           <Link to="/register">
//             <span className="register-link" onClick={onRegisterClick}>
//               Register or Create Account
//             </span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginPage;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./LoginPage.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login initiated...");
    console.log("Email:", email, "Password:", password);

    try {
      const response = await axios.post('http://localhost:8080/users/signin', {
        email,
        password,
      });

      console.log("Response received:", response.data);
      const { token } = response.data;

      // Save the token in localStorage
      localStorage.setItem('token', response.data.jwt);
      console.log("Token stored in localStorage:", localStorage.getItem('token'));

      alert('Login successful!');
      navigate('/createprofile'); // Redirect to create profile page
    } catch (error) {
      console.error("Login failed:", error);
      alert(error.response?.data || "Login failed. Please try again.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <Link to="/register">
            <button className="m-2">Register Now</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
