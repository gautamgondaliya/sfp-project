import React from 'react';
import './Footer.css'

function Footer({hey, msg="Get In Touch"}) {
  return (
    <div>
      <footer id="contact" className="footer">
          <div className="footer-content">
            <h2 className="footer-heading">{hey}</h2>
            <div className="footer-text-container">
              <div className="footer-text-pos">
                <p className="footer-text">|</p>
                <p className="footer-text">{msg}</p>
                <p className="footer-text">|</p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
