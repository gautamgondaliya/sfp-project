import React, { useState,useEffect  } from "react";
import "./PortfolioPage.css";
import portfolio_01 from "../../assets/Images/portfolio_01.png";
import portfolio_02 from "../../assets/Images/portfolio_02.png";
import portfolio_03 from "../../assets/Images/portfolio_03.png";
import portfolio_04 from "../../assets/Images/portfolio_04.png";
import portfolio_05 from "../../assets/Images/portfolio_05.png";
import portfolio_06 from "../../assets/Images/portfolio_06.png";
import portfolio_07 from "../../assets/Images/portfolio_07.png";
import portfolio_08 from "../../assets/Images/portfolio_08.png";
import portfolio_09 from "../../assets/Images/portfolio_09.png";
import Header from '../../Components/Header';
import Footer from '../Footer/Footer';
import Cursor from "../../Components/Cursor";
import SplitText from "../../Components/SplitText";
import BlurText from "./BlurText";

import { motion, useScroll, useTransform } from "framer-motion";

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  useEffect(() => {
    const sections = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );
  
    sections.forEach((section) => observer.observe(section));
  
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);
  

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <Cursor />
      <Header />
      <div className="portfolio-container">
        <main className="main-content">
          <section className="hero-section">
          <BlurText
  text="Frames That Speak"
  delay={150}
  animateBy="words"
  direction="top"
 
 className="main-title-portfolio"
/>

        
            <p className="subtitle">
              Some Stories Are Told, And Some Are Felt. Our Work Is An Echo Of
              Passion, Innovation, And Artistry.
            </p>
            <p className="quote">
              — Projects That Don't Just Exist But Leave An Impression.
            </p>
            <div className="grid-item large">
              <img src={portfolio_01} alt="Featured portfolio piece" />
            </div>
          </section>

          <section className="feature-section animate-on-scroll">
            <div className="feature-column left-column">
              <div className="feature-item port-hidden">
                <p>
                  Venturing Past The Realm Of Tangible Experiences, We Delve
                  Into The Unending Possibilities Of Creativity. A Persistent
                  Drive To Seek The Extraordinary
                </p>
              </div>
              <div className="feature-item port-hidden">
                <p>
                  Transformation. Rooted In The Very Essence Of Its Name, 'ABc',
                  Our Endeavour Lies In Pushing The Boundaries Of Shapes,
                  Colours And Forms To Explore And Inspire
                </p>
              </div>
              <div className="feature-item port-hidden">
                <p>Stories Worth Telling</p>
              </div>
              <div className="feature-item port-hidden-m">
                <p>
                  Venturing Past The Realm Of Tangible Experiences, We Delve
                  Into The Unending Possibilities Of Creativity. A Persistent
                  Drive To Seek The Extraordinary Transformation. Rooted In The
                  Very Essence Of Its Name, 'ABc', Our Endeavour Lies In Pushing
                  The Boundaries Of Shapes, Colours And Forms To Explore And
                  Inspire Stories Worth Telling
                </p>
              </div>
            </div>
            <div className="feature-column right-column">
              <div className="feature-item">
                <p className="bold">Designing Stories. Inspiring Emotions.</p>
              </div>
              <div className="feature-item">
                <p className="light">
                  Young Pack With Diverse Minds And A Common Purpose.
                </p>
              </div>
            </div>
          </section>

          <div id="portfolio" className="category-tabs">
            {["All", "Production", "Marketing", "Leader Ship"].map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <hr className="tabs-line" />

          <section className="portfolio-grid">
            <div className="grid-item large animate-on-scroll">
              <img src={portfolio_02} alt="Typography artwork" />
              <div className="item-caption">
                <h3>Vulnerable</h3>
                <p>
                  Encapsulating The Feelings Of Mindfulness And Peace With Namo
                  Monk
                </p>
              </div>
            </div>

            <div className="grid-item full animate-on-scroll">
              <img src={portfolio_03} alt="Beauty products" />
              <div className="item-caption">
                <h3>WILD APETITE</h3>
                <p>
                  Encapsulating The Feelings Of Mindfulness And Peace With Namo
                  Monk
                </p>
              </div>
            </div>

            <div className="grid-row">
              <div className="grid-item half animate-on-scroll">
                <img src={portfolio_04} alt="Coffee and cakes" />
                <div className="item-caption">
                  <h3>Coffee and Cakes</h3>
                  <p>
                    Encapsulating The Feelings Of Mindfulness And Peace With
                    Namo Monk
                  </p>
                </div>
              </div>
              <div className="grid-item half animate-on-scroll">
                <img src={portfolio_05} alt="Food" />
                <div className="item-caption">
                  <h3>Food</h3>
                  <p>
                    Encapsulating The Feelings Of Mindfulness And Peace With
                    Namo Monk
                  </p>
                </div>
              </div>
            </div>

            <div className="grid-row">
              <div className="grid-item half animate-on-scroll">
                <img src={portfolio_06} alt="Plants Near Farmers" />
                <div className="item-caption">
                  <h3>Know Your Farmers</h3>
                  <p>
                    Encapsulating The Feelings Of Mindfulness And Peace With
                    Namo Monk
                  </p>
                </div>
              </div>
              <div className="grid-item half animate-on-scroll">
                <img src={portfolio_07} alt="Jewelry Of Jewels" />
                <div className="item-caption">
                  <h3>Journey Of Jewels</h3>
                  <p>
                    Encapsulating The Feelings Of Mindfulness And Peace With
                    Namo Monk
                  </p>
                </div>
              </div>
            </div>

            <div className="grid-row">
              <div className="grid-item half animate-on-scroll">
                <img src={portfolio_08} alt="Fairy Tale" />
                <div className="item-caption">
                  <h3>Fairy Tale</h3>
                  <p>
                    Encapsulating The Feelings Of Mindfulness And Peace With
                    Namo Monk
                  </p>
                </div>
              </div>
              <div className="grid-item half animate-on-scroll">
                <img src={portfolio_09} alt="Automobile" />
                <div className="item-caption">
                  <h3>Architectural</h3>
                  <p>
                    Encapsulating The Feelings Of Mindfulness And Peace With
                    Namo Monk
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Footer hey="Say Hello" msg="Get Into Touch" />
        </main>
      </div>
    </>
  );
};

export default PortfolioPage;
