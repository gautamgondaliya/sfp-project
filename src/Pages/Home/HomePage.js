import React, { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useTransform, useSpring } from "framer-motion";
import "./HomePage.css";
import Header from "../../Components/Header";
import Cursor from "../../Components/Cursor";
import { useNavigate } from "react-router-dom";

import sfp1 from "../../assets/Images/01.png";
import sfp2 from "../../assets/Images/sfp2.png";
import sfp3 from "../../assets/Images/sfp3.png";
import sfp4 from "../../assets/Images/sfp4.png";

const projectImages = [sfp1, sfp2, sfp3, sfp4, sfp1, sfp2];
const projectTitles = [
  "Redefining Form",
  "Ethereal Brilliance",
  "Know Your Farmers",
  "Ranbhajya",
  "A Portrait Of Elegance",
  "Fairy tale",
];

const HomePage = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const trackRef = useRef(null);
  const progressBarRef = useRef(null);

  const [scrollRange, setScrollRange] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(0);
  const [lastHoveredProject, setLastHoveredProject] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(
    parseInt(localStorage.getItem("currentSlide")) || 1
  );
  const [scrollProgress, setScrollProgress] = useState(
    parseFloat(localStorage.getItem("scrollProgress")) || 0
  );

  const handleProjectClick = (index) => {
    const projectURLs = [
      "/portfolio/project1", "/portfolio/project1", "/portfolio/project1",
      "/portfolio/project1", "/portfolio/project1", "/portfolio/project1",
      "/portfolio/project1", "/portfolio/project1",
    ];
    navigate(projectURLs[index]);
  };

  // Calculate scroll range on layout
  useLayoutEffect(() => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.scrollWidth;
      setScrollRange(containerWidth - window.innerWidth);
    }
  }, []);

  // Resize observer to track changes in ghost container
  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      const containerWidth = scrollRef.current?.scrollWidth || 0;
      setScrollRange(containerWidth - window.innerWidth);
    }
  }, []);

  useLayoutEffect(() => {
    const updateScrollRange = () => {
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const maxScroll = Math.max(containerWidth - viewportWidth, 0);
        setScrollRange(maxScroll);
      }
    };
  
    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
  
    return () => window.removeEventListener("resize", updateScrollRange);
  }, []);
  

  // Handle scroll position and clamp progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const rawProgress = scrollY / maxScroll;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setScrollProgress(clamped);
      localStorage.setItem("scrollProgress", clamped.toString());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("currentSlide", currentSlide.toString());
  }, [currentSlide]);

  // Scrollbar width update
  useEffect(() => {
    const updateTrackWidth = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.offsetWidth);
    };
    updateTrackWidth();
    window.addEventListener("resize", updateTrackWidth);
    return () => window.removeEventListener("resize", updateTrackWidth);
  }, []);

  // Framer Motion springs
  const transform = useTransform(() => -scrollProgress * scrollRange, [0, 1], [0, -scrollRange]);
  const spring = useSpring(transform, { damping: 15, mass: 0.27, stiffness: 55 });

  return (
    <>
      <Cursor />
      <div className="homepagecontainer" data-bg={hoveredProject}>
        <Header />
        <div className="scroll-container">
          <div className="homepage-vertical-text">
            <a href="#">fb</a> <a href="#">tw</a> <a href="#">gh</a> <a href="#">be</a>
          </div>

          <motion.section
            ref={scrollRef}
            style={{ x: spring }}
            className="projectname-container"
          >
            <ul className="projectallnames">
              {projectTitles.map((title, index) => (
                <li
                  key={index}
                  className={`main-title project1name ${currentSlide === index + 1 ? "active" : ""}`}
                  onMouseEnter={() => {
                    setCurrentSlide(index + 1);
                    setHoveredProject(index);
                    setLastHoveredProject(index);
                  }}
                  onMouseLeave={() => setHoveredProject(lastHoveredProject)}
                >
                  <h1 onClick={() => handleProjectClick(index)} style={{ cursor: "pointer" }}>
                    {title}
                  </h1>
                </li>
              ))}
            </ul>
          </motion.section>

          <div className="homepage-copyright" style={{ cursor: "pointer" }}>
            2025 © Param Solutions
          </div>
        </div>
      </div>

      {/* Slide number */}
      <div className="number-slide">
        <motion.div
          className="current-hover-slide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          key={currentSlide}
        >
          {currentSlide.toString().padStart(2, "0")}
        </motion.div>
        <div className="lineofnumber"></div>
        <div className="All-slide">06</div>
      </div>

      {/* Scrollbar */}
      <div className="scrollbar-container" ref={trackRef}>
        <motion.div
          ref={progressBarRef}
          className="scrollbar-thumb"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          style={{ left: `${scrollProgress * (trackWidth - 20)}px` }}
          onDrag={(event, info) => {
            if (!trackRef.current || !scrollRef.current) return;

            const trackBounds = trackRef.current.getBoundingClientRect();
            const thumbWidth = 20;
            const maxX = trackBounds.width - thumbWidth;
            const clampedX = Math.min(Math.max(info.point.x - trackBounds.left, 0), maxX);
            const newProgress = clampedX / maxX;

            setScrollProgress(newProgress);
            localStorage.setItem("scrollProgress", newProgress.toString());

            const newScrollX = -newProgress * scrollRange;
            scrollRef.current.style.transform = `translateX(${newScrollX}px)`;
          }}
        />
      </div>

      {/* Ghost spacer for scroll */}
      <div ref={ghostRef} style={{ height: `${scrollRange}px` }} className="ghost" />
    </>
  );
};

export default HomePage;
