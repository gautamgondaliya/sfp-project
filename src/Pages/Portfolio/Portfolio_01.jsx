import React from 'react';
import { useState } from 'react';
import './Portfolio_01.css';

import pp1 from '../../assets/Images/pp_01_01.png';
import pp2 from '../../assets/Images/pp_01_02.png';
import pp3 from '../../assets/Images/pp_01_03.png';
import pp4 from '../../assets/Images/pp_01_04.png';
import pp5 from '../../assets/Images/pp_01_05.png';
import pp6 from '../../assets/Images/pp_01_06.png';
import pp7 from '../../assets/Images/pp_01_07.png';
import pp8 from '../../assets/Images/pp_01_08.png';
import pp9 from '../../assets/Images/pp_01_09.png';
import pp10 from '../../assets/Images/pp_01_10.png';
import pp11 from '../../assets/Images/pp_01_11.png';
import pp12 from '../../assets/Images/pp_01_12.png';
import pp13 from '../../assets/Images/pp_01_13.png';
import Header from '../../Components/Header';
import Footer from '../Footer/Footer';
import Cursor from '../../Components/Cursor';

const Portfolio_01 = () => {
  const [activeTab, setActiveTab] = useState("All");

 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <>
    <Cursor />
     <div className='header-portfolio'>

     <Header/>
     </div>
      <div className="header-mural">
        
        <img src={pp1} alt="Colorful mural with text fragments including 'R', 'droom', and other elements" />
      </div>
      
      <div className="portfolio-container">
        {/* Project Information Section */}
        <div className="project-info-section">
          <div className="project-meta">
            <div className="meta-item">
              <h3 className="meta-title">Client</h3>
              <p className="meta-content">Namo Monk</p>
            </div>
            <div className="meta-item">
              <h3 className="meta-title">Year</h3>
              <p className="meta-content">2023</p>
            </div>
            
          </div>

          <div className="project-headline">
            <h2 className="subheading">Encapsulating The Feelings Of</h2>
            <h1 className="main-heading">Mindfulness And Peace With Namo Monk</h1>
          </div>
        </div>

        {/* Design Process Section - Sketches */}
        <div className="process-image-full">
          <img src={pp2} alt="Hands sketching wireframes and design layouts" />
        </div>

        {/* Color Palette Section */}
        <div className="process-image-full">
          <img src={pp3} alt="Pantone color swatches in various colors" />
        </div>

        {/* Design Artifacts Grid */}
        <div className="design-artifacts-grid">
          <div className="grid-item">
            <img src={pp4} alt="Color pattern compositions and layouts" />
          </div>
          <div className="grid-item">
            <img src={pp5} alt="Abstract color compositions with blue and red elements" />
          </div>
        </div>
        
        <div className="design-artifacts-grid">
          <div className="grid-item">
            <img src={pp6} alt="Color pattern compositions and layouts" />
          </div>
          <div className="grid-item">
            <img src={pp7} alt="Abstract color compositions with blue and red elements" />
          </div>
        </div>

        {/* Designer Working */}
        <div className="process-image-full">
          <img src={pp8} alt="Designer working on sketches with colorful sticky notes" />
        </div>

        {/* Design Books */}
        <div className="process-image-full">
          <img src={pp9} alt="Design books including 'CHANGE by Design' on yellow surface" />
        </div>

        <div className="portfolio-content">
          <h3>Typography & Color Palette</h3>
          <div className='portfolio-content-div'>
            <p>
              To Seamlessly Align And Complement The Smooth And Subtle Design System, Migra Light With Elegant Glyphs And Delicate Edges Is Selected As The Primary Font. For The Secondary Font, The Archivo Family Has Been Selected. Its Simple Yet Contemporary Style Assists In Getting Brand Communications Across With Ease.
            </p>
            <p className="credits">
              "Nature Always Wears The Colours Of The Spirit" - Ralph Waldo Emerson. We Borrowed The Colours From Mother Nature To Create An Immersive At The Same Time Liberating Vibe For The Brand.
            </p>
          </div>
        </div>

        <div className="process-image-full">
          <img src={pp10} alt="Hands sketching wireframes and design layouts" />
        </div>

        <div className="process-image-full">
          <img src={pp11} alt="Hands sketching wireframes and design layouts" />
        </div>

        <div className="design-artifacts-grid">
          <div className="grid-item">
            <img src={pp12} alt="Color pattern compositions and layouts" />
          </div>
          <div className="grid-item">
            <img src={pp13} alt="Abstract color compositions with blue and red elements" />
          </div>
        </div>
        
        
      </div>
      <Footer hey="See More" msg="Portfolio"/>
    </>
  );
};

export default Portfolio_01;