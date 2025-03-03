import React from "react";
import "../Styles/Register.css";

const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered Successfully!");
  }
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
