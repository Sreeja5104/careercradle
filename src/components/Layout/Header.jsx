// import React from "react";
import { Link } from "react-router-dom";
import "../Styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">CareerCradle</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search jobs..." />
        <button>Search</button>
      </div>
    </header>
  );
};
export default Header;
