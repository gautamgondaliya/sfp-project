import React from 'react';
import Header from '../../Components/Header';
import Footer from '../Footer/Footer';
import './AboutUs.css';
import img01 from '../../assets/Images/About-Us.png';
import Cursor from '../../Components/Cursor';

const AboutUs = () => {
  return (
    <>
    <Cursor />
    <Header/>
    <div className="about-us-container">
      
      
      <main className="about-us-main">
        <section className="about-us-hero">
          <div className="hero-content-about">
            <div className="left-content">
              <h1>About Us</h1>
            </div>
            <div className="right-content">
              <h2>The Heart Behind <br className='about-br' /> The Frame</h2>
              <p className="tagline">
                <span id='tagline-line'>—</span>
                <span>We Are More Than Creators - We Are Visionaries,</span>
                <span>Architects Of Emotion, And Storytellers Of Brands.</span>
                
              </p>
            </div>
          </div>
          
          <div className="laptop-image-container">
            <img src={img01} alt="Laptop showing design philosophy" className="laptop-image" />
          </div>
          
          <div className="mission-statement">
            <p>Born From A Desire To Redefine Creativity, Squareframe Picture Stands At The Crossroads Of Art And Strategy, Transforming Businesses Into Unforgettable Experiences.</p>
          </div>
        </section>
        
        <hr className="section-divider" />
        
        <section className="about-us-journey">
          <div className="journey-heading">
            <h2>
              Turning Ideas Into Legacies: <span className="journey-heading-subtitle">A Global Journey Of Innovation</span>
            </h2>
          </div>
          
          <div className="journey-description">
            <p>With A Team Of Passionate Minds And Bold Dreamers, We Blend Intuition With Innovation, Turning Ideas Into Legacies.</p>
            <p>Our Journey Spans Continents—<span className="highlight">From Rajkot And Ahmedabad To The UK And Warsaw</span>—Where Our Work Speaks In Every Language, Through Every Emotion.</p>
          </div>
        </section>
        
        <section className="design-philosophy">
          <div className="quote-container">
            <div className="quote-mark">"</div>
            <blockquote>
              Design Must Reflect The Practical And Aesthetic In Business But Above All... Good Design Must Primarily Serve People.
            </blockquote>
            <p className="quote-author">THOMAS J. WATSON</p>
          </div>
        </section>
        
        <section className="trust-section">
          <p className="trust-content">
            Trusted. Celebrated. Remembered. Our Clientele's<br className='br'/>
            Success Is Our Canvas, Painted With Trust, Collaboration,<br className='br'/>
            And Results That Resonate.
          </p>
        </section>
       
      </main>
      
    </div>
    <div className='about-footer'>
      
    <Footer hey="Ce@Abc.co" msg="Email Us" />
    </div>
    </>
  );
};

export default AboutUs;