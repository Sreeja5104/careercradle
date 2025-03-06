import React, { useState } from "react";
import "../Styles/Login.css";

const Login = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>

      {showPopup && <div className="popup">✅ Login Successful!</div>}
    </div>
  );
};

export default Login;
