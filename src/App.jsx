import React from "react";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Index from "./components/layout";
import Register from "./components/layout/register";
import Login from "./components/layout/login";
import Dashboard from "./components/layout/dashboard";
import "./App.css";
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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
