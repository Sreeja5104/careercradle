import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [usedEmails, setUsedEmails] = useState(new Set());
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("⚠ Please fill in all fields.");
      return;
    }

    if (usedEmails.has(email)) {
      setError("❌ This email has already been used.");
      return;
    }

    setUsedEmails(new Set([...usedEmails, email])); // Add email to used list
    setShowPopup(true);
    setError("");

    setTimeout(() => setShowPopup(false), 3000);
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
      {showPopup && <div className="popup">✅ Login Successful!</div>}
    </div>
  );
};

export default Login;