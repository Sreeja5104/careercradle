import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">CareerCradle</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
