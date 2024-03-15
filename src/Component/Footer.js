// Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>คิดจะพัก คิดถึงSiriLerGrand</p>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Email: sirilersrand@gmail.com</p>
          <p>Phone: 066-109-7506</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
