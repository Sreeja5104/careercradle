import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("⚠ Please fill in all fields.");
      return;
    }

    // Mock user data for Career Cradle
    localStorage.setItem("isLoggedIn", "true"); // Save login status
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userName", "Full Name"); // Example user name
    localStorage.setItem("userRole", "Software Engineer"); // Example role
    

    navigate("/dashboard"); // ✅ Redirect to Dashboard instead of Profile
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;
