import React, { useState } from 'react';
import './Service.css';
import Header from '../../Components/Header';
import Footer from '../Footer/Footer';
import Cursor from '../../Components/Cursor';
import CircularText from './CircularText';

const Service = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: 'production',
      title: 'PRODUCTION',
      description: "Whether It's A Breathtaking Film, A Commercial, Or A Dynamic Digital Piece, We Bring Your Stories To Life With Precision And Passion. Every Frame, Every Detail Is Designed To Captivate And Connect With Audiences Across The Globe."
    },
    {
      id: 'conceptualization',
      title: 'CONCEPTUALIZATION',
      description: "Whether It's A Breathtaking Film, A Commercial, Or A Dynamic Digital Piece, We Bring Your Stories To Life With Precision And Passion. Every Frame, Every Detail Is Designed To Captivate And Connect With Audiences Across The Globe."
    },
    {
      id: 'branding',
      title: 'BRANDING',
      description: "Whether It's A Breathtaking Film, A Commercial, Or A Dynamic Digital Piece, We Bring Your Stories To Life With Precision And Passion. Every Frame, Every Detail Is Designed To Captivate And Connect With Audiences Across The Globe."
    },
    {
      id: 'advertising',
      title: 'ADVERTISING',
      description: "Whether It's A Breathtaking Film, A Commercial, Or A Dynamic Digital Piece, We Bring Your Stories To Life With Precision And Passion. Every Frame, Every Detail Is Designed To Captivate And Connect With Audiences Across The Globe."
    },
    {
      id: 'brand-consulting',
      title: 'BRAND CONSULTING',
      description: "Whether It's A Breathtaking Film, A Commercial, Or A Dynamic Digital Piece, We Bring Your Stories To Life With Precision And Passion. Every Frame, Every Detail Is Designed To Captivate And Connect With Audiences Across The Globe."
    }
  ];

  return (
    <>
    <Cursor />
      <Header darkHeader={true} />
      <div className="service-container">
        <div className="hero-section-service">
          <div className="hero-content">
          
            <h1 className="company-title">Our Company Service</h1>
            <div className="company-description">
              <p>We Are A Full-Service Digital Agency That Builds Immersive User Experience. Our Team Creates An Exceptional Visualization And Though-Out Functionality.</p>
            </div>
          </div>
        </div>

        <div className="services-list">
          {sections.map((section) => (
            <div 
              key={section.id} 
              className={`service-item ${section.id} ${hoveredSection === section.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <div className="service-content">
                <h2 className="service-title">{section.title}</h2>
                {hoveredSection === section.id && section.description && (
                  <p className="service-description">{section.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        
      </div>
      <Footer hey="Portfolio" msg="See Projects" />
    </>
  );
};

export default Service;