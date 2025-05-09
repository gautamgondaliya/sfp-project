import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import LogoBlack from "../assets/Images/logo_black.svg";
import LogoWhite from "../assets/Images/logo_white.svg";
import { Squash as Hamburger } from 'hamburger-react';  
import SplitText from "./SplitText";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [isnOpen, setOpen] = useState(false);
  const [isDarkHeader, setIsDarkHeader] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  useEffect(() => {
    if (isOpen) {
      setTriggerAnimation(true);
      setTimeout(() => setTriggerAnimation(false), 500); // Reset after animation time
    }
  }, [isOpen]);
  
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveMenu("Work");
        setIsDarkHeader(false);
        break;
      case "/studio":
        setActiveMenu("Studio");
        setIsDarkHeader(true);
        break;
      case "/services":
        setActiveMenu("Services");
        setIsDarkHeader(true);
        break;
      case "/about-us":
        setActiveMenu("About Us");
        setIsDarkHeader(true);
        break;
      case "/contact-us":
        setActiveMenu("Get In Touch");
        setIsDarkHeader(true);
        break;
      default:
        setActiveMenu("");
        setIsDarkHeader(true);
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setSubmenuOpen(null);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleMenuClick = (menuItem) => {
    setActiveMenu("");
    setTimeout(() => {
      setActiveMenu(menuItem);
    }, 0);
    setIsOpen(false);
    setSubmenuOpen(null);
  };

  const toggleSubmenu = (menuItem) => {
    setSubmenuOpen(submenuOpen === menuItem ? null : menuItem);
  };

  return (
    <div>
      <div className={`homepage-header ${isDarkHeader ? "dark-header" : ""}`}>
        <Link to="/" className="logo-links">
        <img
            src={isDarkHeader || isnOpen ? LogoBlack : LogoWhite}
            alt="Sfp-logo"
            className={isDarkHeader || isnOpen }
          />
        </Link>
        <div className="homepage-menu-icon">
          <button className="menu-icon" onClick={toggleMenu}>
            <Hamburger toggled={isnOpen} toggle={setOpen} rounded color={isDarkHeader || isOpen ? "black" : "white"} />
          </button>
        </div>
      </div>

      <div className={`menu-content ${isOpen ? "open" : ""} ${isDarkHeader ? "dark-menu" : ""}`}>
       
      <SplitText
          key={triggerAnimation} // Changing key forces re-render when the menu opens
          text={activeMenu}
          className="background-text"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.5}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />


      
        <ul>
          <li><Link to="/work" className={activeMenu === "Work" ? "active" : ""} onClick={() => handleMenuClick("Work")}>Work</Link></li>
          <li><Link to="/studio" className={activeMenu === "Studio" ? "active" : ""} onClick={() => handleMenuClick("Studio")}>Studio</Link></li>
          <li><Link to="/services" className={activeMenu === "Services" ? "active" : ""} onClick={() => handleMenuClick("Services")}>Services</Link></li>
          <li>
            <Link className={`submenu-btn ${submenuOpen === "Unscripted" ? "open" : ""}`} onClick={() => toggleSubmenu("Unscripted")}>
              Unscripted
            </Link>
            {submenuOpen === "Unscripted" && (
              <ul className="submenu">
                <li><Link to="/bts" onClick={() => handleMenuClick("BTS")}>BTS</Link></li>
                <li><Link to="/blog" onClick={() => handleMenuClick("Blog")}>Blog</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link className={`submenu-btn ${submenuOpen === "Get In Touch" ? "open" : ""}`} onClick={() => toggleSubmenu("Get In Touch")}>
              Get In Touch
            </Link>
            {submenuOpen === "Get In Touch" && (
              <ul className="submenu">
                <li><Link to="/contact-us" onClick={() => handleMenuClick("Contact")}>Contact</Link></li>
                <li><Link to="/career" onClick={() => handleMenuClick("Career")}>Career</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
