import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(45);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const hoverElements = document.querySelectorAll(
      "a, button, h1, h2, h3, h4, h5, h6, p, .hover-target"
    );

    const handleMouseEnter = () => {
      setSize(60);
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setSize(45);
      setIsHovering(false);
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={`cursor ${isHovering ? "cursor-hover" : ""}`}
      animate={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
      }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    />
  );
};

export default Cursor;
