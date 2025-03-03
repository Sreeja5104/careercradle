import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CareerCradle</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
