import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Index from "./components/layout/Index";
import Register from "./components/layout/Register";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
