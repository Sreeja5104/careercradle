import React from "react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Index from "./components/Layout/Index";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Index />
      <Footer />
    </div>
  );
};

export default App;
