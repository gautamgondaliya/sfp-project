import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Service from "./Pages/Services/Service";
import AboutUs from "./Pages/Aboutus/AboutUs";
import PortfolioPage from "./Pages/Portfolio/PortfolioPage";
import ContactPage from "./Pages/Contactus/ContactPage";
import CareerPage from "./Pages/Career/CareerPage";
import Portfolio_01 from "./Pages/Portfolio/Portfolio_01";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router> 
      <div className="App">
      <ScrollToTop /> 
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/studio" element={<PortfolioPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/portfolio/project1" element={<Portfolio_01 />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
