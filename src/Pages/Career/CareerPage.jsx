import React from 'react';
import './CareerPage.css';
import Header from '../../Components/Header';
import Footer from '../Footer/Footer';
import Cursor from '../../Components/Cursor';

const CareerPage = () => {
  return (
    <>
    <Cursor />
    <Header/>
    <div className="career-container">
    
      
      <main className="career-main">
        {/* Hero Section */}
        <section className="career-hero-section">
          <div className="career-hero-content">
            <h1 className="career-hero-title">Career & Collaboration</h1>
            <p className="career-hero-subtitle">— Where Passion Meets Purpose</p>
            <p className="career-hero-description">
              Creativity Thrives Where Dreamers Gather. At Squareframe Picture, We Don't Just Build Brands—We Build Careers, Friendships, And A Family Of Artists, Thinkers, And Innovators.
            </p>
          </div>
        </section>

        {/* Career and Collaboration Sections */}
        <section className="career-info-section">
          <div className="career-info-card">
            <h2 className="career-info-title">Career</h2>
            <div className="career-info-separator">—</div>
            <p className="career-info-description">
              Join A Team That Turns Ideas Into Impact. If You See The World Through A Creative Lens, Let's Shape The Future Together.
            </p>
          </div>

          <div className="career-info-card">
            <h2 className="career-info-title">Collaboration</h2>
            <div className="career-info-separator">—</div>
            <p className="career-info-description">
              We Believe In The Magic Of Shared Visions. Whether You're An Artist, Storyteller, Or Strategist, Let's Craft Something Extraordinary Side By Side.
            </p>
          </div>
        </section>

        {/* Application Form */}
        <section className="career-application-section">
          <h2 className="career-application-title">Application Form</h2>
          <form className="career-application-form">
            <div className="career-form-row">
              <div className="career-form-group">
                <input 
                  type="text" 
                  id="fullName" 
                  className="career-form-input" 
                  placeholder="Full Name: *" 
                  required 
                />
              </div>
              <div className="career-form-group">
                <input 
                  type="email" 
                  id="email" 
                  className="career-form-input" 
                  placeholder="E-Mail: *" 
                  required 
                />
              </div>
            </div>

            <div className="career-form-row">
              <div className="career-form-group">
                <input 
                  type="tel" 
                  id="phoneNumber" 
                  className="career-form-input" 
                  placeholder="Phone Number: *" 
                  required 
                />
              </div>
              <div className="career-form-group">
                <input 
                  type="url" 
                  id="portfolio" 
                  className="career-form-input" 
                  placeholder="Portfolio: *" 
                  required 
                />
              </div>
            </div>

            <div className="career-form-row">
              <div className="career-form-group">
                <div className="career-select-wrapper">
                  <select 
                    id="select" 
                    className="career-form-select" 
                    required
                  >
                    <option value="" disabled selected hidden>Select: *</option>
                    <option value="fulltime">Full Time</option>
                    <option value="parttime">Part Time</option>
                    <option value="freelance">Freelance</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
              </div>
              <div className="career-form-group">
                <div className="career-select-wrapper">
                  <select 
                    id="position" 
                    className="career-form-select" 
                    required
                  >
                    <option value="" disabled selected hidden>Position: *</option>
                    <option value="designer">Designer</option>
                    <option value="developer">Developer</option>
                    <option value="marketer">Marketer</option>
                    <option value="strategist">Strategist</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="career-form-row">
              <div className="career-form-group career-form-group-full">
                <div className="career-upload-resume">
                  <label htmlFor="resume" className="career-upload-label">Upload Resume: *</label>
                  <input 
                    type="file" 
                    id="resume" 
                    className="career-form-file" 
                    accept=".pdf,.doc,.docx" 
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="career-form-row">
              <button type="submit" className="career-submit-button">Submit</button>
            </div>
          </form>
        </section>

        {/* Quote Section */}
        <section className="career-quote-section">
          <p className="career-quote-text">
            Because The Best Ideas Aren't Just Created. They Are Shared, Nurtured, And Brought To Life Together.
          </p>
        </section>

        
      </main>

      
    </div>
    <Footer hey="Say Hello" msg="Get Into Touch" />
    </>
  );
};

export default CareerPage;

