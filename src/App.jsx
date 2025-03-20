import React from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Index from "./components/Layout/Index";
import Register from "./components/Layout/Register";
import Login from "./components/Layout/Login";
import Dashboard from "./components/Layout/Dashboard";
import Profile from "./components/Layout/Profile";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
