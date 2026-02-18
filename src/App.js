import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home/Home";
import Policies from "./components/Policies";
import ScrollToTop from "./components/ScrollToTop";
import Infrastructure from "./components/Infrastructure";
import Services from "./components/Services";

import "./App.css";

// Import your page components
//import Home from "./pages/Home";

//import Services from "./pages/Services";
//import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/infrastructure" element={<Infrastructure />} /> 
          <Route path="/services" element={<Services />} />
          
          {/* Add more routes as needed */}
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
