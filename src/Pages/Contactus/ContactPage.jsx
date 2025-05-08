import React from 'react';
import './ContactPage.css';
import Header from '../../Components/Header';
import Footer from '../Footer/Footer';
import Cursor from '../../Components/Cursor';

const ContactPage = () => {
  return (
    <>
    <Cursor />
    <Header/>
      <div className="contact-main">
        <section className="contact-form-section">
          <form className="contact-form">
          <section className="contact-hero-section">
          <h1 className="contact-hero-title">Let's Connect</h1>
          <p className="contact-hero-subtitle">— Let's Create Something Timeless</p>
        </section>
            <div className="contact-form-row">
              <div className="contact-form-group">
                <input 
                  type="text" 
                  className="contact-form-input" 
                  placeholder="Your Name: *" 
                  required 
                />
              </div>
              <div className="contact-form-group">
                <input 
                  type="email" 
                  className="contact-form-input" 
                  placeholder="E-Mail: *" 
                  required 
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
                <input 
                  type="tel" 
                  className="contact-form-input" 
                  placeholder="Phone Number: *" 
                  required 
                />
              </div>
              <div className="contact-form-group">
                <input 
                  type="text" 
                  className="contact-form-input" 
                  placeholder="City, Country: *" 
                  required 
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
                <div className="contact-select-wrapper">
                  <select className="contact-form-select" required>
                    <option value="" disabled selected>Budget: *</option>
                    <option value="under5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over50k">$50,000+</option>
                  </select>
                </div>
              </div>
              <div className="contact-form-group">
                <div className="contact-select-wrapper">
                  <select className="contact-form-select" required>
                    <option value="" disabled selected>Interested For: *</option>
                    <option value="branding">Branding</option>
                    <option value="website">Website Design</option>
                    <option value="marketing">Marketing</option>
                    <option value="photography">Photography</option>
                    <option value="videography">Videography</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
                <input 
                  type="text" 
                  className="contact-form-input" 
                  placeholder="Company Name: *" 
                  required 
                />
              </div>
              <div className="contact-form-group">
                <input 
                  type="url" 
                  className="contact-form-input" 
                  placeholder="Website: *" 
                  required 
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group-full">
                <textarea 
                  className="contact-form-textarea" 
                  placeholder="Tell Us Everything: *" 
                  rows="6" 
                  required 
                ></textarea>
              </div>
            </div>

            <div className="contact-form-row">
              <button type="submit" className="contact-submit-button">Submit</button>
            </div>
          </form>
          <div className="contact-info-container">
          <div className="contact-info-column">
            <h3 className="contact-info-title">CALL US</h3>
            <p className="contact-info-text">+1 123-456-7891</p>
            <p className="contact-info-text">+1 123-456-7891</p>
          </div>
          <div className="contact-info-column">
            <h3 className="contact-info-title">VISIT US</h3>
            <p className="contact-info-text">Rajkot | Ahmedabad</p>
            <p className="contact-info-text">UK | Warsaw</p>
          </div>
          <div className="contact-info-column">
            <h3 className="contact-info-title">EMAIL US</h3>
            <p className="contact-info-text">OFFICE@ABC.CO</p>
            <p className="contact-info-text">XYZ@ABC.CO</p>
            <p className="contact-info-text">OFFICE@ABC.CO</p>
            <p className="contact-info-text">XYZ@ABC.CO</p>
          </div>
        </div>
        </section>

        

        <section className="contact-quote-section">
          <p className="contact-quote-text">
            Creativity Knows No Borders, And Neither Do We. Whether You Have A Vision Waiting To Be Shaped
            
            Or A Brand Ready To Be Reimagined, We're Here To Make It Happen.
          </p>
        </section>

        <section className="contact-map-section">
          <div className="contact-map-container">
            {/* Replace with your actual map integration */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68689408!2d70.7422067!3d22.2736308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1646745302187!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>
        </section>

       
      </div>
    <div className='contact-footer'>

    <Footer hey="Ce@Abc.co" msg="Email Us"/>
    </div>
    </>
  );
};

export default ContactPage;